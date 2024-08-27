import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  tasks: { id: number; title: string; completed: boolean }[] = [];
  newTask : string = '';

  ngOnInit(){
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
      this.tasks = JSON.parse(storedTasks);
    }
  }

  addTask(title: string): void {
    this.tasks.push({ id: Date.now(), title, completed: false });
    this.newTask = "";
    this.sauvegarde()
  }


  sauvegarde() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
