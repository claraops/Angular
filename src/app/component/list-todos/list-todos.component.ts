import { Component , inject} from '@angular/core';
import { Comment } from '@angular/compiler';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interface/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todoService = inject(TodoService);
  todoList: Todo[] = [];

  constructor(){
    this.todoService.getTodo().then((todos: Todo[]) => {
      this.todoList = todos;
    });

}
}
