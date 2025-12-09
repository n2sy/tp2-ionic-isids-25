import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
  standalone: false,
})
export class AddCoursePage implements OnInit {
  tabKeywords = [];
  constructor(private toastCtrl: ToastController) {}

  addKeyword(newKeyWordInput) {
    
    if (this.tabKeywords.indexOf(newKeyWordInput.value) == -1) {
      this.tabKeywords.push(newKeyWordInput.value);
    } else {
        this.presentToast();
    }
    newKeyWordInput.value = '';
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
