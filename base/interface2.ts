interface Girl {
  name: string;
  age: number;
  bust: number;
  waistLine?: number;
  [propname: string]: any;
  say(): string;
}

interface Teacher extends Girl {
  teac(): string;
}

class Sister implements Girl {
  name = "铁锤";
  age = 12;
  bust = 100;
  say() {
    return "环境光临";
  }
}

const girl = {
  name: "铁铁",
  age: 18,
  bust: 100,
  sex: "女性",
  say: () => {
    return "环境光临";
  },
  teac() {
    return "我来叫你如何做";
  },
};

const screenResume = (girl: Girl) => {
  if (girl.age < 24 && girl.bust >= 90) {
    console.log("进入面试");
  }
  if (girl.age >= 24 || girl.bust < 90) {
    console.log("被淘汰了");
  }
  girl.say && girl.say();
};

type Girl1 = string;

// 接口和类型别名的区别

const getResume = (girl: Girl) => {
  console.log("name", girl.name);
  console.log("age", girl.age);
  console.log("bust", girl.bust);
  girl.waistLine && console.log("waistLine", girl.waistLine);
  girl.sex && console.log("sex", girl.sex);
};

screenResume(girl);
getResume(girl);
