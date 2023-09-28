export interface ITask {
  setIsDone(isDone: boolean): void;
  getIsDone(): boolean;
  setName(value: string): void;
  getName(): string;
}

export class Task implements ITask {
  private name: string;
  private isDone: boolean = false;
  constructor(name: string = '', isDone: boolean = false
  ) {
    this.name = name;
    this.isDone = isDone;
  }
  setIsDone(value: boolean) {
    this.isDone = value;
  }
  getIsDone() {
    return this.isDone;
  }
  setName(value: string) {
    this.name = value;
  }
  getName(): string {
    return this.name;
  }
}
