import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private td:TodosService) { }

  item=" "
  submit(){
    this.td.additem(this.item);
  }


  ngOnInit() {
  }

}
