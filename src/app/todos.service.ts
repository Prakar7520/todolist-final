import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  list=[]
  inde=0
  item1=" "
  additem(item){
    this.list.push(item);
  }
  getlist(){
    return this.list;
  }
  

  remove(item){
    this.inde=this.list.indexOf(item);
    this.list.slice(this.inde,1);
  }
}
