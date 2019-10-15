import { Component, OnInit ,NgModule} from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private t:TodosService) { }
  list=[]
  item=" "
  
  ngOnInit() {
    this.list=this.t.getlist();
  }
  remov=function(ind){
    this.list.splice(ind,1)
  }
}
