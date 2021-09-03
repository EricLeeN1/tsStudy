// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistLine?: number;
// }
// const girl = {
//   name: "铁铁",
//   age: 18,
//   bust: 100,
// };
// const screenResume = (girl: Girl) => {
//   if (girl.age < 24 && girl.bust >= 90) {
//     console.log("进入面试");
//   }
//   if (girl.age >= 24 || girl.bust < 90) {
//     console.log("被淘汰了");
//   }
// };

// type Girl1 = string;

// // 接口和类型别名的区别

// const getResume = (girl: Girl) => {
//   console.log("name", girl.name);
//   console.log("age", girl.age);
//   console.log("bust", girl.bust);
//   girl.bust && console.log("waistLine", girl.waistLine);
// };

// screenResume(girl);
// getResume(girl);
