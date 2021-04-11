(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-error-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>error</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>\r\n     Ocurrio un error al ingresar Usuario o contraseña, reingrese por favor\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item-divider>\r\n    <ion-button size=\"large\"  (click)=\"onSalir()\">Reingresar datos</ion-button>\r\n  \r\n  </ion-item-divider>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/error/error-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/error/error-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: ErrorPageRoutingModule */

    /***/
    function srcAppErrorErrorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPageRoutingModule", function () {
        return ErrorPageRoutingModule;
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


      var _error_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error.page */
      "./src/app/error/error.page.ts");

      var routes = [{
        path: '',
        component: _error_page__WEBPACK_IMPORTED_MODULE_3__["ErrorPage"]
      }];

      var ErrorPageRoutingModule = function ErrorPageRoutingModule() {
        _classCallCheck(this, ErrorPageRoutingModule);
      };

      ErrorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ErrorPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/error/error.module.ts":
    /*!***************************************!*\
      !*** ./src/app/error/error.module.ts ***!
      \***************************************/

    /*! exports provided: ErrorPageModule */

    /***/
    function srcAppErrorErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function () {
        return ErrorPageModule;
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


      var _error_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./error-routing.module */
      "./src/app/error/error-routing.module.ts");
      /* harmony import */


      var _error_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./error.page */
      "./src/app/error/error.page.ts");

      var ErrorPageModule = function ErrorPageModule() {
        _classCallCheck(this, ErrorPageModule);
      };

      ErrorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _error_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErrorPageRoutingModule"]],
        declarations: [_error_page__WEBPACK_IMPORTED_MODULE_6__["ErrorPage"]]
      })], ErrorPageModule);
      /***/
    },

    /***/
    "./src/app/error/error.page.scss":
    /*!***************************************!*\
      !*** ./src/app/error/error.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppErrorErrorPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/error/error.page.ts":
    /*!*************************************!*\
      !*** ./src/app/error/error.page.ts ***!
      \*************************************/

    /*! exports provided: ErrorPage */

    /***/
    function srcAppErrorErrorPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPage", function () {
        return ErrorPage;
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

      var ErrorPage = /*#__PURE__*/function () {
        function ErrorPage(router) {
          _classCallCheck(this, ErrorPage);

          this.router = router;
        }

        _createClass(ErrorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSalir",
          value: function onSalir() {
            {
              console.log('Vuelvo a register');
              this.router.navigateByUrl('/login');
            }
          }
        }]);

        return ErrorPage;
      }();

      ErrorPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ErrorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./error.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./error.page.scss */
        "./src/app/error/error.page.scss"))["default"]]
      })], ErrorPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=error-error-module-es5.js.map