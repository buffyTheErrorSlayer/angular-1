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

  addTask(title: string): void {
    this.tasks.push({ id: Date.now(), title, completed: false });
    this.sauvegarde()
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id!== id);
    this.sauvegarde()
  }

  sauvegarde() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
