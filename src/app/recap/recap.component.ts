import { Component } from '@angular/core';

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.scss'
})
export class RecapComponent {
  tasks: { id: number; title: string; completed: boolean }[] = [];
  ongoingTasksCount = 0;
  doneTasksCount = 0;

  ngOnInit(){
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
      this.tasks = JSON.parse(storedTasks);
    }
    
      this.doneTasksCount = this.filterDoneTasks().length;
      this.ongoingTasksCount = this.tasks.length - this.doneTasksCount;
  }

  filterDoneTasks(){
    return this.tasks.filter(task => task.completed === true);
  }

  filterOngoingTasks(){
    return this.tasks.filter(task => task.completed === false);
  }

}
