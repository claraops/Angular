import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './component/list-todos/list-todos.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ListPostsComponent,ListTodosComponent,FormsModule,CommonModule],
 templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Agence';
}
