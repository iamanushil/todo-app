export class Todo {
  id: number;
  description: string = "";

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
