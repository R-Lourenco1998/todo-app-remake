import { TodosService } from './../services/todos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from './../model/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todos: Todo[] = [];
  form: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.minLength(4), Validators.required]),
  });
  constructor(private service: TodosService) { }

  ngOnInit(): void {
    this.listAll();
  }

  listAll(){
    this.service.list().subscribe(todoList => {
      console.log(todoList)
      this.todos = todoList
    })
  }

  submit(){
    console.log(this.form.value)
    const todo: Todo = {...this.form.value}
    this.service
        .save(todo)
        .subscribe(savedTodo => {
          this.todos.push(savedTodo)
          console.log(savedTodo)
          this.form.reset()

        })
  }

  remove(todo: Todo){
    this.service.removeById(todo.id).subscribe({
      next: (response) => this.listAll()
    })
  }

  done(todo: Todo){
    this.service.markAsDone(todo.id).subscribe({
      next: (todoUpdated) => {
        todo.done = todoUpdated.done
        todo.doneDate = todoUpdated.doneDate
      }
    })
  }

}
