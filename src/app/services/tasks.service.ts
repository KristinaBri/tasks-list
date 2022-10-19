import { Injectable } from '@angular/core';
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks:Task[]=[];

  constructor() {
    this.load();
  }

  public newTask(name:string, type:string){
    this._tasks.push(new Task(name, type));
    this.save();
  }

  public delete(i:number){
    this._tasks.splice(i,1);
    this.save();
  }

  public get tasks(){
    return this._tasks;
  }

  public save(){
    localStorage.setItem('tasks',JSON.stringify(this._tasks));
  }

  public load(){
    const data=localStorage.getItem('tasks');
    if (data!=null){
      this._tasks=JSON.parse(data);
    }
  }
}
