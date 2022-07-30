import { Todo } from './../model/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiURL = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) { }

  save(todo: Todo) : Observable<Todo>{
    return this.http.post<Todo>(this.apiURL, todo).pipe(first());
  }

  list() {
    return this.http.get<Todo[]>(this.apiURL)
    .pipe(
      first(),
      tap(todos => console.log(todos))
    )
  }

  removeById(id: number) :Observable<void> {
    const url = `${this.apiURL}/${id}`
    return this.http.delete<void>(url)
  }

  markAsDone(id: number) :Observable<Todo>{
    const url = `${this.apiURL}/${id}/done`
    return this.http.patch<Todo>(url, {})
  }
}
