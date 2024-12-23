import { getDebugNode, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getPosts= async() : Promise<Post[]> => {
    const reponse = await fetch ('https://jsonplaceholder.typicode.com/posts')
    return (await reponse.json()) ?? [];
  }

  getPostsId = async (postId: number): Promise<Post> => {
    const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post: Post = await reponse.json(); // Récupère un seul post
    return post; // Retourne un seul post, pas un tableau
  };


/*
  getPostsId= async(postId: Number) : Promise<Post[]> => {
    const reponse = await fetch ('https://jsonplaceholder.typicode.com/posts' + postId)
    return (await reponse.json()) ?? [];
  }

 /* constructor() { 
    this.getData();
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json =>this.posts= json);


   /* this.posts = [{
      title: "Post 1",
      body: "content post 1"
    },{
       title: "Post 2",
      body: "content post 1"
    },{
       title: "Post 3",
      body: "content post 1"
    }];

  }


  getPosts(): Post[] {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    return this.posts ;

}*/
}
