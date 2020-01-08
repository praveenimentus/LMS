
import { AfterViewInit, Component, HostBinding } from '@angular/core';

import { NgForm } from '@angular/forms';
import { CourseService } from 'app/services/course.service';
import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') private readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') private readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') private readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') private readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') private readonly mdlCellTop = true;
  private course = { CourseTitle: '', CourseDescription: '' }; // some data about course
  public readonly countries = ['Minsk', 'Berlin', 'Moscow', 'NYC'];
  public locationValue = 'Berlin';
  constructor(private courseService: CourseService) {
    super();
  }
  public saveCourse() {
    this.courseService.courseSave(this.course)
      .subscribe();
  }
  onSubmit(f: NgForm) {
        // tslint:disable-next-line:no-console
    console.log(f.value);  // { first: '', last: '' }
    this.courseService.courseSave(f.value)
      .subscribe();

    // tslint:disable-next-line:no-console
   // console.log(f.valid);  // false
  }
}


