// type annotation 类型注解
// type interface 类型推断

let count: number;
count = 12;

let countInterface = 123;

function getTotal(one: number, two: number): number {
  return one + two;
}

const total = getTotal(1, 2);

// function sayHello(one: number, two: number): void {
//   console.log('hello world');
//   return
// }

// 永远执行不完 用never throw error/死循环
// function sayNever(one: number, two):never{
//   throw new Error('not implemented');
// }

// function forNever(one: number, two: number): never {
//   while (true) {}
//   console.log('hello world');
// }

// function add({ one, two }: { one: number; two: number }) {
//   return one + two;
// }

// const totals = add({ one: 1, two: 2 });

function getNumber({ one }: { one: number }): number {
  return one;
}

const one = getNumber({ one: 1 });
