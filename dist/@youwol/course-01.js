(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@youwol/math"));
	else if(typeof define === 'function' && define.amd)
		define("@youwol/course-01", ["@youwol/math"], factory);
	else if(typeof exports === 'object')
		exports["@youwol/course-01"] = factory(require("@youwol/math"));
	else
		root["@youwol/course-01"] = factory(root["@youwol/math"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__youwol_math__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/derivatives/Base.ts":
/*!*********************************!*\
  !*** ./lib/derivatives/Base.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./lib/derivatives/add.ts":
/*!********************************!*\
  !*** ./lib/derivatives/add.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add)
/* harmony export */ });
function add(f1, f2) { return new Add(f1, f2); }
class Add {
    constructor(f1, f2) {
        this.f1 = f1;
        this.f2 = f2;
    }
    eval(v) {
        return this.f1.eval(v) + this.f2.eval(v);
    }
    name(v) {
        const s1 = this.f1.name(v);
        const s2 = this.f2.name(v);
        if (s1 === '') {
            if (s2 === '') {
                return '';
            }
            return s2;
        }
        if (s2 === '') {
            return s1;
        }
        return s1 + "+" + s2;
    }
    derive() {
        var a = this.f1.derive();
        var b = this.f2.derive();
        if (a.isNull())
            return b;
        if (b.isNull())
            return a;
        return add(a, b);
    }
    isNull() { return false; }
    isCst() { return false; }
}


/***/ }),

/***/ "./lib/derivatives/comp.ts":
/*!*********************************!*\
  !*** ./lib/derivatives/comp.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comp": () => (/* binding */ comp)
/* harmony export */ });
/* harmony import */ var _prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod */ "./lib/derivatives/prod.ts");

function comp(f1, f2) { return new Comp(f1, f2); }
class Comp {
    constructor(f1, f2) {
        this.f1 = f1;
        this.f2 = f2;
    }
    eval(v) {
        return this.f1.eval(this.f2.eval(v));
    }
    name(v) {
        return this.f1.name(this.f2.name(v));
    }
    derive() {
        return (0,_prod__WEBPACK_IMPORTED_MODULE_0__.prod)(comp(this.f1.derive(), this.f2), this.f2.derive());
    }
    isNull() { return false; }
    isCst() { return false; }
}


/***/ }),

/***/ "./lib/derivatives/constant.ts":
/*!*************************************!*\
  !*** ./lib/derivatives/constant.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cst": () => (/* binding */ cst),
/* harmony export */   "Cst": () => (/* binding */ Cst)
/* harmony export */ });
function cst(v) { return new Cst(v); }
class Cst {
    constructor(v) {
        this.v = v;
    }
    eval(v) {
        return this.v;
    }
    name(v) { return this.v.toString(); }
    derive() { return cst(0); }
    isNull() { return this.v === 0; }
    isCst() { return true; }
}


/***/ }),

/***/ "./lib/derivatives/div.ts":
/*!********************************!*\
  !*** ./lib/derivatives/div.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "Div": () => (/* binding */ Div)
/* harmony export */ });
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pow */ "./lib/derivatives/pow.ts");
/* harmony import */ var _prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod */ "./lib/derivatives/prod.ts");
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub */ "./lib/derivatives/sub.ts");



function div(f1, f2) { return new Div(f1, f2); }
class Div {
    constructor(f1, f2) {
        this.f1 = f1;
        this.f2 = f2;
    }
    eval(v) {
        return this.f1.eval(v) / this.f2.eval(v);
    }
    name(v) { return "(" + this.f1.name(v) + ")/(" + this.f2.name(v) + ")"; }
    derive() {
        return div((0,_sub__WEBPACK_IMPORTED_MODULE_2__.sub)((0,_prod__WEBPACK_IMPORTED_MODULE_1__.prod)(this.f1.derive(), this.f2), (0,_prod__WEBPACK_IMPORTED_MODULE_1__.prod)(this.f1, this.f2.derive())), (0,_pow__WEBPACK_IMPORTED_MODULE_0__.pow)(this.f2, 2));
    }
    isNull() { return false; }
    isCst() { return false; }
}


/***/ }),

/***/ "./lib/derivatives/exp.ts":
/*!********************************!*\
  !*** ./lib/derivatives/exp.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exp": () => (/* binding */ exp)
