export class Subtask {
  id: number;
  description: string = "";
  todoId: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
