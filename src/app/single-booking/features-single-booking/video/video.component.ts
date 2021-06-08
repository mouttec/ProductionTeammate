import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

declare var MediaRecorder: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input() carStatus: string;
  @Input() statusBooking: string;
  @Input() set initialData(value: any) {
    console.log(value);
    if (value) {
      this.videoBase64 = value.data;
      console.log(this.videoBase64);

      fetch(this.videoBase64)
        .then((res) => res.blob())
        .then((res) => {
          let vidSave: HTMLMediaElement = this.vid2.nativeElement;
          let videoURL = window.URL.createObjectURL(res);
          vidSave.src = videoURL;
        });
    }
  }
  @Output() result = new EventEmitter<any>();
  constraintObj: object;
  @ViewChild('myVideoElement') myVideoElement: ElementRef;
  @ViewChild('btnStart') btnStart: ElementRef;
  @ViewChild('btnStop') btnStop: ElementRef;
  @ViewChild('vid2') vid2: ElementRef;
  @ViewChild('startCam') startCam: ElementRef;
  recordMsg: string;
  videoBase64: string;
  start = false;

  constructor() {
    this.constraintObj = {
      audio: true,
      video: {
        facingMode: 'user',
        width: { min: 640, ideal: 1280, max: 640 },
        height: { min: 480, ideal: 720, max: 480 },
      },
    };
  }

  ngOnInit(): void {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          console.log(device.kind.toUpperCase(), device.label);
        });
      })
      .catch((err) => {
        console.log(err.name, err.message);
      });
  }
  onStartCamera() {
    this.recordMsg = 'Camera démarré....';
    this.startCamera(this).then((base64: string) => this.save(base64));
  }

  clearRecording() {
    this.recordMsg = '';
    this.vid2.nativeElement.src = '';
    this.videoBase64 = null;
  }

  startCamera(self: this) {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices
        .getUserMedia(this.constraintObj)
        .then(function (mediaStreamObj) {
          let video: HTMLMediaElement = self.myVideoElement.nativeElement;
          if ('srcObject' in video) {
            video.srcObject = mediaStreamObj;
          }

          video.onloadedmetadata = function (ev) {
            video.play();
          };

          let start: HTMLButtonElement = self.btnStart.nativeElement;
          let stop: HTMLButtonElement = self.btnStop.nativeElement;
          let vidSave: HTMLMediaElement = self.vid2.nativeElement;
          let mediaRecorder = new MediaRecorder(mediaStreamObj);
          let chunks = [];

          start.addEventListener('click', (ev) => {
            self.recordMsg = 'Enregistrement.....';
            mediaRecorder.start();
            self.start = true;
            console.log(mediaRecorder.state);
          });
          stop.addEventListener('click', (ev) => {
            self.recordMsg = 'Arrêt.....';
            mediaRecorder.stop();
            self.start = false;
            console.log(mediaRecorder.state);
          });
          mediaRecorder.ondataavailable = function (ev) {
            chunks.push(ev.data);
          };
          mediaRecorder.onstop = (ev) => {
            let blob = new Blob(chunks, { type: 'video/mp4;' });
            console.log(blob);
            chunks = [];
            let videoURL = window.URL.createObjectURL(blob);
            vidSave.src = videoURL;
            console.log(videoURL);

            let reader = new window.FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              //console.log(reader.result);
              resolve(reader.result);
            };
          };
        })
        .catch(function (err) {
          console.log(err.name, err.message);
        });
    });
  }

  save(base64: string) {
    this.videoBase64 = base64;
  }

  onSave() {
    this.result.emit({ carStatus: this.carStatus, data: this.videoBase64 });
  }
}