/* harmony export */ });
function exp() { return new Exp(); }
class Exp {
    eval(v) {
        return Math.exp(v);
    }
    name(v) { return "e^(" + v + ")"; }
    derive() { return this; }
    isNull() { return false; }
    isCst() { return false; }
}


/***/ }),

/***/ "./lib/derivatives/index.ts":
/*!**********************************!*\
  !*** ./lib/derivatives/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* reexport safe */ _add__WEBPACK_IMPORTED_MODULE_1__.add),
/* harmony export */   "comp": () => (/* reexport safe */ _comp__WEBPACK_IMPORTED_MODULE_2__.comp),
/* harmony export */   "Cst": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_3__.Cst),
/* harmony export */   "cst": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_3__.cst),
/* harmony export */   "Div": () => (/* reexport safe */ _div__WEBPACK_IMPORTED_MODULE_4__.Div),
/* harmony export */   "div": () => (/* reexport safe */ _div__WEBPACK_IMPORTED_MODULE_4__.div),
/* harmony export */   "exp": () => (/* reexport safe */ _exp__WEBPACK_IMPORTED_MODULE_5__.exp),
/* harmony export */   "Negate": () => (/* reexport safe */ _negate__WEBPACK_IMPORTED_MODULE_6__.Negate),
/* harmony export */   "negate": () => (/* reexport safe */ _negate__WEBPACK_IMPORTED_MODULE_6__.negate),
/* harmony export */   "pow": () => (/* reexport safe */ _pow__WEBPACK_IMPORTED_MODULE_7__.pow),
/* harmony export */   "prod": () => (/* reexport safe */ _prod__WEBPACK_IMPORTED_MODULE_8__.prod),
/* harmony export */   "sub": () => (/* reexport safe */ _sub__WEBPACK_IMPORTED_MODULE_9__.sub),
/* harmony export */   "cos": () => (/* reexport safe */ _trigo__WEBPACK_IMPORTED_MODULE_10__.cos),
/* harmony export */   "sin": () => (/* reexport safe */ _trigo__WEBPACK_IMPORTED_MODULE_10__.sin),
/* harmony export */   "tan": () => (/* reexport safe */ _trigo__WEBPACK_IMPORTED_MODULE_10__.tan),
/* harmony export */   "variable": () => (/* reexport safe */ _var__WEBPACK_IMPORTED_MODULE_11__.variable)
/* harmony export */ });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./lib/derivatives/Base.ts");
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add */ "./lib/derivatives/add.ts");
/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp */ "./lib/derivatives/comp.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./lib/derivatives/constant.ts");
/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./div */ "./lib/derivatives/div.ts");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp */ "./lib/derivatives/exp.ts");
/* harmony import */ var _negate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./negate */ "./lib/derivatives/negate.ts");
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pow */ "./lib/derivatives/pow.ts");
/* harmony import */ var _prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prod */ "./lib/derivatives/prod.ts");
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub */ "./lib/derivatives/sub.ts");
/* harmony import */ var _trigo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trigo */ "./lib/derivatives/trigo.ts");
/* harmony import */ var _var__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./var */ "./lib/derivatives/var.ts");














/***/ }),

/***/ "./lib/derivatives/negate.ts":
/*!***********************************!*\
  !*** ./lib/derivatives/negate.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "Negate": () => (/* binding */ Negate)
/* harmony export */ });
function negate(v) { return new Negate(v); }
class Negate {
    constructor(f) {
        this.f = f;
    }
    eval(v) {
        return -this.f.eval(v);
    }
    name(v) { return "(-" + this.f.name(v) + ')'; }
    derive() { return negate(this.f.derive()); }
    isNull() { return this.f.isNull(); }
    isCst() { return this.f.isCst(); }
}


/***/ }),

/***/ "./lib/derivatives/pow.ts":
/*!********************************!*\
  !*** ./lib/derivatives/pow.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pow": () => (/* binding */ pow)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./lib/derivatives/constant.ts");
/* harmony import */ var _prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod */ "./lib/derivatives/prod.ts");


