const numberArr: number[] = [1, 2, 3];
const strArr: string[] = ["a", "b", "c", "d", "e", "f"];
const undefinedArr: undefined[] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

const arr1: (string | number)[] = [1, "a", 2];

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
