import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductImages } from './ProductImages';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public  arraylist: string[] = ["Angular" , "reactJS" , "NodeJS" , "Express"]

  public list : Product[] = [{pid : 1 , pname : "Ganehs" , category : "elec" , price : 10000 , qty : 5},
  {pid : 2 , pname : "vishal" , category : "Soft" , price : 13000 , qty : 9},
  {pid : 3 , pname : "sagar" , category : "Wood" , price : 15000 , qty : 7}
  ,{pid : 4 , pname : "raj" , category : "HR" , price : 10600 , qty : 4},
  {pid : 5 , pname : "Mahi" , category : "Main" , price : 11000 , qty : 5}];

  img1 : string = "../../assets/angular1.jfif";
  img2 : string = "../../assets/chorme.jfif"
  img3 : string = "../../assets/mozila.jfif"

  tech: ProductImages[] = [
    {image : "../../assets/angular1.jfif" , Title : "Angular" , text : "Some text is here" },
    {image : "../../assets/chorme.jfif" , Title : "Google Chorme" , text : "Some text is here" },
    {image : "../../assets/mozila.jfif" , Title : "Mozilla Firefox" , text : "Some text is here" }
  ]

}
