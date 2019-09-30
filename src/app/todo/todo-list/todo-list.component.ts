import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private t:TodosService) { }
  list=[]

  ngOnInit() {
    this.list=this.t.getlist();
  }

}
