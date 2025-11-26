import { Component, inject } from '@angular/core';
import { GestionCourse } from '../services/gestion-course';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
    tabCourses = [];
  constructor(private courseSer : GestionCourse) {}
  //private courseSer = inject(GestionCourse)
  
  ngOnInit() {
    this.tabCourses = this.courseSer.getAllCourses();
  }

}
