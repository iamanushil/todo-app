import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { Subtask } from "src/app/models/subtask";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SubtaskService } from "../../services/subtaskService/subtask.service";

@Component({
  selector: "app-subtask",
  templateUrl: "./subtask.component.html",
  styleUrls: ["./subtask.component.css"]
})
export class SubtaskComponent implements OnInit {
  private createForm() {
    this.subtaskForm = this.forumBuilder.group({
      description: ""
    });
  }
  subtaskForm: FormGroup;

  @Input("subtasks")
  subtasks: Subtask[] = [];

  @Input("todo")
  todo: Todo;

  constructor(
    private forumBuilder: FormBuilder,
    private subtaskService: SubtaskService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  onSubmit(val, todo) {
    const subtask: Subtask = {
      id: null,
      description: val.description,
      todoId: todo.id
    };
    this.subtaskService
      .saveSubtaskToATodo(subtask)
      .subscribe(res => console.log(res));
    //     res =>
    //       this.subtasks.filter(subtask =>
    //         this.checkTodoAndSubtaskAreSame(res, todo)
    //       )[0]
    //   );
    // console.log(this.subtasks);
  }

  // check if two todos are same or not
  checkTodoAndSubtaskAreSame(subtask: Subtask, todo: Todo) {
    return todo.id == subtask.todoId;
  }
}