import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  getPosts(userId: any) {
    const params = new URLSearchParams({
      userId: userId,
    });
    let url = `https://jsonplaceholder.typicode.com/posts?${params.toString()} `;
    console.log(url);
    return fetch(url).then((response) => response.json());
    // .then((json) => (res = json));
    // return res;
  }

  getComments(userId: any) {
    let url = `https://jsonplaceholder.typicode.com/posts/${userId}/comments`;
    return fetch(url).then((response) => response.json());
  }
  getTodos(userId: any) {
    const params = new URLSearchParams({
      userId: userId,
    });
    let url = `https://jsonplaceholder.typicode.com/todos?${params.toString()} `;
    console.log(url);
    return fetch(url).then((response) => response.json());
  }

  updatePost(data: any) {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + data.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: data.id,
        title: data.title,
        body: data.body,
        userId: data.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  updateComment(data: any) {
    return fetch('https://jsonplaceholder.typicode.com/comments/' + data.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        email: data.email,
        body: data.body,
        postId: data.postId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  updateTodo(data: any) {
    return fetch('https://jsonplaceholder.typicode.com/todos/' + data.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: data.id,
        userId: data.userId,
        title: data.title,
        completed: data.completed,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  deletePost(id: any) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE',
    });
    return { isDelete: true };
  }

  deleteComment(id: any) {
    fetch('https://jsonplaceholder.typicode.com/comments/' + id, {
      method: 'DELETE',
    });
    return { isDelete: true };
  }

  deleteTodo(id: any) {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
      method: 'DELETE',
    });
    return { isDelete: true };
  }
}
