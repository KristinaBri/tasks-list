import { Component, OnInit } from '@angular/core';
import {Task} from "../../models/Task";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public tasks:Task[]=[];

  constructor(private tasksService:TasksService) {
    this.tasks=tasksService.tasks;
  }

  ngOnInit(): void {
  }

}
