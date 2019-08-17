import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Todo } from "../../models/todo";
import { TodoService } from "../../services/todoService/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todos: Todo[] = [];

  private createForm() {
    this.todoForm = this.formBuilder.group({
      item: ""
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  onSubmit(model) {
    this.todoService.saveTodo(model).subscribe(res => this.todos.push(res));
  }
}
