import { Component, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsernameValidator } from  '../../validators/username'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

 
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {
  signup

 
signupForm: FormGroup
 
    submitAttempt: boolean = false;
 
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public formBuilder: FormBuilder, 
      public http: Http
     
      ) {
       this.signupForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        email: [''],
        userName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
        isVendor: ['true', Validators.required],
        
      })
    }
 
    addSignup(){
      this.submitAttempt = true
        if (this.signupForm.value.isVendor === 'true') {
          this.signupForm.value.isVendor = 1
      }
        else {
          this.signupForm.value.isVendor = 0
        }
      console.log("success!", this.signupForm.value.isVendor)
      this.http
        .post('https://ec2-54-201-208-89.us-west-2.compute.amazonaws.com:1443/api/user/signup', this.signupForm.value)
        .map((res) => {
          let response = res.json()
          console.log('response.nail: ', response)
          if (response.nailCertification == this.signupForm.value.nailCertification) {
             let alertTrue = this.alertCtrl.create({
            title: 'Thank you for verifying your license',
            buttons: ['Dismiss']
            })
          alertTrue.present();
          }
          else {
             let alertFalse = this.alertCtrl.create({
            title: 'I\'m sorry, we were unable to verify your license',
            buttons: ['Dismiss']
            })
          alertFalse.present();
          }
        })
        .subscribe((data) => {
          this.navCtrl.push(LoginPage)

      })
    }
    
 // add clearing of formdata
}