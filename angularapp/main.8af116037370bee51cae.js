(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lelis\Desktop\LaboIV\saladejuegos\src\main.ts */"zUnb");


/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var C_Users_lelis_Desktop_LaboIV_saladejuegos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



class AuthService {
  constructor(afAuth) {
    this.afAuth = afAuth;
    this.isLogged = false;
    afAuth.authState.subscribe(user => this.isLogged = user);
  } //login


  onLogin(user) {
    var _this = this;

    return Object(C_Users_lelis_Desktop_LaboIV_saladejuegos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // try{
      return yield _this.afAuth.signInWithEmailAndPassword(user.email, user.password); // }
      // catch(error){
      //   console.error('Error Login', error);
      // }
    })();
  } //register


  onRegister(user) {
    var _this2 = this;

    return Object(C_Users_lelis_Desktop_LaboIV_saladejuegos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // try{
      return yield _this2.afAuth.createUserWithEmailAndPassword(user.email, user.password); // }
      // catch(error){
      //   console.error('Error Registro', error);
      // }
    })();
  }

}

AuthService.??fac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]));
};

AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
  token: AuthService,
  factory: AuthService.??fac,
  providedIn: 'root'
});

/***/ }),

/***/ "6xab":
/*!********************************!*\
  !*** ./src/app/shared/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
        this.email = "";
        this.password = "";
    }
}


/***/ }),

/***/ "85Sk":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var C_Users_lelis_Desktop_LaboIV_saladejuegos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var src_app_shared_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user */ "6xab");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");





class LoginComponent {
  constructor(router, authSvc) {
    this.router = router;
    this.authSvc = authSvc;
    this.user = new src_app_shared_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
  }

  ngOnInit() {}

  onLogin() {
    var _this = this;

    return Object(C_Users_lelis_Desktop_LaboIV_saladejuegos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = yield _this.authSvc.onLogin(_this.user);

      if (user) {
        console.log('login exitoso');

        _this.router.navigateByUrl('home');
      }
    })();
  }

}

LoginComponent.??fac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
};

LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 13,
  vars: 0,
  consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "active"], [1, "inactive", "underlineHover"], [1, "fadeIn", "first"], ["src", "http://danielzawadzki.com/codepen/01/icon.svg", "id", "icon", "alt", "User Icon"], ["type", "button", "value", "Log In", 1, "fadeIn", "fourth", 3, "click"], ["id", "formFooter"], ["href", "#", 1, "underlineHover"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Sign In ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function LoginComponent_Template_input_click_9_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyBrSkgq-AvnPr0b5Jk40VRw9wEgrRhGbyo",
        authDomain: "lab4-f7591.firebaseapp.com",
        projectId: "lab4-f7591",
        storageBucket: "lab4-f7591.appspot.com",
        messagingSenderId: "455274550514",
        appId: "1:455274550514:web:2e866f6af2604ef6ec2c6b"
    }
};


/***/ }),

/***/ "LBdu":
/*!****************************************************!*\
  !*** ./src/app/componentes/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-principal/menu-principal.component */ "ixWV");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 151, vars: 0, consts: [[1, "position-relative", "overflow-hidden", "p-3", "p-md-5", "m-md-3", "text-center", "bg-light"], [1, "col-md-5", "p-lg-5", "mx-auto", "my-5"], [1, "display-4", "font-weight-normal"], [1, "lead", "font-weight-normal"], ["href", "#", 1, "btn", "btn-outline-secondary"], [1, "product-device", "shadow-sm", "d-none", "d-md-block"], [1, "product-device", "product-device-2", "shadow-sm", "d-none", "d-md-block"], [1, "d-md-flex", "flex-md-equal", "w-100", "my-md-3", "pl-md-3"], [1, "bg-dark", "mr-md-3", "pt-3", "px-3", "pt-md-5", "px-md-5", "text-center", "text-white", "overflow-hidden"], [1, "my-3", "py-3"], [1, "display-5"], [1, "lead"], [1, "bg-light", "shadow-sm", "mx-auto", 2, "width", "80%", "height", "300px", "border-radius", "21px 21px 0 0"], [1, "bg-light", "mr-md-3", "pt-3", "px-3", "pt-md-5", "px-md-5", "text-center", "overflow-hidden"], [1, "my-3", "p-3"], [1, "bg-dark", "shadow-sm", "mx-auto", 2, "width", "80%", "height", "300px", "border-radius", "21px 21px 0 0"], [1, "bg-primary", "mr-md-3", "pt-3", "px-3", "pt-md-5", "px-md-5", "text-center", "text-white", "overflow-hidden"], [1, "bg-white", "shadow-sm", "mx-auto", 2, "width", "80%", "height", "300px", "border-radius", "21px 21px 0 0"], [1, "container", "py-5"], [1, "row"], [1, "col-12", "col-md"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "role", "img", "viewBox", "0 0 24 24", "focusable", "false", 1, "d-block", "mb-2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"], [1, "d-block", "mb-3", "text-muted"], [1, "col-6", "col-md"], [1, "list-unstyled", "text-small"], ["href", "#", 1, "text-muted"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu-principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Punny headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple\u2019s marketing pages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Coming soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Another headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "And an even wittier subheading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Another headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "And an even wittier subheading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Another headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "And an even wittier subheading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Another headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "And an even wittier subheading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Another headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "And an even wittier subheading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Another headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "And an even wittier subheading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Another headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "And an even wittier subheading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Another headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "And an even wittier subheading.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "circle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "small", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "\u00A9 2017-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Cool stuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Random feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Team feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Stuff for developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Another one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Last time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Resource name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Another resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Final resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Government");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Gaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_1__["MenuPrincipalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "RsNB":
/*!******************************************************!*\
  !*** ./src/app/componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.??fac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _componentes_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/menu-principal/menu-principal.component */ "ixWV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'SalaDeJuegos';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu-principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
    } }, directives: [_componentes_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_1__["MenuPrincipalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/login/login.component */ "85Sk");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/home/home.component */ "LBdu");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "uXbx");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "eX/z");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/error/error.component */ "RsNB");
/* harmony import */ var _componentes_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/menu-principal/menu-principal.component */ "ixWV");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_5__["QuienSoyComponent"],
        _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"],
        _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"],
        _componentes_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_8__["MenuPrincipalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"]] }); })();


