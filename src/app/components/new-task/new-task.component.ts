import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Task} from "../../models/Task";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  public name:string|null=null;
  public type:string|null=null;

  constructor(private tasksService:TasksService) {

  }

  ngOnInit(): void {
  }

  public newTask() {
    if(this.name!=null && this.type!=null) {
      this.tasksService.newTask(this.name, this.type);
      this.name=null;
      this.type=null;
    }
  }

}
