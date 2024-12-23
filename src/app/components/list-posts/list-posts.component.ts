import { Component, inject , OnInit} from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css',
})

export class ListPostsComponent implements OnInit {
  postsService = inject(PostsService);
  postList: Post[] = [];
  filteredPosts: Post[] = [];
  searchQuery: string = '';

  constructor() {}

  ngOnInit(): void {
    // Récupérer les posts depuis le service et initialiser la liste filtrée
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postList = posts.map(post => ({
        ...post,
        imageUrl: this.generateImageUrl(post.id) // Associer une URL d'image à chaque post
      }));
      this.filteredPosts = this.postList;
    });
  }

  // Générer une URL d'image pour chaque post (peut être adapté selon votre projet)
  private generateImageUrl(postId: number): string {
    return `assets/images/post-${postId}.jpg`;
  }

  // Filtrer les posts en fonction de la requête de recherche
  searchPosts(): void {
    this.filteredPosts = this.postList.filter(post =>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Supprimer un post
  deletePost(post: Post): void {
    // Filtrer la liste pour retirer le post supprimé
    this.postList = this.postList.filter(p => p.id !== post.id);
    this.filteredPosts = this.filteredPosts.filter(p => p.id !== post.id);
  }

}

 
/*--------------------- code ---------------
export class ListPostsComponent {
  postsService = inject(PostsService);
  postList: Post[] = [];

  constructor(){
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postList = posts;
    });

    //this.postList = this.postsService.getPosts();
  }

}--------------------------

  /*************** *
export class OnInit {
    postList: Post[] = [];
    filteredPosts: Post[] = [];
    searchQuery: string = '';  // Variable pour la recherche
  
    constructor(private postsService: PostsService) { }
  
    ngOnInit(): void {
      this.postsService.getPosts().then((posts: Post[]) => {
        this.postList = posts;
        this.filteredPosts = posts;  // Initialisation des posts filtrés
      });
    }
  
    // Fonction pour filtrer les posts en fonction de la recherche
    searchPosts(): void {
      this.filteredPosts = this.postList.filter(post =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
 




}*/
