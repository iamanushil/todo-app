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

  onSubmit(val) {
    // we got an object with the input value
    const newTodo: Todo = {
      id: null,
      description: val.item
    };

    this.todoService.saveTodo(newTodo).subscribe(res => this.todos.push(res));

    // reset the input field after adding a todo
    this.todoForm.reset();
  }
}
