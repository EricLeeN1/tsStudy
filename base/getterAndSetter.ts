// class Xiaojiejie {
//   constructor(private _age: number) {}

//   get age() {
//     return this._age - 10;
//     // return this._age;
//   }

//   set age(age: number) {
//     this._age = age - 10;
//   }
// }

// const chuichui = new Xiaojiejie(18);
// chuichui.age = 28
// console.log(chuichui.age);

class Girls {
  static sayHello() {
    return "Love";
  }
}

const girl = new Girls();
console.log(Girls.sayHello());

