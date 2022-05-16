import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from './model/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http : HttpClient
  ){}

  id : string;
  name : string;

  ngOnInit(){
    this.http.get<Person>('http://localhost:3000/api/resource').subscribe(data=>{
      this.id = data.id;
      this.name = data.name;
    })
  }



}
