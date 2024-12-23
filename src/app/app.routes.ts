import { Routes , RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { NewPostsComponent } from './componets/new-posts/new-posts.component';
import { ListTodosComponent } from './component/list-todos/list-todos.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './compenent/detail/detail.component';
import { NgModule } from '@angular/core';




export const routes: Routes = [{
    path: "",
    component:HomeComponent,
    title: 'Home page'
},{
    path: "post",
    component:ListPostsComponent,
    title: 'List posts page'
},{
    path: "posts/new",
    component:NewPostsComponent,
    title: 'New posts page'
},
{
    path: "posts/:postId/detail",
    component: DetailComponent,
    title: 'Detail page'

},
{
    path: "todo",
    component:ListTodosComponent,
    title: 'List todo page'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Importation des routes avec `forRoot`
    exports: [RouterModule] // Exportation du module pour être utilisé ailleurs dans l'application
  })
  export class AppRoutingModule {}