/***/ }),

/***/ "eX/z":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var C_Users_lelis_Desktop_LaboIV_saladejuegos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user */ "6xab");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class RegistroComponent {
  constructor(authSvc, router) {
    this.authSvc = authSvc;
    this.router = router;
    this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
  }

  ngOnInit() {}

  onRegister() {
    var _this = this;

    return Object(C_Users_lelis_Desktop_LaboIV_saladejuegos_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = yield _this.authSvc.onRegister(_this.user);

      if (user) {
        console.log('registro exitoso');

        _this.router.navigateByUrl('home');
      }
    })();
  }

}

RegistroComponent.??fac = function RegistroComponent_Factory(t) {
  return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
};

RegistroComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
  type: RegistroComponent,
  selectors: [["app-registro"]],
  decls: 13,
  vars: 0,
  consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "active"], [1, "inactive", "underlineHover"], [1, "fadeIn", "first"], ["src", "http://danielzawadzki.com/codepen/01/icon.svg", "id", "icon", "alt", "User Icon"], ["type", "button", "value", "Log In", 1, "fadeIn", "fourth", 3, "click"], ["id", "formFooter"], ["href", "#", 1, "underlineHover"]],
  template: function RegistroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Sign In ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function RegistroComponent_Template_input_click_9_listener() {
        return ctx.onRegister();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ "ixWV":
/*!************************************************************************!*\
  !*** ./src/app/componentes/menu-principal/menu-principal.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalComponent", function() { return MenuPrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MenuPrincipalComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuPrincipalComponent.??fac = function MenuPrincipalComponent_Factory(t) { return new (t || MenuPrincipalComponent)(); };
MenuPrincipalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MenuPrincipalComponent, selectors: [["app-menu-principal"]], decls: 22, vars: 0, consts: [[1, "site-header", "sticky-top", "py-1"], [1, "container", "d-flex", "flex-column", "flex-md-row", "justify-content-between"], ["href", "#", "aria-label", "Product", 1, "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "role", "img", "viewBox", "0 0 24 24", "focusable", "false", 1, "d-block", "mx-auto"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"], ["href", "#", 1, "py-2", "d-none", "d-md-inline-block"]], template: function MenuPrincipalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LXByaW5jaXBhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "uXbx":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class QuienSoyComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuienSoyComponent.??fac = function QuienSoyComponent_Factory(t) { return new (t || QuienSoyComponent)(); };
QuienSoyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: QuienSoyComponent, selectors: [["app-quien-soy"]], decls: 2, vars: 0, template: function QuienSoyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "quien-soy works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWllbi1zb3kuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/error/error.component */ "RsNB");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/home/home.component */ "LBdu");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/login/login.component */ "85Sk");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "uXbx");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "eX/z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'home', component: _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registro', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__["RegistroComponent"] },
    { path: 'quienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_4__["QuienSoyComponent"] },
    { path: '**', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"] },
    { path: '', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.8af116037370bee51cae.js.map