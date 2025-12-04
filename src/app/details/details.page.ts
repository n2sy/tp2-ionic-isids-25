import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GestionCourse } from '../services/gestion-course';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone : false,
})
export class DetailsPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private alertCtrl : AlertController,
    private gestionCourse : GestionCourse
  ) { }

  ngOnInit() {
    let selectedCourse = this.gestionCourse.getCourseById(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(selectedCourse);
    
   
  }
  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes -vous sûr de vouloir supprimer ce cours ?',
      buttons: ['Non', 
        {
            text : 'Oui',
            handler : () => {
                
            }
        }
      ],
    });

    await alert.present();
  }

}
