class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Teacher extends Person {
  constructor(public age: number) {
    super('eric111');
  }
}

const teacher = new Teacher(18);

console.log(teacher.age);
console.log(teacher.name);
