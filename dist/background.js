/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/extensionStorageManagerImpl.ts":
/*!***************************************************!*\
  !*** ./src/models/extensionStorageManagerImpl.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionStorageManagerImpl: () => (/* binding */ ExtensionStorageManagerImpl)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ExtensionStorageManagerImpl {
    constructor() {
        this.key = 'siteList';
        this.addSite = (domain) => __awaiter(this, void 0, void 0, function* () {
            const siteList = yield this.getSiteList();
            const index = siteList.findIndex((item) => item.domain === domain);
            if (index !== -1)
                return false;
            siteList.push({ domain, status: 'none' });
            yield this.setSiteList(siteList);
            return true;
        });
        this.removeSite = (domain) => __awaiter(this, void 0, void 0, function* () {
            const siteList = yield this.getSiteList();
            const index = siteList.findIndex((item) => item.domain === domain);
            if (index === -1)
                return false;
            siteList.splice(index, 1);
            yield this.setSiteList(siteList);
            return true;
        });
        this.getSiteList = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield browser.storage.local.get(this.key);
            return data.siteList || [];
        });
        this.setSiteList = (siteList) => __awaiter(this, void 0, void 0, function* () {
            yield browser.storage.local.set({ [this.key]: siteList });
        });
        this.toggleSiteStatus = (domain) => __awaiter(this, void 0, void 0, function* () {
            const siteList = yield this.getSiteList();
            const siteItem = siteList.find((item) => item.domain === domain);
            if (siteItem === undefined)
                return false;
            switch (siteItem.status) {
                case "include":
                    siteItem.status = "none";
                    break;
                case "exclude":
                    siteItem.status = "include";
                    break;
                case "none":
                    siteItem.status = "exclude";
                    break;
                default:
                    return false;
            }
            yield this.setSiteList(siteList);
            return true;
        });
    }
}


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_extensionStorageManagerImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/extensionStorageManagerImpl */ "./src/models/extensionStorageManagerImpl.ts");

