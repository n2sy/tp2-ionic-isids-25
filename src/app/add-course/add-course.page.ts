import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Photos } from '../services/photos';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
  standalone: false,
})
export class AddCoursePage implements OnInit {
  tabKeywords = [];
  temporaryPhotos = [];
  constructor(private toastCtrl: ToastController, private sheetCtrl : ActionSheetController, private photoSer : Photos) {}

  addKeyword(newKeyWordInput) {
    
    if (this.tabKeywords.indexOf(newKeyWordInput.value) == -1) {
      this.tabKeywords.push(newKeyWordInput.value);
    } else {
        this.presentToast();
    }
    newKeyWordInput.value = '';
  }
  
  
  async showSheet() {
    const actionSheet = await this.sheetCtrl.create({
      header: 'Ajouter une photo',
      buttons: [
        {
          text: 'Prendre une photo',
          icon : 'camera',
          handler : () => {
            this.temporaryPhotos.push(this.photoSer.prendrePhoto());
          }
        },
        {
          text: 'Choisir depuis la galerie',
          icon : 'image',
          handler : async () => {
            let t = await this.photoSer.choisirPhotoGalerie();
            for (const picture of t) {
               this.temporaryPhotos.push(picture.webPath);
                 
            }
            
            
          }
        },
       
      ],
    });

    await actionSheet.present();
  }
  
  deletePhoto(photoToDelete) {
    let i = this.temporaryPhotos.indexOf(photoToDelete);
    this.temporaryPhotos.splice(i,1)
  }
  
  deleteKeyword(kwToDelete) {
    let i = this.tabKeywords.indexOf(kwToDelete);
    this.tabKeywords.splice(i, 1);
  }

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Mot-clé existant',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  submitHandler(f: NgForm) {
    console.log(f);
  }
}
