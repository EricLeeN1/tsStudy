// 泛型 泛指的类型
function join<T, P>(a: T, b: P) {
  return `${a}${b}`;
}

join<string, string>("eric", "1");
join<number, number>(1, 2);

// 泛型中数组的使用
function myFun<T>(params: T[]) {
  return params;
}

myFun<string>(["Eric", "Lee"]);
myFun<number>([2, 1]);
