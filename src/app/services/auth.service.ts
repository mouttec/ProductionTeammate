import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Calendar } from 'src/app/models/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  idTeammate = 2;
  idTeammateLocal: any;

  calendarSubject = new Subject<Calendar[]>();
  url = 'http://localhost:8888/MoutteCAPI/backend/api/booking/prepareCalendar.php';
  private calendars: Calendar[];

  constructor(private httpClient: HttpClient) { }


  emitCalendar() {
    this.calendarSubject.next(this.calendars);
  }

  readCalendar() {
    this.httpClient.get<Calendar[]>(`${this.url}`).subscribe(
      (reponse) => {
        this.calendars = reponse;
        this.emitCalendar();
      },
      (error) => {
        console.log(error)
      }
    );
    return this.httpClient.get<Calendar[]>(`${this.url}`);
  }

  getByIdTeammate() {
    localStorage.setItem('idTeammate', JSON.stringify(this.idTeammate));
  }


}
