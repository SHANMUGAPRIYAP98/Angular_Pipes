import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssn',
  templateUrl: './ssn.component.html',
  styleUrls: ['./ssn.component.css']
})
export class SSNComponent implements OnInit {

  constructor() { }
  ssn:string;
  ngOnInit(): void {
  }

}
