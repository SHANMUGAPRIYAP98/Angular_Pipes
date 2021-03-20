import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {

  constructor() { }
  countries:string[]=["Afghanistan","American Samoa","Canada","Indonesia","USA"];
  coun:string;
  ngOnInit(): void {
  }

}
