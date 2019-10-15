import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private tds:TodosService) { }
  list=[]
  
  ngOnInit() {
    this.list=this.tds.getlist()
    this.list=[]
  }
  dele(){
    this.list.splice(2,5)
  }
}
