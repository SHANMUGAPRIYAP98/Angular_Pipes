import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-format',
  templateUrl: './number-format.component.html',
  styleUrls: ['./number-format.component.css']
})
export class NumberFormatComponent implements OnInit {
  
  num1:number;
  num2:number;
  num3:number;
  val:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
