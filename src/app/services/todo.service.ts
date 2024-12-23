import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodo= async() : Promise<Todo[]> => {
    const reponse = await fetch ('https://jsonplaceholder.typicode.com/posts')
    return (await reponse.json()) ?? [];

 // constructor() { }
}
}
