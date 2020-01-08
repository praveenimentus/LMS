import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialAngularSelectModule } from 'material-angular-select';

import { ThemeModule } from 'theme';

// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';
import { ButtonsComponent } from './buttons';
import { CardsComponent } from './cards';
import { ColorsComponent } from './colors';
import { CourseComponent } from './course/course.component';
import { FormsComponent } from './forms';
import { IconsComponent } from './icons';
import { RightSidebarModule } from './right-sidebar';
import { TablesComponent, TablesService } from './tables';
import { TypographyComponent } from './typography';
import { UIRoutingModule } from './ui-routing.module';
@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    ThemeModule,
    MaterialAngularSelectModule,
    RightSidebarModule,
    FormsModule,
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    CourseComponent,
    FormsComponent,
    IconsComponent,
    TypographyComponent,
    TablesComponent,
  ],
  providers: [
    TablesService,
  ],
})
export class UIModule { }
