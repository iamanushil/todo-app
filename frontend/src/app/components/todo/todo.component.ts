import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Todo } from "../../models/todo";
import { TodoService } from "../../services/todoService/todo.service";
import { Subtask } from "src/app/models/subtask";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todos: Todo[] = [];
  selectedTodo: Todo;
  @ViewChild("desc", { static: true }) desc: ElementRef;

  subtasks: Subtask[] = [];

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

  // To load all todos when TodoComponent is loaded
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => (this.todos = res));
  }

  // For Adding and Updating a Todo
  onSubmit(val) {
    // we got an object with the input value
    if (!this.selectedTodo) {
      const newTodo: Todo = {
        id: null,
        description: val.item
      };
      this.todoService.saveTodo(newTodo).subscribe(res => this.todos.push(res));
    } else {
      const updatedTodo: Todo = {
        // since we are updating a todo, so we need to provide the id
        id: this.selectedTodo.id,
        description: val.item
      };
      this.todoService
        .updateTodo(updatedTodo)
        .subscribe(
          res =>
            (this.todos.filter(todo =>
              this.isSameTodo(res, todo)
            )[0].description = res.description)
        );
    }
    this.selectedTodo = null;
    this.todoForm.reset();
  }

  deleteTodo(todoToRemove: Todo) {
    this.todoService.deleteTodo(todoToRemove).subscribe(res => {
      // removing from the todos array
      this.todos = this.todos.filter(todo => todo.id !== todoToRemove.id);
    });
  }

  selectATodo(todo: Todo) {
    this.selectedTodo = todo;
    // To populate the input box for edit
    this.todoForm.controls["item"].setValue(todo.description);
    // to focus on input
    this.desc.nativeElement.focus();
  }

  // check if two todos are same or not
  isSameTodo(todoList: Todo, selectedTodo: Todo) {
    return todoList.id == selectedTodo.id;
  }

  showSubtask(todo: Todo) {
    this.todoService.getSubtaskForATodo(todo).subscribe(res => {
      this.subtasks = res;
    });
  }
}
