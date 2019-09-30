import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  list=[]

  additem(item){
    this.list.push(item);
  }
  getlist(){
    return this.list;
  }
}
