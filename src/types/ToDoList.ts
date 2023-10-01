import { ITask } from "./Task";

export class ToDoList {
  private tasks: ITask[] = [];
  constructor(
    private name: string,
  ) {
    this.name = name;
  }
  addTasks(tasks: ITask[]) {
    this.tasks = [...this.tasks, ...tasks];
  }
  getTasks(): ITask[] {
    return this.tasks;
  }
  setName(value: string) {
    this.name = value;
  }
  getName(): string {
    return this.name;
  }
}