function pow(f1, deg) { return new Pow(f1, deg); }
// f^n
class Pow {
    constructor(f, deg) {
        this.f = f;
        this.deg = deg;
    }
    eval(v) {
        return Math.pow(this.f.eval(v), this.deg);
    }
    name(v) {
        if (this.deg === 1) {
            return this.f.name(v);
        }
        return "(" + this.f.name(v) + ")^" + this.deg;
    }
    derive() {
        if (this.deg === 0)
            return (0,_constant__WEBPACK_IMPORTED_MODULE_0__.cst)(0);
        const df = this.f.derive();
        if (this.deg === 1)
            return df;
        if (df.isNull())
            return df;
        if (this.deg === 2) {
            return (0,_prod__WEBPACK_IMPORTED_MODULE_1__.prod)((0,_prod__WEBPACK_IMPORTED_MODULE_1__.prod)((0,_constant__WEBPACK_IMPORTED_MODULE_0__.cst)(this.deg), df), this.f);
        }
        return (0,_prod__WEBPACK_IMPORTED_MODULE_1__.prod)((0,_prod__WEBPACK_IMPORTED_MODULE_1__.prod)((0,_constant__WEBPACK_IMPORTED_MODULE_0__.cst)(this.deg), df), pow(this.f, this.deg - 1));
    }
    isNull() { return false; }
    isCst() { return false; }
}


/***/ }),

/***/ "./lib/derivatives/prod.ts":
/*!*********************************!*\
  !*** ./lib/derivatives/prod.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prod": () => (/* binding */ prod)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./lib/derivatives/add.ts");

function prod(f1, f2) { return new Prod(f1, f2); }
// f*g
// f'*g + f*g'
class Prod {
    constructor(f1, f2) {
        this.f1 = f1;
        this.f2 = f2;
    }
    eval(v) {
        return this.f1.eval(v) * this.f2.eval(v);
    }
    name(v) {
        if (this.f1.isNull() || this.f2.isNull())
            return "";
        const s1 = this.f1.name(v);
        const s2 = this.f2.name(v);
        if (s1 === '1') {
            if (s2 === '1') {
                return "1";
            }
            return s2;
        }
        if (s2 === '1') {
            return s1;
        }
        return s1 + "*" + s2;
    }
    derive() {
        const a = this.f1.derive();
        const b = this.f2.derive();
        // -------------------------------------------------
        // TODO:
        // 1) Optimlization by simplification
        // 2) Detect the bug in the following commented code
        // -------------------------------------------------
        // if (a.isNull()) {
        //     if (b.isNull()) return cst(0)
        //     if (this.f1.isCst() && b.isCst()) return cst((this.f1 as Cst).v * (b as Cst).v)
        //     return prod(this.f1, b)
        // }
        // if (b.isNull()) {
        //     if (a.isCst() && this.f2.isCst()) return cst((this.f2 as Cst).v * (a as Cst).v)
        //     return prod(a, this.f2)
        // }
        // console.log(this.f2, b.name('x')) // second arg is 'NaN' !
        return (0,_add__WEBPACK_IMPORTED_MODULE_0__.add)(prod(a, this.f2), prod(this.f1, b));
    }
    isNull() { return this.f1.isNull() && this.f2.isNull(); }
    isCst() { return this.f1.isCst() && this.f2.isCst(); }
}


/***/ }),

/***/ "./lib/derivatives/sub.ts":
/*!********************************!*\
  !*** ./lib/derivatives/sub.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _negate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./negate */ "./lib/derivatives/negate.ts");

function sub(f1, f2) { return new Sub(f1, f2); }
class Sub {
    constructor(f1, f2) {
        this.f1 = f1;
        this.f2 = f2;
    }
    eval(v) {
        return this.f1.eval(v) - this.f2.eval(v);
    }
    name(v) { return this.f1.name(v) + "-" + this.f2.name(v); }
    derive() {
        var a = this.f1.derive();
        var b = this.f2.derive();
        if (a.isNull())
            return (0,_negate__WEBPACK_IMPORTED_MODULE_0__.negate)(b);
        if (b.isNull())
            return a;
        return sub(a, b);
    }
    isNull() { return false; }
    isCst() { return false; }
}


/***/ }),

/***/ "./lib/derivatives/trigo.ts":
/*!**********************************!*\
  !*** ./lib/derivatives/trigo.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sin": () => (/* binding */ sin),
/* harmony export */   "cos": () => (/* binding */ cos),
/* harmony export */   "tan": () => (/* binding */ tan)
/* harmony export */ });
/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./div */ "./lib/derivatives/div.ts");
/* harmony import */ var _negate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./negate */ "./lib/derivatives/negate.ts");


