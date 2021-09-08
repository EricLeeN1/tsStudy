interface Girl {
  name: string;
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}

  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl([
  {
    name: "tiechui",
  },
  {
    name: "gangtie",
  },
  {
    name: "xiaojuan",
  },
]);
// const selectGirl1 = new SelectGirl([1, 2, 3]);

console.log(selectGirl.getGirl(1));
// console.log(selectGirl1.getGirl(1));
