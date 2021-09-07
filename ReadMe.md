一、变量类型

对象类型
数组类型
类类型
函数类型

以上统称对象静态类型

number
string
等成为基础静态类型

二、变量类型推断与注解

`type annotation` 类型注解
`type interface` 类型推断

1、如果ts能够自动分析变量类型，我们就什么也不要做了
2、如果ts无法分析变量类型的话，我们就需要使用类型注释

三、类别别名 `type alias`

```
type Lady = {
  name: string;
  age: number;
};

class Girls {
  name: string;
  age: number;
}

const arrObj: Girls[] = [
  {
    name: "铁铁",
    age: 18,
  },
  {
    name: "铁锤",
    age: 18,
  },
];

```
五、接口和类型别名的区别

```
type Girl1 = string;

interface Girl {
  name: string;
  age: number;
  bust: number;
}

```
七、类的访问类型

`public` 是公用的，类的内部和外部都可以访问
`private` 是私有的，类的内部可以访问，类的外部和继承都不可以访问
`protected` 是受保护的，类的继承可以访问，外部是不可访问的。


八、`getter`和`setter`