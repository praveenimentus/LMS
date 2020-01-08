import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const tokenName = 'token';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private url = `${environment.apiBaseUrl}/api/Course`;
  private course = { CourseTitle: '', CourseDescription: '' }; // some data about course

  constructor(private http: HttpClient) {

  }

  public courseSave(data) {
    // tslint:disable-next-line:no-console
    return this.http.post(`${this.url}/saveCourse`, data)
            .pipe(
                map((res: { course: any}) => {
                  return this.course;
                }));
  }

}
