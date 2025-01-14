/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************************!*\
  !*** ./src/content/index.tsx ***!
  \*******************************/

browser.runtime;
browser.runtime
    .sendMessage({
    type: 'R',
})
    .then((sites) => {
    console.log('sites from background js:', sites);
});
function injectCustomElement() {
    console.log('injected!!!');
}
// Check if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCustomElement);
}
else {
    injectCustomElement();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLENBQUMsT0FBTztBQUNmLE9BQU8sQ0FBQyxPQUFPO0tBQ1osV0FBVyxDQUFDO0lBQ1gsSUFBSSxFQUFFLEdBQUc7Q0FDVixDQUFDO0tBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQztBQUNqRCxDQUFDLENBQUM7QUFFSixTQUFTLG1CQUFtQjtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUM1QixDQUFDO0FBQ0QsaUNBQWlDO0FBQ2pDLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUM7QUFDcEUsQ0FBQztLQUFNLENBQUM7SUFDTixtQkFBbUIsRUFBRTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbnRlbnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImJyb3dzZXIucnVudGltZVxuYnJvd3Nlci5ydW50aW1lXG4gIC5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogJ1InLFxuICB9KVxuICAudGhlbigoc2l0ZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2l0ZXMgZnJvbSBiYWNrZ3JvdW5kIGpzOicsIHNpdGVzKVxuICB9KVxuXG5mdW5jdGlvbiBpbmplY3RDdXN0b21FbGVtZW50KCkge1xuICBjb25zb2xlLmxvZygnaW5qZWN0ZWQhISEnKVxufVxuLy8gQ2hlY2sgaWYgRE9NIGlzIGFscmVhZHkgbG9hZGVkXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbmplY3RDdXN0b21FbGVtZW50KVxufSBlbHNlIHtcbiAgaW5qZWN0Q3VzdG9tRWxlbWVudCgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=