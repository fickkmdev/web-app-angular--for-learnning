import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  
  comment : string

  constructor() { }

  ngOnInit(): void {
  }

  onUserClick($event){
    alert(`you ${$event.type} at (" ${$event.clientX} , ${$event.clientY}")`)
  }

  onUserDoubleClick($event){
    alert(`you ${$event.type}`)
  }

}
