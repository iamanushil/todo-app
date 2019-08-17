import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "src/app/models/todo";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private baseUrl = "/api/todos";

  constructor(private http: HttpClient) {}

  saveTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }
}
