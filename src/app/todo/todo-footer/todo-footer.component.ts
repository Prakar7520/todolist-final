import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor(private tdd:TodosService) { }
  list=[]
  ngOnInit() {
    this.list=this.tdd.getlist();
  }

}