function sin() { return new Sin(); }
function cos() { return new Cos(); }
function tan() { return new Tan(); }
class Sin {
    eval(v) {
        return Math.sin(v);
    }
    name(v) { return "sin(" + v + ")"; }
    derive() { return cos(); }
    isNull() { return false; }
    isCst() { return false; }
}
class Cos {
    eval(v) {
        return Math.cos(v);
    }
    name(v) { return "cos(" + v + ")"; }
    derive() { return (0,_negate__WEBPACK_IMPORTED_MODULE_1__.negate)(sin()); }
    isNull() { return false; }
    isCst() { return false; }
}
class Tan extends _div__WEBPACK_IMPORTED_MODULE_0__.Div {
    constructor() { super(sin(), cos()); }
}


/***/ }),

/***/ "./lib/derivatives/var.ts":
/*!********************************!*\
  !*** ./lib/derivatives/var.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "variable": () => (/* binding */ variable)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./lib/derivatives/constant.ts");

function variable() { return new Var(); }
class Var {
    eval(v) {
        return v;
    }
    name(v) { return v; }
    derive() { return (0,_constant__WEBPACK_IMPORTED_MODULE_0__.cst)(1); }
    isNull() { return false; }
    isCst() { return false; }
}


/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "meanNormals": () => (/* reexport safe */ _stress__WEBPACK_IMPORTED_MODULE_0__.meanNormals),
/* harmony export */   "meanValues": () => (/* reexport safe */ _stress__WEBPACK_IMPORTED_MODULE_0__.meanValues),
/* harmony export */   "Cst": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.Cst),
/* harmony export */   "Div": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.Div),
/* harmony export */   "Negate": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.Negate),
/* harmony export */   "add": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.add),
/* harmony export */   "comp": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.comp),
/* harmony export */   "cos": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.cos),
/* harmony export */   "cst": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.cst),
/* harmony export */   "div": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.div),
/* harmony export */   "exp": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.exp),
/* harmony export */   "negate": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.negate),
/* harmony export */   "pow": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.pow),
/* harmony export */   "prod": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.prod),
/* harmony export */   "sin": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.sin),
/* harmony export */   "sub": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.sub),
/* harmony export */   "tan": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.tan),
/* harmony export */   "variable": () => (/* reexport safe */ _derivatives__WEBPACK_IMPORTED_MODULE_1__.variable)
/* harmony export */ });
/* harmony import */ var _stress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stress */ "./lib/stress.ts");
/* harmony import */ var _derivatives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./derivatives */ "./lib/derivatives/index.ts");




/***/ }),

/***/ "./lib/stress.ts":
/*!***********************!*\
  !*** ./lib/stress.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "meanNormals": () => (/* binding */ meanNormals),
/* harmony export */   "meanValues": () => (/* binding */ meanValues)
/* harmony export */ });
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @youwol/math */ "@youwol/math");
/* harmony import */ var _youwol_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_youwol_math__WEBPACK_IMPORTED_MODULE_0__);

function meanNormals(serie, index = 0) {
    if (serie.itemSize !== 6)
        throw new Error('Serie must be with itemSize=6 (stress/strain)');
    return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.mean)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.eigenVector)(serie).map(stress => [stress[3 * index], stress[3 * index + 1], stress[3 * index + 2]]));
}
function meanValues(serie, index = 0) {
    if (serie.itemSize !== 6)
        throw new Error('Serie must be with itemSize=6 (stress/strain)');
    return (0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.mean)((0,_youwol_math__WEBPACK_IMPORTED_MODULE_0__.eigenValue)(serie).map(values => values[index]));
}


/***/ }),

/***/ "@youwol/math":
/*!*******************************!*\
  !*** external "@youwol/math" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__youwol_math__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cst": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Cst),
/* harmony export */   "Div": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Div),
/* harmony export */   "Negate": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Negate),
/* harmony export */   "add": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.add),
/* harmony export */   "comp": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.comp),
/* harmony export */   "cos": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.cos),
/* harmony export */   "cst": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.cst),
/* harmony export */   "div": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.div),
/* harmony export */   "exp": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.exp),
/* harmony export */   "meanNormals": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.meanNormals),
/* harmony export */   "meanValues": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.meanValues),
/* harmony export */   "negate": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.negate),
/* harmony export */   "pow": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.pow),
/* harmony export */   "prod": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.prod),
/* harmony export */   "sin": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.sin),
/* harmony export */   "sub": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.sub),
/* harmony export */   "tan": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.tan),
/* harmony export */   "variable": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.variable)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./lib/index.ts");


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=course-01.js.map