import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService, private router: Router,public alertController: AlertController) { }

  ngOnInit() { }

  async onRegister(){
     const user = await this.authService.onRegister(this.user);
     if(user){
       console.log('Successfuly created user!!');
       this.router.navigateByUrl('/');
     }
     else{
      console.log('Suc');

      this.incorrect();
     }
  }
  async incorrect() {
    const alert = await this.alertController.create({
      header: 'Invalid user',
      message: 'Must be a valid email and password must be at least 6 characters long.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
