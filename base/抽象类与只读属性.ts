// class Person {
//   public readonly _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
// }

// const person = new Person("Eric");
// // person._name = 'Eric Lee';

// console.log(person._name);

// 抽象类 abstract

abstract class Girl {
  abstract skill(): void;
}

class Waiter extends Girl {
  skill() {
    console.log("端茶倒水");
  }
}

class BaseTeacher extends Girl {
  skill() {
    console.log("捏腰捶腿");
  }
}

class seniorTeacher extends Girl {
  skill() {
    console.log("SPA");
  }
}
