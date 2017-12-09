import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-random-kindness',
  templateUrl: './random-kindness.component.html',
  styleUrls: ['./random-kindness.component.css']
})
export class RandomKindnessComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.signupForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: [''],
      userName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      password: [''],
      
    })
  }

  ngOnInit() {
  }

}
