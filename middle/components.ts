namespace Components {
  export namespace SubComponents {
    export class Test {
      
    }
  }

  export class Header {
    constructor() {
      const ele = document.createElement("header");
      ele.innerText = "This is the header";
      document.body.appendChild(ele);
    }
  }

  export class Content {
    constructor() {
      const ele = document.createElement("main");
      ele.innerText = "This is the main";
      document.body.appendChild(ele);
    }
  }

  export class Footer {
    constructor() {
      const ele = document.createElement("footer");
      ele.innerText = "This is the footer";
      document.body.appendChild(ele);
    }
  }
}
