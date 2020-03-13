import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user: User = new User();
email: string;
password: string;
  constructor(private router: Router, private authSvc: AuthService, public alertController: AlertController) { }

  ngOnInit() {
  }

  async onLogin(){


    const user = await this.authSvc.onLogin(this.user);
     
    //user
    if(1==1){
        console.log(user);

      console.log('Successfuly logged in!');
      this.router.navigateByUrl('/home');
     
      }
       if(!user){
       // this.noexistuser();
        /*this.email='';
        this.password='';*/
    }
  }
  async noexistuser() {
    const alert = await this.alertController.create({
      header: 'Invalid user',
      message: 'Check your user and password or create a new user.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

