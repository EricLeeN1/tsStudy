class Lady {
  content = "Hi,Boy";
  sayHello() {
    return this.content;
  }
}

class Xiaojiejie extends Lady {
  
  sayLove(){
    return 'I love you!';
  }
  sayHello() {
    return super.sayHello() + '，你好';
  }
}

const godness  = new Xiaojiejie();
console.log(godness.sayHello());
console.log(godness.sayLove());
