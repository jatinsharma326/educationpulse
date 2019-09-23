import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData:any  = {};

 
  constructor() { }

  ngOnInit() {
    this.formData.name = "Pankaj"
  }
  register(){
    console.log(this.formData);
  }
}
