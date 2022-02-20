import { Component, OnInit, Inject, createPlatform } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userId: any;
  posts: any;
  postCount = 0;
  comments: any;
  commentCount = 0;
  todos: any;
  todosCount = 0;
  constructor(
    private userService: UserServiceService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this.getPosts(this.userId);
    this.getComments(this.userId);
    this.getTodos(this.userId);
  }

  getPosts(userId: any) {
    this.userService.getPosts(userId).then((result) => {
      this.posts = result;
      this.postCount = this.posts.length;
    });
  }

  getComments(userId: any) {
    this.userService.getComments(userId).then((result) => {
      this.comments = result;
      this.commentCount = this.comments.length;
    });
  }

  getTodos(userId: any) {
    this.userService.getTodos(userId).then((result) => {
      this.todos = result;
      this.todosCount = this.todos.length;
    });
  }

  open(item: any, type: string) {
    const dialogRef = this.dialog.open(ViewEditDialog, {
      width: '450px',
      data: {
        formType: type,
        data: item,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        switch (type) {
          case 'post':
            if (result.title != item.title || result.body != item.body) {
              //fake update
              item.title = result.title;
              item.body = result.body;

              this.userService.updatePost(item).then((result) => {
                if (result) {
                  this.snackBar('Updated');
                }
              });
            }
            break;
          case 'comment':
            if (
              result.name != item.name ||
              result.email != item.email ||
              result.body != item.body
            ) {
              item.name = result.name;
              item.email = result.email;
              item.body = result.body;
              //do update
              this.userService.updateComment(item).then((result) => {
                if (result) {
                  this.snackBar('Updated');
                }
              });
            }
            break;
          case 'todo':
            if (
              result.title != item.title ||
              result.completed != item.completed
            ) {
              item.title = result.title;
              item.completed = result.completed;
            }
            this.userService.updateComment(item).then((result) => {
              this.userService.updateTodo(item).then((result) => {
                if (result) {
                  this.snackBar('Updated');
                }
              });
            });
            break;
          default:
            console.log('No Switch Case');
        }
      }
    });
  }

  delItem(id: any, type: string) {
    switch (type) {
      case 'post':
        let res = this.userService.deletePost(id);
        //delete
        if (res.isDelete == true) {
          this.posts = this.posts.filter((ele: any) => ele.id != id);
          this.postCount = this.posts.length;
          //snak
          this.snackBar('Deleted');
        }

        break;

      case 'comment':
        let res1 = this.userService.deleteComment(id);
        console.log('id ' + id);
        if (res1.isDelete == true) {
          this.comments = this.comments.filter((ele: any) => ele.id != id);
          this.commentCount = this.comments.length;
          //snak
          this.snackBar('Deleted');
        }
        break;

      case 'todo':
        console.log('id ' + id);
        let res2 = this.userService.deleteTodo(id);
        if (res2.isDelete == true) {
          this.todos = this.todos.filter((ele: any) => ele.id != id);
          this.todosCount = this.todos.length;
          //snak
          this.snackBar('Deleted');
        }

        break;
      default:
        console.log('No Switch Case line 151');
    }
  }
  logout() {
    sessionStorage.removeItem('userId');
    this.router.navigate(['']);
  }
  snackBar(msg: string) {
    this._snackBar.open(msg, 'Ok', {
      duration: 3000,
    });
  }
}

@Component({
  selector: 'post-addedit-dialog',
  templateUrl: 'post-addedit-dialog.html',
  styleUrls: ['./dashboard.component.css'],
})
export class ViewEditDialog implements OnInit {
  titles: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ViewEditDialog>
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  form: any;
  showForm = '';

  createForm() {
    if (this.data.formType == 'post') {
      this.showForm = 'post';
      this.form = this.formBuilder.group({
        title: [this.data.data.title],
        body: [this.data.data.body],
      });
    } else if (this.data.formType == 'comment') {
      this.showForm = 'comment';

      this.form = this.formBuilder.group({
        name: [this.data.data.name],
        email: [this.data.data.email],
        body: [this.data.data.body],
      });
    } else if (this.data.formType == 'todo') {
      this.showForm = 'todo';
      this.form = this.formBuilder.group({
        title: [this.data.data.title],
        completed: this.data.data.completed,
      });
    }
  }

  onSubmit() {
    //update
    if (this.data.formType == 'post') {
      this.dialogRef.close({
        title: this.form.get('title').value,
        body: this.form.get('body').value,
      });
    } else if (this.data.formType == 'comment') {
      this.dialogRef.close({
        name: this.form.get('name').value,
        email: this.form.get('email').value,
        body: this.form.get('body').value,
      });
    } else if (this.data.formType == 'todo') {
      this.dialogRef.close({
        title: this.form.get('title').value,
        completed: this.form.get('completed').value,
      });
    }
  }
}
