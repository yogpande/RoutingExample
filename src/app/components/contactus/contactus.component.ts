import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  id:number = 0;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ar.params.subscribe(pa=>{this.id = pa.value})
    console.log(this.id);
  }

}
