import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  uid:number = 0 ;
  uname:string = '';

  constructor(private ar:ActivatedRoute,private rou:Router) { 
    this.ar.params.subscribe(p=>{this.uid = p.id,this.uname = p.name});
  }

  ngOnInit() {
    console.log('you selected a value which is '+this.uid);
    console.log('you selected a name which is '+this.uname);

    // if(this.uid>2)
    // {
    //   this.rou.navigate(['contact',this.uid]);
    // }

  }

}
