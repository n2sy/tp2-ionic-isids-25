import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class Photos {
    
    async prendrePhoto() {
        let selectedPHoto = await Camera.getPhoto(
            {
                source : CameraSource.Camera,
                quality : 90,
                resultType : CameraResultType.DataUrl
            }
        );
        
        console.log(selectedPHoto);
        return selectedPHoto.dataUrl;
        
    }
    
    async choisirPhotoGalerie() {
        let selectedPhotos =  await Camera.pickImages(
            {
                limit : 5,
                quality : 90
            }
        );
        
        console.log(selectedPhotos);
        return selectedPhotos.photos;
        
    }
  
}
