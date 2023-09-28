import { ITask } from "./Task";

class ToDoList {
  private tasks: ITask[] = [];
  constructor(
    private name: string,
  ) {
    this.name = name;
  }
  addTask(task: ITask) {
    this.tasks.push(task);
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
export default ToDoList;
