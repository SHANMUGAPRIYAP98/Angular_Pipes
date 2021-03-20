import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  exchange:string[]=["INR TO USD","INR TO SGD","INR TO Belarusian Ruble","INR TO Malagasy Ariary","INR TO Yemeni Rial"]
  selectedEx:string;
  rupee:number;
  constructor() { }

  ngOnInit(): void {
  }

}
