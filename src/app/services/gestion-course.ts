import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionCourse {
    private allCourses = [
        {
            id : 1,
            title : "Angular",
            author : "Bart simpson",
            logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Angular-new-logo-small.svg/120px-Angular-new-logo-small.svg.png",
            keywords : ["binding", "components", "pipes"]
        },
        {
            id : 2,
            title : "React",
            author : "Homer simpson",
            logo : "https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png",
            keywords : ["Jsx", "components", "context"]
        },
        {
            id : 3,
            title : "Ionic",
            author : "Lisa simpson",
            logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyddoPvzSjzsR56JbV88VHQ-xYj2UsK7P9EA&s",
            keywords : ["mobile", "page", "Js"]
        }
    ];
    
    getAllCourses() {
        return this.allCourses
    }
  
}
