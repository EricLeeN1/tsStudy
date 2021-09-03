class Person {
  protected name: string;

  public sayHello() {
    console.log("Hi John");
  }

  private sayHello2() { // 属性“sayHello2”为私有属性，只能在类“Person”中访问。
    console.log('只能在类的内部使用');
  }
}

class Teacher extends Person {
  public sayBye() {
    this.name = 'Student';
  }
}

const person = new Person();
// person.name = "John";

person.sayHello()
person.sayHello2()
