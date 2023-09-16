class Task {
  constructor( private name: string, private isDone: boolean = false) {
    this.name = name;
  }
  setIsDone(value: boolean) {
    this.isDone = value;
  }
  getIsDone() {
    return this.isDone;
  }
  setName(value: string){
    this.name = value;
  }
  getName(): string {
    return this.name;
  }
}
export default Task;