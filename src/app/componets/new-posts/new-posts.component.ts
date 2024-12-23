import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ListPostsComponent} from '../../components/list-posts/list-posts.component';
import { ListTodosComponent } from '../../component/list-todos/list-todos.component';

@Component({
  selector: 'app-new-posts',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ListPostsComponent,ListTodosComponent],
  templateUrl: './new-posts.component.html',
  styleUrl: './new-posts.component.css'
})
export class NewPostsComponent {

}
