import { Component, OnInit } from '@angular/core';
import { Products } from './Products';


@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  id : number = 0;
  name : string = "";
  price : number = 0;
  qty : number = 0;
  total : number = 0;
  category : string ="";
  pname : string = "";
  array : Products[] = [];

  GetTotal(){
    this.array.push({pid : this.id , pname : this.pname ,price : this.price, category : this.category , qty : this.qty })
  }



}
