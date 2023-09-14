class Task {
  constructor( private name: string, private isDone: boolean = false) {

  }
  setDone() {
    this.isDone = true;
  }
  setName(value: string){
    this.name = value;
  }
  getName(): string {
    return this.name;
  }
}
export default Task;