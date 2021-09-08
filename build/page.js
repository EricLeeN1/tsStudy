define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    var Header = (function () {
        function Header() {
            var ele = document.createElement("header");
            ele.innerText = "This is the header";
            document.body.appendChild(ele);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = (function () {
        function Content() {
            var ele = document.createElement("main");
            ele.innerText = "This is the main";
            document.body.appendChild(ele);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = (function () {
        function Footer() {
            var ele = document.createElement("footer");
            ele.innerText = "This is the footer";
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
//# sourceMappingURL=page.js.map