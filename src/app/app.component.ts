import { Component } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todo_array: Array<string> = [
    "Go home",
    "Take a nap",
    "Buy Milk"
  ]
  clearToDo(){
    this.todo_array.splice(0);
  }
  addTask(value: string){
    
    this.todo_array.push(value);
  } 
  deleteTask(idx: number){
    this.todo_array.splice(idx,1);
  }
}
