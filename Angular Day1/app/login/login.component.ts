import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Employee_Id : number = 54654564;
  public Employee_Name	 : string = "Stephen";
  public Employee_Job : string = "Manger";
  public Employee_Salary : number = 75000;
  public Employee_Depo : number = 10;
  public images : string = "../../assets/bike.jpg";

}
