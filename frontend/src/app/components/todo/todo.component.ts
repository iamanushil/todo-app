import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Todo } from "../../models/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todos: Todo[] = [];

  private createForm() {
    this.todoForm = this.formBuilder.group({
      item: ""
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  onSubmit() {}
}
