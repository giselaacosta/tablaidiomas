(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n    <ion-grid class=\"grid1\">\r\n    \r\n        <ion-row class=\"row1\">\r\n            <ion-col>\r\n    \r\n            </ion-col>\r\n        </ion-row>\r\n    \r\n        <!-- <ion-row class=\"row2\">\r\n            <ion-col>\r\n    \r\n            </ion-col>\r\n        </ion-row> -->\r\n    \r\n    </ion-grid>\r\n    \r\n    <ion-slide>\r\n        <div class=\"contaier-login\">\r\n          <form [formGroup]=\"loginForm\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <h1>Iniciar Sesión</h1>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-list>\r\n                          <ion-item >\r\n                              <ion-icon name=\"person\" class=\"icon-login\"></ion-icon>\r\n                              <ion-input  [(ngModel)]=\"user.email\" type=\"text\" class=\"form-control\"  formControlName=\"email\"  required placeholder=\"Usuario\"></ion-input>\r\n                          </ion-item>\r\n                          <br />\r\n                          <ion-item >\r\n                              <ion-icon name=\"lock\" class=\"icon-login\"></ion-icon>\r\n                              <ion-input [(ngModel)]=\"user.password\" type=\"password\"class=\"form-control\"  formControlName=\"password\" required placeholder=\"Contraseña\"></ion-input>\r\n                          </ion-item>\r\n    \r\n                        </ion-list>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-button  (click)=\"onLogin()\" fill=\"solid\" expand=\"full\">\r\n                            Entrar\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-label>\r\n                            <h3>¿No tenes cuenta?</h3>\r\n                        </ion-label>\r\n                        <ion-button  (click)=\"onRegisterLogin()\" fill=\"solid\" expand=\"full\">\r\n                          Registrarse\r\n                      </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                      <ion-button  (click)=\"AutocompletarAdmin()\" >\r\n                          ADMIN\r\n                      </ion-button>\r\n                      <ion-button  (click)=\"AutocompletarInvitado()\" >\r\n                          INVITADO\r\n                      </ion-button>\r\n                      <ion-button  (click)=\"AutocompletarUsuario()\" >\r\n                          USUARIO\r\n                      </ion-button>\r\n                      <ion-button  (click)=\"AutocompletarAnonimo()\"  >\r\n                          ANONIMO\r\n                      </ion-button>\r\n                      <ion-button  (click)=\"AutocompletarTester()\"  >\r\n                          TESTER\r\n                      </ion-button>\r\n                  </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          \r\n          </form>\r\n        </div>\r\n    </ion-slide>\r\n  \r\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row1 {\n  background: url('fondo.jpg') 0 0/100% 100% no-repeat;\n  height: 100%;\n}\n\nion-icon {\n  margin-right: 15px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  color: #d0edf5;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFHQSxnREFBQTtBQUFKOztBQUlBO0VBQ0ksb0RBQUE7RUFDQSxZQUFBO0FBREo7O0FBV0E7RUFDSSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBVEoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmdyaWQxIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmNvbnRhaWVyLWxvZ2luIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuXHJcbi5yb3cxIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZW5lcy9mb25kby5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgIFxyXG59XHJcblxyXG4vLyAucm93MSB7XHJcbi8vICAgICBoZWlnaHQ6IDUwJTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZW5lcy9mb25kby5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG5cclxuLy8gfVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogI2QwZWRmNTtcclxuXHJcbn1cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _clases_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../clases/user.class */
      "./src/app/clases/user.class.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(authSvc, router) {
          _classCallCheck(this, LoginPage);

          this.authSvc = authSvc;
          this.router = router;
          this.user = new _clases_user_class__WEBPACK_IMPORTED_MODULE_5__["User"]();
          this.uservalido = new _clases_user_class__WEBPACK_IMPORTED_MODULE_5__["User"]();
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
          });
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogin",
          value: function onLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var user;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authSvc.onLogin(this.user);

                    case 2:
                      user = _context.sent;

                      if (user) {
                        console.log('Succesfully login in!!');
                        this.router.navigateByUrl('/bienvenido');
                      } else {
                        console.log('Ocurrio un error!!');
                        this.router.navigateByUrl('/error');
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onRegisterLogin",
          value: function onRegisterLogin() {
            {
              console.log('Vuelvo a register');
              this.router.navigateByUrl('/register');
            }
          }
        }, {
          key: "AutocompletarAdmin",
          value: function AutocompletarAdmin() {
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('admin@admin.com'),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('111111')
            });
            this.user.email = 'admin@admin.com';
            this.user.password = '111111';
            console.log(this.loginForm.value);
          }
        }, {
          key: "AutocompletarInvitado",
          value: function AutocompletarInvitado() {
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('invitado@invitado.com'),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('222222')
            });
            this.user.email = 'invitado@invitado.com';
            this.user.password = '222222';
            console.log(this.loginForm.value);
          }
        }, {
          key: "Autocompletar",
          value: function Autocompletar() {
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('gise@gmail.com'),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('123456')
            });
            console.log(this.loginForm.value);
          }
        }, {
          key: "AutocompletarUsuario",
          value: function AutocompletarUsuario() {
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('usuario@usuario.com'),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('333333')
            });
            this.user.email = 'usuario@usuario.com';
            this.user.password = '333333';
            console.log(this.loginForm.value);
          }
        }, {
          key: "AutocompletarAnonimo",
          value: function AutocompletarAnonimo() {
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('anonimo@anonimo.com'),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('444444')
            });
            this.user.email = 'anonimo@anonimo.com';
            this.user.password = '444444';
            console.log(this.loginForm.value);
          }
        }, {
          key: "AutocompletarTester",
          value: function AutocompletarTester() {
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('tester@tester.com'),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('555555')
            });
            this.user.email = 'tester@tester.com';
            this.user.password = '555555';
            console.log(this.loginForm.value);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map