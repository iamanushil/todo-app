import { Subtask } from "src/app/models/subtask";

export class TodoWithSub {
  id: number;
  description: string = "";
  todoSubtasks: Subtask;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