const manager = new _models_extensionStorageManagerImpl__WEBPACK_IMPORTED_MODULE_0__.ExtensionStorageManagerImpl();
browser.runtime.onMessage.addListener((message) => {
    switch (message.type) {
        case 'C':
            manager.addSite(message.data.domain);
            break;
        case 'D':
            manager.removeSite(message.data.domain);
            break;
        case 'U':
            manager.toggleSiteStatus(message.data.domain);
            break;
    }
    return manager.getSiteList();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rRjtBQUdsRixNQUFNLE9BQU8sR0FBRyxJQUFJLDRGQUEyQixFQUFFO0FBRWpELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQWlCLEVBQUUsRUFBRTtJQUMxRCxRQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixLQUFLLEdBQUc7WUFDTixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE1BQUs7UUFDUCxLQUFLLEdBQUc7WUFDTixPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLE1BQUs7UUFDUCxLQUFLLEdBQUc7WUFDTixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0MsTUFBSztJQUNULENBQUM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDOUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZGVscy9leHRlbnNpb25TdG9yYWdlTWFuYWdlckltcGwudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2JhY2tncm91bmQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJU2l0ZUl0ZW19IGZyb20gJy4vYmFzZSdcbmltcG9ydCB7IElTdG9yYWdlTWFuYWdlciB9IGZyb20gJy4vc3RvcmFnZU1hbmFnZXIuaW50ZXJmYWNlJ1xuXG5cblxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvblN0b3JhZ2VNYW5hZ2VySW1wbCBpbXBsZW1lbnRzIElTdG9yYWdlTWFuYWdlciB7XG5cbiAgcHJpdmF0ZSBrZXkgPSAnc2l0ZUxpc3QnXG5cbiAgIGFkZFNpdGUgPSBhc3luYyAoZG9tYWluOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCBzaXRlTGlzdCA9IGF3YWl0IHRoaXMuZ2V0U2l0ZUxpc3QoKVxuICAgIGNvbnN0IGluZGV4ID0gc2l0ZUxpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmRvbWFpbiA9PT0gZG9tYWluKVxuICAgIGlmKGluZGV4ICE9PSAtMSkgcmV0dXJuIGZhbHNlXG4gICAgc2l0ZUxpc3QucHVzaCh7ZG9tYWluLCBzdGF0dXM6ICdub25lJ30pXG4gICAgYXdhaXQgdGhpcy5zZXRTaXRlTGlzdChzaXRlTGlzdClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVtb3ZlU2l0ZSA9IGFzeW5jIChkb21haW46IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IHNpdGVMaXN0ID0gYXdhaXQgdGhpcy5nZXRTaXRlTGlzdCgpXG4gICAgY29uc3QgaW5kZXggPSBzaXRlTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uZG9tYWluID09PSBkb21haW4pXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlXG4gICAgc2l0ZUxpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgIGF3YWl0IHRoaXMuc2V0U2l0ZUxpc3Qoc2l0ZUxpc3QpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGdldFNpdGVMaXN0ID0gYXN5bmMgKCk6IFByb21pc2U8SVNpdGVJdGVtW10+ID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldCh0aGlzLmtleSlcbiAgICByZXR1cm4gZGF0YS5zaXRlTGlzdCB8fCBbXVxuICB9XG5cbiAgc2V0U2l0ZUxpc3QgPSBhc3luYyAoc2l0ZUxpc3Q6IElTaXRlSXRlbVtdKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7IFt0aGlzLmtleV06IHNpdGVMaXN0IH0pXG4gIH1cbiAgdG9nZ2xlU2l0ZVN0YXR1cyA9IGFzeW5jIChkb21haW46IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IHNpdGVMaXN0ID0gYXdhaXQgdGhpcy5nZXRTaXRlTGlzdCgpXG4gICAgY29uc3Qgc2l0ZUl0ZW0gPSBzaXRlTGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmRvbWFpbiA9PT0gZG9tYWluKVxuICAgIGlmIChzaXRlSXRlbSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2VcbiAgICBzd2l0Y2ggKHNpdGVJdGVtLnN0YXR1cykge1xuICAgICAgY2FzZSBcImluY2x1ZGVcIjpcbiAgICAgICAgc2l0ZUl0ZW0uc3RhdHVzID0gXCJub25lXCJcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJleGNsdWRlXCI6XG4gICAgICAgIHNpdGVJdGVtLnN0YXR1cyA9IFwiaW5jbHVkZVwiXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICBzaXRlSXRlbS5zdGF0dXMgPSBcImV4Y2x1ZGVcIlxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2V0U2l0ZUxpc3Qoc2l0ZUxpc3QpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBFeHRlbnNpb25TdG9yYWdlTWFuYWdlckltcGwgfSBmcm9tICdAL21vZGVscy9leHRlbnNpb25TdG9yYWdlTWFuYWdlckltcGwnXG5pbXBvcnQgdHlwZSB7IElNZXNzYWdlIH0gZnJvbSAnQC9tb2RlbHMvYmFzZSdcblxuY29uc3QgbWFuYWdlciA9IG5ldyBFeHRlbnNpb25TdG9yYWdlTWFuYWdlckltcGwoKVxuXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlOiBJTWVzc2FnZSkgPT4ge1xuICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgIGNhc2UgJ0MnOlxuICAgICAgbWFuYWdlci5hZGRTaXRlKG1lc3NhZ2UuZGF0YS5kb21haW4pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ0QnOlxuICAgICAgbWFuYWdlci5yZW1vdmVTaXRlKG1lc3NhZ2UuZGF0YS5kb21haW4pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ1UnOlxuICAgICAgbWFuYWdlci50b2dnbGVTaXRlU3RhdHVzKG1lc3NhZ2UuZGF0YS5kb21haW4pXG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiBtYW5hZ2VyLmdldFNpdGVMaXN0KClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=