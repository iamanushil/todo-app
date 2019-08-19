(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div\n  class=\"rainbow\"\n  style=\"text-align:center; margin-top: 80px; margin-right: 40px\"\n>\n  <h1>{{ title }}</h1>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/subtask/subtask.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/subtask/subtask.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div>\n    <form\n      [formGroup]=\"subtaskForm\"\n      novalidate\n      (ngSubmit)=\"onSubmit(subtaskForm.value, todo)\"\n    >\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            formControlName=\"description\"\n          />\n        </div>\n        <div>\n          <button type=\"submit\" class=\"btb btn-primary\">\n            Add Subtask\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todo/todo.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todo/todo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"center\">\n    <form [formGroup]=\"todoForm\" (ngSubmit)=\"onSubmit(todoForm.value)\">\n      <div\n        class=\"form-row align-items-center\"\n        style=\"margin-top: 30px; margin-left: 310px\"\n      >\n        <div class=\"col-sm-6 my-1\">\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"item\"\n            #desc\n          />\n        </div>\n        <div class=\"col-auto my-1\">\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"onSubmit(todoForm.value)\"\n          >\n            Todo\n          </button>\n        </div>\n      </div>\n    </form>\n    <div class=\"col-auto my-1\">\n      <button\n        type=\"button\"\n        class=\"btn btn-primary\"\n        (click)=\"recoverLastDeletedTodo()\"\n        *ngIf=\"undoButton\"\n      >\n        Undo\n      </button>\n    </div>\n    <br />\n    <table class=\"table\">\n      <thead></thead>\n      <tbody>\n        <tr *ngFor=\"let todo of todos\">\n          <td>{{ todo.description }}</td>\n          <td>\n            <button class=\"btn btn-secondary\" (click)=\"selectATodo(todo)\">\n              Edit\n            </button>\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteTodo(todo)\">\n              Delete\n            </button>\n          </td>\n          <td>\n            <button class=\"btn btn-secondary\" (click)=\"showSubtask(todo)\">\n              Subtask\n            </button>\n          </td>\n          <td>\n            <app-subtask [subtasks]=\"subtasks\" [todo]=\"todo\"></app-subtask>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br /><br />\n  <div class=\"center\">\n    <table class=\"table\">\n      <thead align=\"center\">\n        <h3 style=\"color: peru\">Subtask List</h3>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let subtask of subtasks\">\n          <td>{{ subtask.description }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");




const routes = [{ path: "**", component: _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"] }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rainbow {\n  background-image: -webkit-gradient(\n    linear,\n    left top,\n    right top,\n    color-stop(0, #f22),\n    color-stop(0.15, #f2f),\n    color-stop(0.3, #22f),\n    color-stop(0.45, #2ff),\n    color-stop(0.6, #2f2),\n    color-stop(0.75, #2f2),\n    color-stop(0.9, #ff2),\n    color-stop(1, #f22)\n  );\n  background-image: gradient(\n    linear,\n    left top,\n    right top,\n    color-stop(0, #f22),\n    color-stop(0.15, #f2f),\n    color-stop(0.3, #22f),\n    color-stop(0.45, #2ff),\n    color-stop(0.6, #2f2),\n    color-stop(0.75, #2f2),\n    color-stop(0.9, #ff2),\n    color-stop(1, #f22)\n  );\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7Ozs7Ozs7Ozs7O0dBWUM7RUFDRDs7Ozs7Ozs7Ozs7O0dBWUM7RUFDRCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhaW5ib3cge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxuICAgIGxpbmVhcixcbiAgICBsZWZ0IHRvcCxcbiAgICByaWdodCB0b3AsXG4gICAgY29sb3Itc3RvcCgwLCAjZjIyKSxcbiAgICBjb2xvci1zdG9wKDAuMTUsICNmMmYpLFxuICAgIGNvbG9yLXN0b3AoMC4zLCAjMjJmKSxcbiAgICBjb2xvci1zdG9wKDAuNDUsICMyZmYpLFxuICAgIGNvbG9yLXN0b3AoMC42LCAjMmYyKSxcbiAgICBjb2xvci1zdG9wKDAuNzUsICMyZjIpLFxuICAgIGNvbG9yLXN0b3AoMC45LCAjZmYyKSxcbiAgICBjb2xvci1zdG9wKDEsICNmMjIpXG4gICk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGdyYWRpZW50KFxuICAgIGxpbmVhcixcbiAgICBsZWZ0IHRvcCxcbiAgICByaWdodCB0b3AsXG4gICAgY29sb3Itc3RvcCgwLCAjZjIyKSxcbiAgICBjb2xvci1zdG9wKDAuMTUsICNmMmYpLFxuICAgIGNvbG9yLXN0b3AoMC4zLCAjMjJmKSxcbiAgICBjb2xvci1zdG9wKDAuNDUsICMyZmYpLFxuICAgIGNvbG9yLXN0b3AoMC42LCAjMmYyKSxcbiAgICBjb2xvci1zdG9wKDAuNzUsICMyZjIpLFxuICAgIGNvbG9yLXN0b3AoMC45LCAjZmYyKSxcbiAgICBjb2xvci1zdG9wKDEsICNmMjIpXG4gICk7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "My Tasks...";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_subtask_subtask_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/subtask/subtask.component */ "./src/app/components/subtask/subtask.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"], _components_subtask_subtask_component__WEBPACK_IMPORTED_MODULE_8__["SubtaskComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/subtask/subtask.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/subtask/subtask.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto;\n  width: 60%;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJ0YXNrL3N1YnRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdWJ0YXNrL3N1YnRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/subtask/subtask.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/subtask/subtask.component.ts ***!
  \*********************************************************/
/*! exports provided: SubtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtaskComponent", function() { return SubtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_subtaskService_subtask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/subtaskService/subtask.service */ "./src/app/services/subtaskService/subtask.service.ts");




let SubtaskComponent = class SubtaskComponent {
    constructor(forumBuilder, subtaskService) {
        this.forumBuilder = forumBuilder;
        this.subtaskService = subtaskService;
        this.subtasks = [];
        this.createForm();
    }
    createForm() {
        this.subtaskForm = this.forumBuilder.group({
            description: ""
        });
    }
    ngOnInit() { }
    onSubmit(val, todo) {
        if (val.description == null || val.description == "") {
            alert("Please enter some description");
        }
        else {
            const subtask = {
                id: null,
                description: val.description,
                todoId: todo.id
            };
            this.subtaskService
                .saveSubtaskToATodo(subtask)
                .subscribe(res => this.subtasks.push(res));
        }
        this.subtaskForm.reset();
    }
};
SubtaskComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_subtaskService_subtask_service__WEBPACK_IMPORTED_MODULE_3__["SubtaskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("subtasks")
], SubtaskComponent.prototype, "subtasks", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("todo")
], SubtaskComponent.prototype, "todo", void 0);
SubtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-subtask",
        template: __webpack_require__(/*! raw-loader!./subtask.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/subtask/subtask.component.html"),
        styles: [__webpack_require__(/*! ./subtask.component.css */ "./src/app/components/subtask/subtask.component.css")]
    })
], SubtaskComponent);



