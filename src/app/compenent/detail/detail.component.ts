import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // Injection des dépendances
  route = inject(ActivatedRoute);
  postsService = inject(PostsService);

  postId: number = -1;
  detail: Post | null = null;

  ngOnInit() {
    // Récupérer l'id du post depuis l'URL
    this.postId = +this.route.snapshot.paramMap.get('postId')!;  // Utilisez le paramètre `postId`
    
    // Récupérer le post en fonction de l'ID
    this.postsService.getPostsId(this.postId).then((post: Post) => {
      this.detail = post; // Assigner le post récupéré à la variable `detail`
    }).catch(error => {
      console.error("Erreur lors de la récupération du post:", error);
    });
  }

}




/*import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  // Inject dependencies directly into class properties
  route = inject(ActivatedRoute);
  postsService = inject(PostsService);

  // Declare properties for postId and detail
  postId = -1;
  detail: Post | null = null;

  constructor() {
    // Initialize postId with route parameter
    this.postId = Number(this.route.snapshot.params['postId']);

    //Fetch post by postId
    this.postsService.getPostsId(this.postId).then((post: Post[] ) => {
      if (post.length > 0) {
        this.detail = post[0]; // Assign the first post in the array to detail
      } else {
        this.detail = null; // Handle the case where no posts are found
      }
      //this.detail = post; // Assign fetched post to detail
    }).catch(error => {
      console.error("Error fetching post:", error); // Handle any error
    });
  }
}*/



/*
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  route : ActivatedRoute = inject(ActivatedRoute)
  postsService = inject(PostsService)
  postId = -1;
  detail: Post | null = null;


}

constructor(){
  postId: Number;
  detail: Post;

  
  this.postId = +this.route.snapshot.params['postId'];
  this.postsServi.getPostsByid().then((post: Post) => {

  });*
  this.postId = Number(this.route.snapshot.params['postId']);
  this.postsServi.getPostsByid().then(post : Post) =>{
    this.detail = post;

    this.postsServi.getPostsByid(this.postId).then((post: Post) => {
      this.detail = post;
    )}


}*/

