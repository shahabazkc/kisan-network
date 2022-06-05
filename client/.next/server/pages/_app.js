"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./redux/reducers/menu-types.ts
var menu_types = __webpack_require__(146);
;// CONCATENATED MODULE: ./redux/reducers/menu-reducer.ts

const initialState = {
    menu: {
        currentTab: "contacts"
    },
    composeData: {
        firstName: "",
        lastName: "",
        number: "",
        message: ""
    }
};
function menuReducer(state = initialState, action) {
    switch(action.type){
        case menu_types/* CHANGE_TAB */.Z:
            return {
                ...state,
                menu: action.payload
            };
        case menu_types/* CHANGE_COMPOSE_DATA */.Vx:
            return {
                ...state,
                composeData: action.payload
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./redux/store.tsx


const composeEnhancers = global.window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || external_redux_namespaceObject.compose;
const reducers = (0,external_redux_namespaceObject.combineReducers)({
    menu: menuReducer
});
const store = (0,external_redux_namespaceObject.createStore)(reducers, composeEnhancers());
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./pages/_app.tsx


// add bootstrap css 



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vx": () => (/* binding */ CHANGE_COMPOSE_DATA),
/* harmony export */   "Z": () => (/* binding */ CHANGE_TAB)
/* harmony export */ });
/* unused harmony export GETMENU */
const GETMENU = "GETMENU";
const CHANGE_TAB = "CHANGE_TAB";
const CHANGE_COMPOSE_DATA = "CHANGE_COMPOSE_DATA";


/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(333));
module.exports = __webpack_exports__;

})();