/***/ }),

/***/ "./src/app/components/todo/todo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/todo/todo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto;\n  width: 60%;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_todoService_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/todoService/todo.service */ "./src/app/services/todoService/todo.service.ts");




let TodoComponent = class TodoComponent {
    constructor(formBuilder, todoService) {
        this.formBuilder = formBuilder;
        this.todoService = todoService;
        this.todos = [];
        this.undoButton = false;
        this.subtasks = [];
        this.createForm();
    }
    createForm() {
        this.todoForm = this.formBuilder.group({
            item: ""
        });
    }
    // To load all todos when TodoComponent is loaded
    ngOnInit() {
        this.todoService.getTodos().subscribe(res => (this.todos = res));
    }
    // For Adding and Updating a Todo
    onSubmit(val) {
        if (val.item == null || val.item == "") {
            alert("Please enter some description");
        }
        else {
            // we got an object with the input value
            if (!this.selectedTodo) {
                const newTodo = {
                    id: null,
                    description: val.item
                };
                this.todoService
                    .saveTodo(newTodo)
                    .subscribe(res => this.todos.push(res));
            }
            else {
                const updatedTodo = {
                    // since we are updating a todo, so we need to provide the id
                    id: this.selectedTodo.id,
                    description: val.item
                };
                this.todoService
                    .updateTodo(updatedTodo)
                    .subscribe(res => (this.todos.filter(todo => this.isSameTodo(res, todo))[0].description = res.description));
            }
        }
        this.selectedTodo = null;
        this.todoForm.reset();
    }
    deleteTodo(todoToRemove) {
        this.todoService.deleteTodo(todoToRemove).subscribe(res => {
            // removing from the todos array
            this.todos = this.todos.filter(todo => todo.id !== todoToRemove.id);
        });
        this.undoButton = true;
    }
    selectATodo(todo) {
        this.selectedTodo = todo;
        // To populate the input box for edit
        this.todoForm.controls["item"].setValue(todo.description);
        // to focus on input
        this.desc.nativeElement.focus();
    }
    // check if two todos are same or not
    isSameTodo(todoList, selectedTodo) {
        return todoList.id == selectedTodo.id;
    }
    showSubtask(todo) {
        this.todoService.getSubtaskForATodo(todo).subscribe(res => {
            this.subtasks = res;
        });
    }
    recoverLastDeletedTodo() {
        this.todoService.getLastDeletedTodo().subscribe(res => {
            this.todos.push(res);
        });
        this.undoButton = false;
    }
};
TodoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_todoService_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("desc", { static: true })
], TodoComponent.prototype, "desc", void 0);
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-todo",
        template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todo/todo.component.html"),
        providers: [_services_todoService_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]],
        styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/components/todo/todo.component.css")]
    })
], TodoComponent);



/***/ }),

/***/ "./src/app/services/subtaskService/subtask.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/subtaskService/subtask.service.ts ***!
  \************************************************************/
/*! exports provided: SubtaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtaskService", function() { return SubtaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SubtaskService = class SubtaskService {
    constructor(https) {
        this.https = https;
        this.baseUrl = "/api/todos/subtask";
    }
    saveSubtaskToATodo(subtask) {
        return this.https.post(this.baseUrl, subtask);
    }
};
SubtaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubtaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SubtaskService);



/***/ }),

/***/ "./src/app/services/todoService/todo.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/todoService/todo.service.ts ***!
  \******************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TodoService = class TodoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "/api/todos";
    }
    saveTodo(todo) {
        return this.http.post(this.baseUrl, todo);
    }
    getTodos() {
        return this.http.get(this.baseUrl);
    }
    deleteTodo(todo) {
        return this.http.delete(this.baseUrl + "/" + todo.id);
    }
    updateTodo(todo) {
        return this.http.put(this.baseUrl + "/" + todo.id, todo);
    }
    getSubtaskForATodo(todo) {
        return this.http.get(this.baseUrl + "/" + todo.id);
    }
    getLastDeletedTodo() {
        return this.http.get(this.baseUrl + "/recover");
    }
};
TodoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TodoService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hydro/CollPoll/todo-app/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map