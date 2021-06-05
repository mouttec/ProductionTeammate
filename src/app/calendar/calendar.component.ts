import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, TemplateRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format,
} from 'date-fns';
import { Observable, Subject } from 'rxjs';
import { CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, CalendarWeekViewBeforeRenderEvent, CalendarDayViewBeforeRenderEvent, DAYS_OF_WEEK } from 'angular-calendar';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import { CustomDateFormatter } from 'src/app/calendar/custom-date-formatter.provider';

interface Calendar {
  idBooking: number;
  fullNameCustomer: string;
  start: string;
  end: string;
  formulaBooking: string;
}

function changeColor(formulaBooking) {
  if (formulaBooking === 'technicalControl') {
    let color1 = {
      primary: '#FFFF00',
      secondary: '#FFFF006e'
    }
    return color1
  }
  else if (formulaBooking === 'round') {
    let color2 = {
      primary: '#0000FF',
      secondary: '#0000FF6e'
    }
    return color2
  }
  else if (formulaBooking === 'forth' || formulaBooking === 'back') {
    let color3 = {
      primary: '#EF7B15',
      secondary: '#EF7B156e'
    }
    return color3
  }
}

registerLocaleData(localeFr);

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ]
})
export class CalendarComponent implements OnInit {

  view: CalendarView = CalendarView.Week;
  excludeDays: number[] = [0, 6];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events$: Observable<CalendarEvent[]>;

  activeDayIsOpen: boolean = false;

  locale: string = 'fr';

  technicalControl: string;
  round: string;
  back: string;
  forth: string;


  changeDay(date: Date): void {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchEvents();
  }



  fetchEvents() {
    this.events$ = this.http.get<Calendar[]>('http://localhost:8888/MoutteCAPI/backend/api/booking/prepareCalendar.php').pipe(
      map(res => {
        return res.map(event => {
          return {
            idBooking: event.idBooking,
            title: event.fullNameCustomer,
            start: new Date(event.start),
            end: new Date(event.end),
            color: changeColor(event.formulaBooking)
          };
        });
      })
    );
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  eventClicked({ event }): void {
    this.router.navigate(['/booking', event.idBooking]);
  }

  beforeWeekViewRender(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (
            segment.date.getHours() >= 12 && segment.date.getMinutes() ===  30 &&
            segment.date.getHours() <= 13
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }

  beforeWeekViewRender2(renderEvent: CalendarWeekViewBeforeRenderEvent): void {
    renderEvent.hourColumns.forEach(hourColumn => {
      hourColumn.hours.forEach(hour => {
        hour.segments.forEach(segment => {
          if (segment.date.getHours() === 13
          ) {
            segment.cssClass = 'bg-disabled';
          }
        });
      });
    });
  }
}
