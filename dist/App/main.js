(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/content/content-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper p-0\" [dir]=\"direction\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full-layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  #wrapper\n  class=\"wrapper\"\n  [ngClass]=\"{\n    'nav-collapsed': iscollapsed,\n    'menu-collapsed': iscollapsed,\n    'sidebar-sm': isSidebar_sm,\n    'sidebar-lg': isSidebar_lg\n  }\"\n  [dir]=\"options.direction\"\n>\n  <div\n    #appSidebar\n    appSidebar\n    class=\"app-sidebar\"\n    (toggleHideSidebar)=\"toggleHideSidebar($event)\"\n    [ngClass]=\"{ 'hide-sidebar': hideSidebar }\"\n    data-active-color=\"white\"\n    [attr.data-background-color]=\"bgColor\"\n    [attr.data-image]=\"bgImage\"\n  >\n    <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\" #sidebarBgImage></div>\n  </div>\n  <app-navbar (toggleHideSidebar)=\"toggleHideSidebar($event)\" hidden></app-navbar>\n  <div class=\"main-panel\">\n    <div class=\"main-content\">\n      <div class=\"content-wrapper\">\n        <div class=\"container-fluid\">\n          <app-header></app-header>\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n    <!-- <app-footer></app-footer> -->\n  </div>\n  <app-notification-sidebar></app-notification-sidebar>\n  <app-customizer (directionEvent)=\"getOptions($event)\" hidden></app-customizer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/customizer/customizer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\n<div #customizer class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block\" [ngClass]=\"{open: isOpen}\">\n  <a class=\"customizer-close\" (click)=\"closeCustomizer()\">\n    <i class=\"ft-x font-medium-3\"></i>\n  </a>\n  <a class=\"customizer-toggle bg-danger\" id=\"customizer-toggle-icon\" (click)=\"toggleCustomizer()\">\n    <i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\n  </a>\n  <div [perfectScrollbar] class=\"customizer-content p-3 ps-container ps-theme-dark text-left\" data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\n    <h4 class=\"text-uppercase mb-0 text-bold-400\">Theme Customizer</h4>\n    <p>Customize &amp; Preview in Real Time</p>\n    <hr>\n\n    <!-- Layout Options-->\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Layout Options</h6>\n    <div class=\"layout-switch ml-4\">\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline light-layout\">\n        <input class=\"custom-control-input\" id=\"ll-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Light'\"  (click)=\"onLightLayout()\" />\n        <label class=\"custom-control-label\" for=\"ll-switch\">Light</label>\n      </div>\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline dark-layout\">\n        <input class=\"custom-control-input\" id=\"dl-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Dark'\" (click)=\"onDarkLayout()\" />\n        <label class=\"custom-control-label\" for=\"dl-switch\">Dark</label>\n      </div>\n      <div class=\"custom-control custom-radio d-inline-block custom-control-inline transparent-layout\">\n        <input class=\"custom-control-input\" id=\"tl-switch\" type=\"radio\" name=\"layout-switch\" [checked]=\"config.layout.variant === 'Transparent'\" (click)=\"onTransparentLayout()\" />\n        <label class=\"custom-control-label\" for=\"tl-switch\">Transparent</label>\n      </div>\n    </div>\n    <hr />\n\n    <!-- Sidebar Options Starts-->\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-options\">Sidebar Color Options</h6>\n    <div class=\"cz-bg-color sb-color-options\">\n      <div class=\"row p-1\">\n        <div class=\"col\"><span class=\"gradient-pomegranate d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"pomegranate\" [ngClass]=\"{'selected': selectedBgColor === 'pomegranate'}\" (click)=\"changeSidebarBgColor('pomegranate')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-king-yna d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"king-yna\" [ngClass]=\"{'selected': selectedBgColor === 'king-yna'}\" (click)=\"changeSidebarBgColor('king-yna')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-ibiza-sunset d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"ibiza-sunset\" [ngClass]=\"{'selected': selectedBgColor === 'ibiza-sunset'}\" (click)=\"changeSidebarBgColor('ibiza-sunset')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-flickr d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"flickr\" [ngClass]=\"{'selected': selectedBgColor === 'flickr'}\" (click)=\"changeSidebarBgColor('flickr')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-purple-bliss d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"purple-bliss\" [ngClass]=\"{'selected': selectedBgColor === 'purple-bliss'}\" (click)=\"changeSidebarBgColor('purple-bliss')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-man-of-steel d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"man-of-steel\" [ngClass]=\"{'selected': selectedBgColor === 'man-of-steel'}\" (click)=\"changeSidebarBgColor('man-of-steel')\"></span></div>\n        <div class=\"col\"><span class=\"gradient-purple-love d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"purple-love\" [ngClass]=\"{'selected': selectedBgColor === 'purple-love'}\" (click)=\"changeSidebarBgColor('purple-love')\"></span></div>\n      </div>\n      <div class=\"row p-1\">\n        <div class=\"col\"><span class=\"bg-black d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"black\" [ngClass]=\"{'selected': selectedBgColor === 'black'}\" (click)=\"changeSidebarBgColor('black')\"></span></div>\n        <div class=\"col\"><span class=\"bg-grey d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"white\" [ngClass]=\"{'selected': selectedBgColor === 'white'}\" (click)=\"changeSidebarBgColor('white')\"></span></div>\n        <div class=\"col\"><span class=\"bg-primary d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"primary\" [ngClass]=\"{'selected': selectedBgColor === 'primary'}\" (click)=\"changeSidebarBgColor('primary')\"></span></div>\n        <div class=\"col\"><span class=\"bg-success d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"success\" [ngClass]=\"{'selected': selectedBgColor === 'success'}\" (click)=\"changeSidebarBgColor('success')\"></span></div>\n        <div class=\"col\"><span class=\"bg-warning d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"warning\" [ngClass]=\"{'selected': selectedBgColor === 'warning'}\" (click)=\"changeSidebarBgColor('warning')\"></span></div>\n        <div class=\"col\"><span class=\"bg-info d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"info\" [ngClass]=\"{'selected': selectedBgColor === 'info'}\" (click)=\"changeSidebarBgColor('info')\"></span></div>\n        <div class=\"col\"><span class=\"bg-danger d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"danger\" [ngClass]=\"{'selected': selectedBgColor === 'danger'}\" (click)=\"changeSidebarBgColor('danger')\"></span></div>\n      </div>\n    </div>\n    <!-- Sidebar Options Ends-->\n    <!-- Transparent Layout Bg color Options-->\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase tl-color-options d-none\">Background Colors</h6>\n    <div class=\"cz-tl-bg-color d-none\">\n      <div class=\"row p-1\">\n        <div class=\"col\"><span class=\"bg-hibiscus d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"bg-hibiscus\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-hibiscus'}\" (click)=\"changeSidebarTLBgColor('bg-hibiscus')\"></span></div>\n        <div class=\"col\"><span class=\"bg-purple-pizzazz d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"bg-purple-pizzazz\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-purple-pizzazz'}\" (click)=\"changeSidebarTLBgColor('bg-purple-pizzazz')\"></span></div>\n        <div class=\"col\"><span class=\"bg-blue-lagoon d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"bg-blue-lagoon\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-blue-lagoon'}\" (click)=\"changeSidebarTLBgColor('bg-blue-lagoon')\"></span></div>\n        <div class=\"col\"><span class=\"bg-electric-violet d-block rounded-circle\" style=\"width:20px; height:20px;\"\n            data-bg-color=\"bg-electric-violet\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-electric-violet'}\" (click)=\"changeSidebarTLBgColor('bg-electric-violet')\"></span></div>\n        <div class=\"col\"><span class=\"bg-portage d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"bg-portage\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-portage'}\" (click)=\"changeSidebarTLBgColor('bg-portage')\"></span></div>\n        <div class=\"col\"><span class=\"bg-tundora d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"bg-tundora\" [ngClass]=\"{'selected': selectedTLBgColor === 'bg-tundora'}\" (click)=\"changeSidebarTLBgColor('bg-tundora')\"></span></div>\n      </div>\n    </div>\n    <!-- Transparent Layout Bg color Ends-->\n    <hr />\n    <!--Sidebar BG Image Starts-->\n    <h6 class=\"text-center text-bold-500 mb-3 text-uppercase sb-bg-img\">Sidebar Bg Image</h6>\n    <div class=\"cz-bg-image row sb-bg-img\">\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/01.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/01.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/01.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/02.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/02.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/02.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/03.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/03.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/03.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/04.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/04.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/04.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/05.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/05.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/05.jpg')\" /></div>\n      <div class=\"col-sm-2 mb-3\"><img class=\"rounded\" src=\"assets/img/sidebar-bg/06.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedBgImage === 'assets/img/sidebar-bg/06.jpg'}\" (click)=\"changeSidebarBgImage('assets/img/sidebar-bg/06.jpg')\" /></div>\n    </div>\n    <!-- Transparent BG Image Ends-->\n    <div class=\"tl-bg-img d-none\">\n      <h6 class=\"text-center text-bold-500 text-uppercase\">Background Images</h6>\n      <div class=\"cz-tl-bg-image row\">\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-1\" src=\"assets/img/gallery/bg-glass-1.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-1.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-1.jpg', 'bg-glass-1')\" /></div>\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-2\" src=\"assets/img/gallery/bg-glass-2.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-2.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-2.jpg', 'bg-glass-2')\" /></div>\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-3\" src=\"assets/img/gallery/bg-glass-3.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-3.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-3.jpg', 'bg-glass-3')\" /></div>\n        <div class=\"col-sm-3\"><img class=\"rounded bg-glass-4\" src=\"assets/img/gallery/bg-glass-4.jpg\" width=\"90\"  [ngClass]=\"{'selected': selectedTLBgImage === 'assets/img/gallery/bg-glass-4.jpg'}\" (click)=\"changeSidebarTLBgImage('assets/img/gallery/bg-glass-4.jpg', 'bg-glass-4')\" /></div>\n      </div>\n    </div>\n\n    <hr />\n    <!-- Transparent BG Image Ends-->\n    <!--Sidebar BG Image Ends-->\n\n    <!--Sidebar BG Image Toggle Starts-->\n    <div class=\"togglebutton toggle-sb-bg-img\">\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\n        <span>Sidebar Bg Image</span>\n        <div class=\"float-right\">\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"checkbox\" class=\"custom-control-input cz-bg-image-display\" checked id=\"sidebar-bg-img\" (change)=\"bgImageDisplay($event)\">\n            <label class=\"custom-control-label d-block\" for=\"sidebar-bg-img\"></label>\n          </div>\n        </div>\n      </div>\n      <hr>\n    </div>\n    <!--Sidebar BG Image Toggle Ends-->\n\n    <!--Compact Menu Starts-->\n    <div class=\"togglebutton\">\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\n        <span>Compact Menu</span>\n        <div class=\"float-right\">\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"checkbox\" [checked]=\"config.layout.sidebar.collapsed\" class=\"custom-control-input cz-compact-menu\" id=\"cz-compact-menu\" (change)=\"toggleCompactMenu($event)\">\n            <label class=\"custom-control-label d-block\" for=\"cz-compact-menu\"></label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--Compact Menu Ends-->\n    <hr>\n\n    <!--RTL Starts-->\n    <div class=\"togglebutton\">\n      <div class=\"switch switch border-0 d-flex justify-content-between w-100\">\n        <span>RTL</span>\n        <div class=\"float-right\">\n          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n            <input type=\"checkbox\" [checked]=\"options.direction == 'rtl' ? 'checked' : false\" class=\"custom-control-input cz-rtl\"\n              id=\"cz-rtl\" (change)=\"options.direction = (options.direction == 'rtl' ? 'ltr' : 'rtl'); sendOptions()\">\n            <label class=\"custom-control-label d-block\" for=\"cz-rtl\"></label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--RTL Ends-->\n    <hr>\n\n    <!--Sidebar Width Starts-->\n    <div>\n      <label for=\"cz-sidebar-width\">Sidebar Width</label>\n      <select id=\"cz-sidebar-width\" #width class=\"custom-select cz-sidebar-width float-right\" (change)=\"changeSidebarWidth(width.value)\">\n        <option value=\"sidebar-sm\" [selected] = \"size === 'sidebar-sm'\">Small</option>\n        <option value=\"sidebar-md\" [selected] = \"size === 'sidebar-md'\">Medium</option>\n        <option value=\"sidebar-lg\" [selected] = \"size === 'sidebar-lg'\">Large</option>\n      </select>\n    </div>\n    <!--Sidebar Width Ends-->\n  </div>\n</div>\n<!--Theme customizer Ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\n<footer>\n    <div class=\"container-fluid\">\n        <p class=\"copyright text-center\">\n                Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\">PIXINVENT</a>, All rights reserved.          \n        </p>\n        \n    </div>\n</footer>\n<!--Footer Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Statistics cards Starts-->\n<div class=\"header\">\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-12\">\n\t\t<div  class=\"header-title\">\n\t\t\t<h2>What's going on?</h2>\n\t\n\t\t</div>\n</div>\n\t\n</div>\n<div class=\"row\" style=\"justify-content: flex-start;\">\n\t\n\t<div class=\"col-xl-2 col-lg-6 col-md-6 col-12\">\n\t  <div class=\"card\" routerLink=\"/homeservices\">\n\t\t<div class=\"card-content\">\n\t\t  <div class=\"card-body pt-2 pb-0\">\n\t\t\t<div class=\"media\">\n\t\t\t  <div class=\"media-body white text-left\">\n\t\t\t\t<h4 class=\"title mb-0\">Requested Services</h4>\n\t\t\t  </div>\n\t\t\t \n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"card-body pt-4 pb-0\">\n\t\t\t<div class=\"media\">\n\t\t\t \n\t\t\t  <div class=\"media-right white text-left\">\n\t\t\t\t<i class=\"icon-wallet font-large-1\"></i>\n\t\t\t  </div>\n\t\t\t  <div class=\"media-body white text-right\">\n\t\t\t\t<h3 class=\"font-large-1 mb-0\">4</h3>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t</div>\n\t<div class=\"col-xl-2 col-lg-6 col-md-6 col-12\">\n\t  <div class=\"card\" routerLink=\"/homeservices\">\n\t\t<div class=\"card-content\">\n\t\t  <div class=\"card-body pt-2 pb-0\">\n\t\t\t<div class=\"media\">\n\t\t\t  <div class=\"media-body white text-left\">\n\t\t\t\t<h3 class=\"title mb-0\">Approved Services</h3>\n\t\t\t\t<!-- <span>Total Tax</span> -->\n\t\t\t  </div>\n\t\t\t \n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"card-body pt-4 pb-0\">\n\t\t\t<div class=\"media\">\n\t\t\t \n\t\t\t  <div class=\"media-right white text-left\">\n\t\t\t\t<!-- <i class=\"icon-wallet font-large-1\"></i> -->\n\t\t\t\t<img src=\"../../../assets/img/new/smile (1).svg\"/>\n\t\t\t\t<!-- <i class=\"fa-thin fa-face-smile\"></i> -->\n\t\t\t  </div>\n\t\t\t  <div class=\"media-body white text-right\">\n\t\t\t\t<h3 class=\"font-large-1 mb-0\">1</h3>\n\t\t\t\t<!-- <span>Total Earning</span> -->\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t</div>\n  \n\t<div class=\"col-xl-2 col-lg-6 col-md-6 col-12\">\n\t  <div class=\"card\" routerLink=\"/homeservices\">\n\t\t<div class=\"card-content\">\n\t\t  <div class=\"card-body pt-2 pb-0\">\n\t\t\t<div class=\"media\">\n\t\t\t  <div class=\"media-body white text-left\">\n\t\t\t\t<h3 class=\"title mb-0\">Rejected Services</h3>\n\t\t\t\t<!-- <span>Total Sales</span> -->\n\t\t\t  </div>\n\t\t\t  \n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"card-body pt-4 pb-0\">\n\t\t\t<div class=\"media\">\n\t\t\t \n\t\t\t  <div class=\"media-right white text-left\">\n\t\t\t\t<img src=\"../../../assets/img/new/frown (1).svg\"/>\n\n\t\t\t\t<!-- <i class=\"icon-wallet font-large-1\"></i> -->\n\t\t\t  </div>\n\t\t\t  <div class=\"media-body white text-right\">\n\t\t\t\t<h3 class=\"font-large-1 mb-0\">2</h3>\n\t\t\t\t<!-- <span>Total Earning</span> -->\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t</div>\n\t<div class=\"col-xl-2 col-lg-6 col-md-6 col-12\">\n\t  <div class=\"card\" routerLink=\"/homeservices\">\n\t\t<div class=\"card-content\">\n\t\t  <div class=\"card-body pt-2 pb-0\">\n\t\t\t<div class=\"media\">\n\t\t\t  <div class=\"media-body white text-left\">\n\t\t\t\t<h3 class=\"title mb-0\">In Process Services</h3>\n\t\t\t\t<!-- <span>Total Earning</span> -->\n\t\t\t  </div>\n\t\t\t  \n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"card-body pt-4 pb-0\">\n\t\t\t<div class=\"media\">\n\t\t\t \n\t\t\t  <div class=\"media-right white text-left\">\n\t\t\t\t<img src=\"../../../assets/img/new/clock.png\" width=\"24\" height=\"30\"/>\n\t\t\t  </div>\n\t\t\t  <div class=\"media-body white text-right\">\n\t\t\t\t<h3 class=\"font-large-1 mb-0\">1</h3>\n\t\t\t\t<!-- <span>Total Earning</span> -->\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t</div>\n\n\t<div class=\"col-xl-2 col-lg-6 col-md-6 col-12\">\n\t\t<div class=\"card\" routerLink=\"/homeservices\">\n\t\t  <div class=\"card-content\">\n\t\t\t<div class=\"card-body pt-2 pb-0\">\n\t\t\t  <div class=\"media\">\n\t\t\t\t<div class=\"media-body white text-left\">\n\t\t\t\t  <h3 class=\"title mb-0\">Notifications</h3>\n\t\t\t\t  <!-- <span>Total Earning</span> -->\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t  </div>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pt-4 pb-0\">\n\t\t\t\t<div class=\"media\">\n\t\t\t\t \n\t\t\t\t  <div class=\"media-right white text-left\">\n\t\t\t\t\t<!-- <i class=\"ft-bell font-large-1\"></i> -->\n          <img src=\"../../../assets/img/new/notification.png\" width=\"24\" height=\"30\"/>\n\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"media-body white text-right\">\n\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">34</h3>\n\t\t\t\t\t<!-- <span>Total Earning</span> -->\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\n\t\t  </div>\n\t\t</div>\n\t  </div>\n  </div>\n</div>\n\n<!--Statistics cards Ends-->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\" (click)=\"toggleSidebar()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\n                    <i class=\"ft-more-vertical\"></i>\n                </a>\n            </span>\n            <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\n                <div class=\"position-relative has-icon-right\">\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\n                    <div class=\"form-control-position\">\n                        <i class=\"ft-search\"></i>\n                    </div>\n                </div>\n            </form>\n           \n        </div>\n        <div class=\"navbar-container\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item mr-2  d-none d-lg-block\">\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">fullscreen</p>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownLang\" ngbDropdownToggle>\n                            <i class=\"ft-flag font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">Language</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLang\" class=\"dropdownLang text-left\">                           \n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('en')\">\n                                <img src=\"./assets/img/flags/us.png\" alt=\"English\" class=\"langimg\">\n                                <span>English</span>\n                            </a>\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('es')\">\n                                <img src=\"./assets/img/flags/es.png\" alt=\"Spanish\" class=\"langimg\">\n                                <span>Spanish</span>\n                            </a> \n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('pt')\">\n                                <img src=\"./assets/img/flags/br.png\" alt=\"Portuguese\" class=\"langimg\">\n                                <span>Portuguese</span>\n                            </a> \n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('de')\">\n                                <img src=\"./assets/img/flags/de.png\" alt=\"German\" class=\"langimg\">\n                                <span>German</span>\n                            </a>                            \n                        </div>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\n                            <i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i>\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\n                            <p class=\"d-none\">Notifications</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\n                            <div class=\"noti-list\" [perfectScrollbar]>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell info float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell warning float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                    <i class=\"ft-bell danger float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\n                                    </span>\n                                </a>\n                                <a class=\"dropdown-item noti-container py-3\">\n                                    <i class=\"ft-bell success float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                    <span class=\"noti-wrapper\">\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 success\">New User Registered</span>\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\n                                    </span>\n                                </a>\n                            </div>\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\n                        </div>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">User Settings</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">                           \n                            <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\n                                <i class=\"ft-edit mr-2\"></i>\n                                <span>My Profile</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" routerLink=\"/inbox\">\n                                <i class=\"ft-mail mr-2\"></i>\n                                <span>My Inbox</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-settings mr-2\"></i>\n                                <span>Settings</span>\n                            </a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"javascript:;\">\n                                <i class=\"ft-power mr-2\"></i>\n                                <span>Logout</span>\n                            </a>\n                        </div>\n                    </li>\n                    <li class=\"nav-item d-none d-lg-block\">\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\" (click)=\"toggleNotificationSidebar();\">\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">Notifications Sidebar</p>\n                        </a>\n                    </li>\n                   \n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\n<!-- START Notification Sidebar -->\n<aside #sidebar id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\n  <a class=\"notification-sidebar-close\" (click)=\"onClose()\">\n    <i class=\"ft-x font-medium-3\"></i>\n  </a>\n  <div class=\"side-nav notification-sidebar-content\" [perfectScrollbar]>\n    <div class=\"row\">\n      <div class=\"col-12 mt-1\">\n        <ngb-tabset>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"activity\" class=\"col-12 timeline-left\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT ACTIVITY</h6>\n                <div id=\"timeline\" class=\"timeline-left timeline-wrapper\">\n                  <ul class=\"timeline\">\n                    <li class=\"timeline-line\"></li>\n                    <li class=\"timeline-item text-left text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-purple bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-shopping-cart\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new\n                          equipments for zonal office.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-info bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA\n                          will be on 15th August 2015.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-success bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a\n                          voice mail for next conference.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-warning bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store\n                          at S.G Road.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.\n                        </p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-cyan bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a\n                          voice mail for next conference.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-amber bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store\n                          at S.G Road.</p>\n                      </div>\n                    </li>\n                    <li class=\"timeline-item text-left\">\n                      <div class=\"timeline-badge\">\n                        <span class=\"bg-grey bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\"\n                          title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\n                      </div>\n                      <div class=\"col s9 recent-activity-list-text\">\n                        <a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.\n                        </p>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"chatapp\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT CHAT</h6>\n                <div class=\"collection border-none\">\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-12.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Thank you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-6.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-11.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-18.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-1.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Love you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-2.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Can we </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-3.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Great! </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-15.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Do it </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-19.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Got that </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-14.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Like you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-13.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Thank you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-22.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Okay you </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-9.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Can do </p>\n                    </div>\n                  </div>\n                  <div class=\"media mb-1\">\n                    <a>\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\"\n                        src=\"assets/img/portrait/small/avatar-s-20.png\">\n                    </a>\n                    <div class=\"media-body text-left\">\n                      <div class=\"clearfix\">\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\n                      </div>\n                      <p class=\"text-muted font-small-3\">Leave it </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\n            <ng-template ngbTabContent>\n              <div id=\"settings\" class=\"col-12\">\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">GENERAL SETTINGS</h6>\n                <ul class=\"list-unstyled\">\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input checked=\"checked\" class=\"custom-control-input \" type=\"checkbox\"\n                              id=\"notifications1\">\n                            <label class=\"custom-control-label d-block\" for=\"notifications1\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input checked=\"checked\" class=\"custom-control-input \" type=\"checkbox\"\n                              id=\"recent-activity1\">\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity1\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch  d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Notifications</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"notifications2\">\n                            <label class=\"custom-control-label d-block\" for=\"notifications2\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show recent activity</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input \" type=\"checkbox\"\n                              id=\"recent-activity2\">\n                            <label class=\"custom-control-label d-block\" for=\"recent-activity2\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show your emails</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"show-emails\">\n                            <label class=\"custom-control-label d-block\" for=\"show-emails\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>Use checkboxes when looking for yes or no answers.</p>\n                  </li>\n                  <li class=\"text-left\">\n                    <div class=\"togglebutton\">\n                      <div class=\"switch d-flex justify-content-between w-100\">\n                        <span class=\"text-bold-500\">Show Task statistics</span>\n                        <div class=\"notification-cb\">\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                            <input class=\"custom-control-input \" type=\"checkbox\" id=\"show-stats\">\n                            <label class=\"custom-control-label d-block\" for=\"show-stats\"></label>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n                  </li>\n                </ul>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n  </div>\n</aside>\n<!-- END Notification Sidebar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"sidebar-header\">\r\n    <div class=\"logo clearfix\">\r\n        <a class=\"settings\" href=\"javascript:;\" hidden>\r\n            <i class=\"ft-settings mr-2 sidebar_icons\"></i>\r\n        </a>\r\n        <a href=\"https://wahidsami.github.io/Filmcommission/\" target=\"_blank\" class=\"logo-text text align-middle\" style=\"width: 100%; text-align: center;\">\r\n            <div class=\"logo-img\">\r\n                <img [src]=\"logoUrl\" />\r\n            </div>\r\n        </a>\r\n\r\n        <a class=\"settings\" href=\"javascript:;\" hidden>\r\n            <i class=\"ft-align-justify mr-2 sidebar_icons\"></i>\r\n        </a>\r\n\r\n        <a hidden class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\" hidden>\r\n            <i #toggleIcon appSidebarToggle class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\" hidden></i>\r\n        </a>\r\n        <a hidden class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\" hidden>\r\n            <i class=\"ft-x\" hidden></i>\r\n        </a>\r\n    \r\n      \r\n    </div>\r\n\r\n    <div class=\"welcome clearfix\">\r\n      <h2 class=\"text align-middle\" style=\"text-transform: capitalize;\">welcome</h2>\r\n        <a [routerLink]=\"['/']\" class=\"logo-text text align-middle\">\r\n            <div class=\"logo-img\">\r\n                <img [src]=\"welcomeUrl\" />\r\n            </div>\r\n        </a>\r\n\r\n       \r\n    \r\n      \r\n    </div>\r\n</div>\r\n<!-- Sidebar Header Ends -->\r\n\r\n<!-- Sidebar Content starts -->\r\n<div class=\"sidebar-content\"  [perfectScrollbar]>\r\n    <div class=\"nav-container\">\r\n        <ul class=\"navigation\" appSidebarList>\r\n            <!-- First level menu -->\r\n             <li appSidebarlink level=\"{{depth + 1}}\" (toggleEmit)=\"handleToggle($event)\" (click)=\"toggleSlideInOut()\" [routePath]=\"menuItem.path\" [classes]=\"menuItem.class\" [title]=\"menuItem.title\"  [parent]=\"\" *ngFor=\"let menuItem of menuItems\"   [ngClass]=\"{'has-sub': menuItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuItem.title)}\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a [id]=\"menuItem.title=='Services' ? 'serviceList' : ''\"appSidebarAnchorToggle [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\r\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                    <!-- <img [src]=\"[menuItem.icon]\"/> -->\r\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                </a>\r\n                <ng-template #externalLinkBlock>\r\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <!-- <img [src]=\"[menuItem.icon]\"/> -->\r\n\r\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                </ng-template>\r\n                <!-- Second level menu -->\r\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuItem.title) ? true : false\">\r\n                    <li appSidebarlink level=\"{{depth + 2}}\" (toggleEmit)=\"handleToggle($event)\" [routePath]=\"menuSubItem.path\" [classes]=\"menuSubItem.class\" [title]=\"menuSubItem.title\" [parent]=\"menuItem.title\" *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"{'has-sub': menuSubItem.class === 'has-sub' ? true: false, 'open': activeTitles.includes(menuSubItem.title) && !nav_collapsed_open ? true : false, 'nav-collapsed-open': nav_collapsed_open && activeTitles.includes(menuSubItem.title)}\">\r\n                        <a appSidebarAnchorToggle [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\r\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                        </a>\r\n                        <ng-template #externalSubLinkBlock>\r\n                            <a [href]=\"[menuSubItem.path]\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}test</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                        </ng-template>\r\n                        <!-- Third level menu -->\r\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\" [@slideInOut]=\"activeTitles.includes(menuSubItem.title) ? true : false\">\r\n                            <li appSidebarlink level=\"{{depth + 3}}\" [routePath]=\"menuSubsubItem.path\" [classes]=\"menuSubsubItem.class\" [title]=\"menuSubsubItem.title\" [parent]=\"menuSubItem.title\" *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n                                [ngClass]=\"[menuSubsubItem.class]\">\r\n                                <a appSidebarAnchorToggle [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                </a>\r\n                                <ng-template #externalSubSubLinkBlock>\r\n                                    <a [href]=\"[menuSubsubItem.path]\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Content Ends -->\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");








var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard/home',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_5__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_6__["CONTENT_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");



















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_15__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_14__["ContentLayoutComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({}),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: "YOUR KEY"
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"]
            ],
            providers: [
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(configService, document, renderer) {
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.config = {};
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    ContentLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, 'layout-dark');
                _this.renderer.addClass(_this.document.body, 'layout-transparent');
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, 'bg-glass-1');
                }
            }
        }, 0);
    };
    ContentLayoutComponent.ctorParameters = function () { return [
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content-wrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContentLayoutComponent.prototype, "wrapper", void 0);
    ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");





var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef, layoutService, configService, document, renderer) {
        var _this = this;
        this.elementRef = elementRef;
        this.layoutService = layoutService;
        this.configService = configService;
        this.document = document;
        this.renderer = renderer;
        this.options = {
            direction: "ltr",
            bgColor: "black",
            bgImage: ""
        };
        this.iscollapsed = false;
        this.isSidebar_sm = false;
        this.isSidebar_lg = false;
        this.bgColor = "black";
        this.bgImage = "";
        this.config = {};
        //event emitter call from customizer
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    _this.bgColor = options.bgColor;
                }
                if (options.bgImage) {
                    _this.bgImage = options.bgImage;
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", 'background-image: url("' + _this.bgImage + '")');
                }
                if (options.bgImageDisplay === true) {
                    _this.bgImage = options.bgImage;
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", 'display: block; background-image: url("' + _this.bgImage + '")');
                }
                else if (options.bgImageDisplay === false) {
                    _this.bgImage = "";
                    // this.renderer.setAttribute(this.sidebarBgImage.nativeElement, 'style', 'display: none');
                    _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", "background-image: none");
                }
                if (options.compactMenu === true) {
                    _this.renderer.addClass(_this.wrapper.nativeElement, "nav-collapsed");
                    _this.renderer.addClass(_this.wrapper.nativeElement, "menu-collapsed");
                }
                else if (options.compactMenu === false) {
                    if (_this.wrapper.nativeElement.classList.contains("nav-collapsed")) {
                        _this.renderer.removeClass(_this.wrapper.nativeElement, "nav-collapsed");
                        _this.renderer.removeClass(_this.wrapper.nativeElement, "menu-collapsed");
                    }
                }
                if (options.sidebarSize === "sidebar-lg") {
                    _this.isSidebar_sm = false;
                    _this.isSidebar_lg = true;
                }
                else if (options.sidebarSize === "sidebar-sm") {
                    _this.isSidebar_sm = true;
                    _this.isSidebar_lg = false;
                }
                else {
                    _this.isSidebar_sm = false;
                    _this.isSidebar_lg = false;
                }
                if (options.layout === "Light") {
                    _this.renderer.removeClass(_this.document.body, "layout-dark");
                    _this.renderer.removeClass(_this.document.body, "layout-transparent");
                    _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                    _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                    _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                    _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                    _this.renderer.removeClass(_this.document.body, "bg-portage");
                    _this.renderer.removeClass(_this.document.body, "bg-tundora");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                }
                else if (options.layout === "Dark") {
                    if (_this.document.body.classList.contains("layout-transparent")) {
                        _this.renderer.removeClass(_this.document.body, "layout-transparent");
                        _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                        _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                        _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                        _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                        _this.renderer.removeClass(_this.document.body, "bg-portage");
                        _this.renderer.removeClass(_this.document.body, "bg-tundora");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                        _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                        _this.renderer.addClass(_this.document.body, "layout-dark");
                    }
                    else {
                        _this.renderer.addClass(_this.document.body, "layout-dark");
                    }
                }
                else if (options.layout === "Transparent") {
                    _this.renderer.addClass(_this.document.body, "layout-transparent");
                    _this.renderer.addClass(_this.document.body, "layout-dark");
                    _this.renderer.addClass(_this.document.body, "bg-glass-1");
                }
                if (options.transparentColor) {
                    _this.renderer.removeClass(_this.document.body, "bg-hibiscus");
                    _this.renderer.removeClass(_this.document.body, "bg-purple-pizzazz");
                    _this.renderer.removeClass(_this.document.body, "bg-blue-lagoon");
                    _this.renderer.removeClass(_this.document.body, "bg-electric-violet");
                    _this.renderer.removeClass(_this.document.body, "bg-portage");
                    _this.renderer.removeClass(_this.document.body, "bg-tundora");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-1");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-2");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-3");
                    _this.renderer.removeClass(_this.document.body, "bg-glass-4");
                    _this.renderer.addClass(_this.document.body, options.transparentColor);
                }
            }
        });
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.templateConf;
        this.bgColor = this.config.layout.sidebar.backgroundColor;
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = "";
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        if (this.config.layout.variant === "Transparent") {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
                this.bgColor = "bg-glass-1";
            }
        }
        else {
            if (this.config.layout.sidebar.backgroundColor.toString().trim() === "") {
                this.bgColor = "black";
            }
        }
        setTimeout(function () {
            if (_this.config.layout.sidebar.size === "sidebar-lg") {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = true;
            }
            else if (_this.config.layout.sidebar.size === "sidebar-sm") {
                _this.isSidebar_sm = true;
                _this.isSidebar_lg = false;
            }
            else {
                _this.isSidebar_sm = false;
                _this.isSidebar_lg = false;
            }
            _this.iscollapsed = _this.config.layout.sidebar.collapsed;
        }, 0);
        //emit event to customizer
        this.options.bgColor = this.bgColor;
        this.options.bgImage = this.bgImage;
        this.layoutService.emitCustomizerChange(this.options);
        // customizer events
        this.elementRef.nativeElement
            .querySelector("#cz-compact-menu")
            .addEventListener("click", this.onClick.bind(this));
        this.elementRef.nativeElement
            .querySelector("#cz-sidebar-width")
            .addEventListener("click", this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant === "Dark") {
                _this.renderer.addClass(_this.document.body, "layout-dark");
            }
            else if (_this.config.layout.variant === "Transparent") {
                _this.renderer.addClass(_this.document.body, "layout-dark");
                _this.renderer.addClass(_this.document.body, "layout-transparent");
                if (_this.config.layout.sidebar.backgroundColor) {
                    _this.renderer.addClass(_this.document.body, _this.config.layout.sidebar.backgroundColor);
                }
                else {
                    _this.renderer.addClass(_this.document.body, "bg-glass-1");
                }
                _this.bgColor = "black";
                _this.options.bgColor = "black";
                _this.bgImage = "";
                _this.options.bgImage = "";
                _this.bgImage = "";
                _this.renderer.setAttribute(_this.sidebarBgImage.nativeElement, "style", "background-image: none");
            }
        }, 0);
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () {
            fireRefreshEventOnWindow();
        }, 300);
    };
    FullLayoutComponent.prototype.toggleHideSidebar = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.hideSidebar = $event;
        }, 0);
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] },
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidebarBgImage", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "sidebarBgImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("appSidebar", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "appSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("wrapper", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FullLayoutComponent.prototype, "wrapper", void 0);
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-full-layout",
            template: __webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
            app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n.customizer.open {\n  right: 0;\n}\n.customizer .customizer-content {\n  position: relative;\n  height: 100%;\n}\n.customizer a.customizer-toggle {\n  background: #FFF;\n  color: theme-color(\"primary\");\n  display: block;\n  box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1);\n}\n.customizer a.customizer-close {\n  color: #000;\n}\n.customizer .customizer-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  padding: 7px;\n  width: auto;\n  z-index: 10;\n}\n.customizer #rtl-icon {\n  position: absolute;\n  right: -1px;\n  top: 35%;\n  width: 54px;\n  height: 50px;\n  text-align: center;\n  cursor: pointer;\n  line-height: 50px;\n  margin-top: 50px;\n}\n.customizer .customizer-toggle {\n  position: absolute;\n  top: 35%;\n  width: 54px;\n  height: 50px;\n  left: -54px;\n  text-align: center;\n  line-height: 50px;\n  cursor: pointer;\n}\n.customizer .color-options a {\n  white-space: pre;\n}\n.customizer .cz-bg-color {\n  margin: 0 auto;\n}\n.customizer .cz-bg-color span:hover {\n  cursor: pointer;\n}\n.customizer .cz-bg-color span.white {\n  color: #ddd !important;\n}\n.customizer .cz-bg-color .selected,\n.customizer .cz-tl-bg-color .selected {\n  box-shadow: 0 0 10px 3px #009da0;\n  border: 3px solid #fff;\n}\n.customizer .cz-bg-image:hover {\n  cursor: pointer;\n}\n.customizer .cz-bg-image img.rounded {\n  border-radius: 1rem !important;\n  border: 2px solid #e6e6e6;\n  height: 100px;\n  width: 50px;\n}\n.customizer .cz-bg-image img.rounded.selected {\n  border: 2px solid #FF586B;\n}\n.customizer .tl-color-options {\n  display: none;\n}\n.customizer .cz-tl-bg-image img.rounded {\n  border-radius: 1rem !important;\n  border: 2px solid #e6e6e6;\n  height: 100px;\n  width: 70px;\n}\n.customizer .cz-tl-bg-image img.rounded.selected {\n  border: 2px solid #FF586B;\n}\n.customizer .cz-tl-bg-image img.rounded:hover {\n  cursor: pointer;\n}\n.customizer .bg-hibiscus {\n  background-image: linear-gradient(to right bottom, #f05f57, #c83d5c, #99245a, #671351, #360940);\n  background-size: cover;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: background 0.3s;\n}\n.customizer .bg-purple-pizzazz {\n  background-image: linear-gradient(to right bottom, #662d86, #8b2a8a, #ae2389, #cf1d83, #ed1e79);\n  background-size: cover;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: background 0.3s;\n}\n.customizer .bg-blue-lagoon {\n  background-image: linear-gradient(to right bottom, #144e68, #006d83, #008d92, #00ad91, #57ca85);\n  background-size: cover;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: background 0.3s;\n}\n.customizer .bg-electric-violet {\n  background-image: linear-gradient(to left top, #4a00e0, #600de0, #7119e1, #8023e1, #8e2de2);\n  background-size: cover;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: background 0.3s;\n}\n.customizer .bg-portage {\n  background-image: linear-gradient(to left top, #97abff, #798ce5, #5b6ecb, #3b51b1, #123597);\n  background-size: cover;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: background 0.3s;\n}\n.customizer .bg-tundora {\n  background-image: linear-gradient(to left top, #474747, #4a4a4a, #4c4d4d, #4f5050, #525352);\n  background-size: cover;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: background 0.3s;\n}\n.customizer .cz-bg-color .col span.rounded-circle:hover,\n.customizer .cz-tl-bg-color .col span.rounded-circle:hover {\n  cursor: pointer;\n}\n[dir=rtl] :host ::ng-deep .customizer {\n  left: -400px;\n  right: auto;\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 0px;\n}\n[dir=rtl] :host ::ng-deep .customizer.open {\n  left: 0;\n  right: auto;\n}\n[dir=rtl] :host ::ng-deep .customizer .customizer-close {\n  left: 10px;\n  right: auto;\n}\n[dir=rtl] :host ::ng-deep .customizer .customizer-toggle {\n  right: -54px;\n  left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvRDpcXHJlaGFiXFxmcmVlXFxGYy9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21pemVyXFxjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY3VzdG9taXplci9jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDBEQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0Esc0NBQUE7QUNQRjtBRFNFO0VBQ0UsUUFBQTtBQ1BKO0FEVUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNSSjtBRFdFO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBQ1RKO0FEWUU7RUFDRSxXQUFBO0FDVko7QURhRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNYSjtBRGNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2JKO0FEaUJJO0VBQ0UsZ0JBQUE7QUNmTjtBRG1CRTtFQUNFLGNBQUE7QUNqQko7QURvQk07RUFDRSxlQUFBO0FDbEJSO0FEcUJNO0VBQ0Usc0JBQUE7QUNuQlI7QUQwQkk7O0VBQ0UsZ0NBQUE7RUFDQSxzQkFBQTtBQ3ZCTjtBRDRCSTtFQUNFLGVBQUE7QUMxQk47QUQ2Qkk7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUMzQk47QUQ2Qk07RUFDRSx5QkFBQTtBQzNCUjtBRGdDRTtFQUNFLGFBQUE7QUM5Qko7QURrQ0k7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNoQ047QURrQ007RUFDRSx5QkFBQTtBQ2hDUjtBRG1DTTtFQUNFLGVBQUE7QUNqQ1I7QURzQ0U7RUFDRSwrRkE3SVc7RUE4SVgsc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDcENKO0FEdUNFO0VBQ0UsK0ZBdEppQjtFQXVKakIsc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDckNKO0FEd0NFO0VBQ0UsK0ZBL0phO0VBZ0tiLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ3RDSjtBRHlDRTtFQUNFLDJGQXhLZ0I7RUF5S2hCLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ3ZDSjtBRDBDRTtFQUNFLDJGQWpMUTtFQWtMUixzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUN4Q0o7QUQ0Q0U7RUFDRSwyRkEzTFE7RUE0TFIsc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDMUNKO0FEaURROztFQUNFLGVBQUE7QUM5Q1Y7QUR3REU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUNyREo7QUR1REk7RUFDRSxPQUFBO0VBQ0EsV0FBQTtBQ3JETjtBRHdESTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDdEROO0FEMERJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUN4RE4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY3VzdG9taXplci9jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFyaWFibGVzIEZvciBUcmFuc3BhcmVudCBMYXlvdXRcbiRiZy1oaWJpc2N1cyA6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmMDVmNTcsICNjODNkNWMsICM5OTI0NWEsICM2NzEzNTEsICMzNjA5NDApO1xuJGJnLXB1cnBsZS1waXp6YXp6IDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzY2MmQ4NiwgIzhiMmE4YSwgI2FlMjM4OSwgI2NmMWQ4MywgI2VkMWU3OSk7XG4kYmctYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMxNDRlNjgsICMwMDZkODMsICMwMDhkOTIsICMwMGFkOTEsICM1N2NhODUpO1xuJGJnLWVsZWN0cmljLXZpb2xldDpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICM0YTAwZTAsICM2MDBkZTAsICM3MTE5ZTEsICM4MDIzZTEsICM4ZTJkZTIpO1xuJGJnLXBvcnRhZ2U6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjOTdhYmZmLCAjNzk4Y2U1LCAjNWI2ZWNiLCAjM2I1MWIxLCAjMTIzNTk3KTtcbiRiZy10dW5kb3JhOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzQ3NDc0NywgIzRhNGE0YSwgIzRjNGQ0ZCwgIzRmNTA1MCwgIzUyNTM1Mik7XG5cbi5jdXN0b21pemVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICByaWdodDogLTQwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB6LWluZGV4OiAxMDUxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgJi5vcGVuIHtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIC5jdXN0b21pemVyLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBhLmN1c3RvbWl6ZXItdG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGNvbG9yOiB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICBhLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG5cbiAgLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgI3J0bC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgdG9wOiAzNSU7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC5jdXN0b21pemVyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsZWZ0OiAtNTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNvbG9yLW9wdGlvbnMge1xuICAgIGEge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICB9XG4gIH1cblxuICAuY3otYmctY29sb3Ige1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgc3BhbiB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAmLndoaXRlIHtcbiAgICAgICAgY29sb3I6ICNkZGQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY3otYmctY29sb3IsXG4gIC5jei10bC1iZy1jb2xvciB7XG4gICAgLnNlbGVjdGVkIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCAjMDA5ZGEwO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICB9XG4gIH1cblxuICAuY3otYmctaW1hZ2Uge1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGltZy5yb3VuZGVkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG5cbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50bC1jb2xvci1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmN6LXRsLWJnLWltYWdlIHtcbiAgICBpbWcucm91bmRlZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuXG4gICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNTg2QjtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYmctaGliaXNjdXMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRiZy1oaWJpc2N1cztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gIH1cblxuICAuYmctcHVycGxlLXBpenphenoge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRiZy1wdXJwbGUtcGl6emF6ejtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gIH1cblxuICAuYmctYmx1ZS1sYWdvb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRiZy1ibHVlLWxhZ29vbjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gIH1cblxuICAuYmctZWxlY3RyaWMtdmlvbGV0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctZWxlY3RyaWMtdmlvbGV0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcbiAgfVxuXG4gIC5iZy1wb3J0YWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctcG9ydGFnZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gIH1cblxuXG4gIC5iZy10dW5kb3JhIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmctdHVuZG9yYTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XG4gIH1cblxuICAuY3otYmctY29sb3IsXG4gIC5jei10bC1iZy1jb2xvciB7XG4gICAgLmNvbCB7XG4gICAgICBzcGFuLnJvdW5kZWQtY2lyY2xlIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmN1c3RvbWl6ZXIge1xuICAgIGxlZnQ6IC00MDBweDtcbiAgICByaWdodDogYXV0bztcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG5cbiAgICAmLm9wZW4ge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5jdXN0b21pemVyLWNsb3NlIHtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICByaWdodDogYXV0bztcblxuICAgIH1cblxuICAgIC5jdXN0b21pemVyLXRvZ2dsZSB7XG4gICAgICByaWdodDogLTU0cHg7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgIH1cblxuICB9XG59XG4iLCIuY3VzdG9taXplciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcmlnaHQ6IC00MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgei1pbmRleDogMTA1MTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmN1c3RvbWl6ZXIub3BlbiB7XG4gIHJpZ2h0OiAwO1xufVxuLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmN1c3RvbWl6ZXIgYS5jdXN0b21pemVyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmN1c3RvbWl6ZXIgYS5jdXN0b21pemVyLWNsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uY3VzdG9taXplciAuY3VzdG9taXplci1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogYXV0bztcbiAgei1pbmRleDogMTA7XG59XG4uY3VzdG9taXplciAjcnRsLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMXB4O1xuICB0b3A6IDM1JTtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogLTU0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXN0b21pemVyIC5jb2xvci1vcHRpb25zIGEge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY3VzdG9taXplciAuY3otYmctY29sb3Igc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXN0b21pemVyIC5jei1iZy1jb2xvciBzcGFuLndoaXRlIHtcbiAgY29sb3I6ICNkZGQgIWltcG9ydGFudDtcbn1cbi5jdXN0b21pemVyIC5jei1iZy1jb2xvciAuc2VsZWN0ZWQsXG4uY3VzdG9taXplciAuY3otdGwtYmctY29sb3IgLnNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4ICMwMDlkYTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG59XG4uY3VzdG9taXplciAuY3otYmctaW1hZ2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3VzdG9taXplciAuY3otYmctaW1hZ2UgaW1nLnJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNmU2ZTY7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmN1c3RvbWl6ZXIgLmN6LWJnLWltYWdlIGltZy5yb3VuZGVkLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGNTg2Qjtcbn1cbi5jdXN0b21pemVyIC50bC1jb2xvci1vcHRpb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jdXN0b21pemVyIC5jei10bC1iZy1pbWFnZSBpbWcucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U2ZTZlNjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG4uY3VzdG9taXplciAuY3otdGwtYmctaW1hZ2UgaW1nLnJvdW5kZWQuc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkY1ODZCO1xufVxuLmN1c3RvbWl6ZXIgLmN6LXRsLWJnLWltYWdlIGltZy5yb3VuZGVkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1c3RvbWl6ZXIgLmJnLWhpYmlzY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2YwNWY1NywgI2M4M2Q1YywgIzk5MjQ1YSwgIzY3MTM1MSwgIzM2MDk0MCk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbn1cbi5jdXN0b21pemVyIC5iZy1wdXJwbGUtcGl6emF6eiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM2NjJkODYsICM4YjJhOGEsICNhZTIzODksICNjZjFkODMsICNlZDFlNzkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG4uY3VzdG9taXplciAuYmctYmx1ZS1sYWdvb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMTQ0ZTY4LCAjMDA2ZDgzLCAjMDA4ZDkyLCAjMDBhZDkxLCAjNTdjYTg1KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xufVxuLmN1c3RvbWl6ZXIgLmJnLWVsZWN0cmljLXZpb2xldCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgIzRhMDBlMCwgIzYwMGRlMCwgIzcxMTllMSwgIzgwMjNlMSwgIzhlMmRlMik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbn1cbi5jdXN0b21pemVyIC5iZy1wb3J0YWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjOTdhYmZmLCAjNzk4Y2U1LCAjNWI2ZWNiLCAjM2I1MWIxLCAjMTIzNTk3KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xufVxuLmN1c3RvbWl6ZXIgLmJnLXR1bmRvcmEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICM0NzQ3NDcsICM0YTRhNGEsICM0YzRkNGQsICM0ZjUwNTAsICM1MjUzNTIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG4uY3VzdG9taXplciAuY3otYmctY29sb3IgLmNvbCBzcGFuLnJvdW5kZWQtY2lyY2xlOmhvdmVyLFxuLmN1c3RvbWl6ZXIgLmN6LXRsLWJnLWNvbG9yIC5jb2wgc3Bhbi5yb3VuZGVkLWNpcmNsZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciB7XG4gIGxlZnQ6IC00MDBweDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG59XG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwIC5jdXN0b21pemVyLm9wZW4ge1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbn1cbltkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY2xvc2Uge1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogYXV0bztcbn1cbltkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItdG9nZ2xlIHtcbiAgcmlnaHQ6IC01NHB4O1xuICBsZWZ0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");




var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(elRef, renderer, layoutService, configService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.configService = configService;
        this.options = {
            direction: "ltr",
            bgColor: "black",
            transparentColor: "",
            bgImage: "assets/img/sidebar-bg/01.jpg",
            bgImageDisplay: true,
            compactMenu: false,
            sidebarSize: "sidebar-md",
            layout: "Light"
        };
        this.size = "sidebar-md";
        this.isOpen = false;
        this.config = {};
        this.isBgImageDisplay = true;
        this.selectedBgColor = "black";
        this.selectedBgImage = "assets/img/sidebar-bg/01.jpg";
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = "";
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    _this.selectedBgColor = options.bgColor;
                    _this.selectedBgImage = options.bgImage;
                }
            }
        });
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        // this.isOpen = !this.config.layout.customizer.hidden;
        if (this.config.layout.sidebar.size) {
            this.options.sidebarSize = this.config.layout.sidebar.size;
            this.size = this.config.layout.sidebar.size;
        }
    };
    CustomizerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.config.layout.dir) {
                _this.options.direction = _this.config.layout.dir;
            }
            if (_this.config.layout.variant) {
                _this.options.layout = _this.config.layout.variant;
            }
            if (_this.config.layout.sidebar.collapsed != undefined) {
                _this.options.compactMenu = _this.config.layout.sidebar.collapsed;
            }
            if (_this.config.layout.sidebar.backgroundColor &&
                _this.config.layout.sidebar.backgroundColor != "") {
                _this.options.bgColor = _this.config.layout.sidebar.backgroundColor;
                _this.selectedBgColor = _this.config.layout.sidebar.backgroundColor;
            }
            else {
                _this.options.bgColor = "black";
                _this.selectedBgColor = "black";
            }
            if (_this.config.layout.sidebar.backgroundImage != undefined) {
                _this.options.bgImageDisplay = _this.config.layout.sidebar.backgroundImage;
                _this.isBgImageDisplay = _this.config.layout.sidebar.backgroundImage;
            }
            if (_this.config.layout.sidebar.backgroundImageURL) {
                _this.options.bgImage = _this.config.layout.sidebar.backgroundImageURL;
                _this.selectedBgImage = _this.config.layout.sidebar.backgroundImageURL;
            }
            if (_this.options.layout === "Transparent") {
                _this.options.bgColor = "black";
                _this.selectedBgColor = "black";
                _this.options.bgImageDisplay = false;
                _this.selectedTLBgColor = "";
                _this.selectedBgImage = "";
                _this.options.bgImage = "";
                _this.isBgImageDisplay = false;
                if (_this.config.layout.sidebar.backgroundColor) {
                    if (_this.config.layout.sidebar.backgroundColor === "bg-glass-1") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
                        _this.options.transparentColor = "bg-glass-1";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-2") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-2.jpg";
                        _this.options.transparentColor = "bg-glass-2";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-3") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-3.jpg";
                        _this.options.transparentColor = "bg-glass-3";
                    }
                    else if (_this.config.layout.sidebar.backgroundColor === "bg-glass-4") {
                        _this.selectedTLBgImage = "assets/img/gallery/bg-glass-4.jpg";
                        _this.options.transparentColor = "bg-glass-4";
                    }
                    else {
                        _this.options.transparentColor = _this.config.layout.sidebar.backgroundColor;
                        _this.selectedTLBgColor = _this.config.layout.sidebar.backgroundColor;
                    }
                }
                else {
                    _this.options.bgColor = "black";
                    _this.selectedBgColor = "black";
                    _this.options.bgImageDisplay = false;
                    _this.selectedBgColor = "";
                    _this.selectedTLBgColor = "";
                    _this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
                    _this.options.transparentColor = "bg-glass-1";
                }
            }
        }, 0);
    };
    CustomizerComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    CustomizerComponent.prototype.sendOptions = function () {
        this.directionEvent.emit(this.options);
        this.layoutService.emitChange(this.options);
    };
    CustomizerComponent.prototype.bgImageDisplay = function (e) {
        if (e.target.checked) {
            this.options.bgImageDisplay = true;
            this.isBgImageDisplay = true;
        }
        else {
            this.options.bgImageDisplay = false;
            this.isBgImageDisplay = false;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.toggleCompactMenu = function (e) {
        if (e.target.checked) {
            this.options.compactMenu = true;
        }
        else {
            this.options.compactMenu = false;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarWidth = function (value) {
        this.options.sidebarSize = value;
        this.size = value;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onLightLayout = function () {
        this.options.layout = "Light";
        this.options.bgColor = "man-of-steel";
        this.selectedBgColor = "man-of-steel";
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onDarkLayout = function () {
        this.options.layout = "Dark";
        this.options.bgColor = "black";
        this.selectedBgColor = "black";
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.onTransparentLayout = function () {
        this.options.layout = "Transparent";
        this.options.bgColor = "black";
        this.selectedBgColor = "black";
        this.options.bgImageDisplay = false;
        this.selectedBgColor = "";
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = "assets/img/gallery/bg-glass-1.jpg";
        this.options.transparentColor = "bg-glass-1";
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.toggleCustomizer = function () {
        if (this.isOpen) {
            this.renderer.removeClass(this.customizer.nativeElement, "open");
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.customizer.nativeElement, "open");
            this.isOpen = true;
        }
    };
    CustomizerComponent.prototype.closeCustomizer = function () {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
    };
    CustomizerComponent.prototype.changeSidebarBgColor = function (color) {
        this.selectedBgColor = color;
        this.selectedTLBgColor = "";
        this.options.bgColor = color;
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarBgImage = function (url) {
        this.selectedBgImage = url;
        this.selectedTLBgImage = "";
        //emit event to FUll Layout
        this.options.bgImage = url;
        if (this.isBgImageDisplay) {
            this.options.bgImageDisplay = true;
        }
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarTLBgColor = function (color) {
        this.selectedBgColor = "";
        this.selectedTLBgColor = color;
        this.selectedTLBgImage = "";
        this.options.transparentColor = color;
        this.options.bgImageDisplay = false;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.prototype.changeSidebarTLBgImage = function (url, color) {
        this.selectedTLBgColor = "";
        this.selectedTLBgImage = url;
        this.options.transparentColor = color;
        this.options.bgImageDisplay = false;
        //emit event to FUll Layout
        this.layoutService.emitCustomizerChange(this.options);
    };
    CustomizerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("customizer", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CustomizerComponent.prototype, "customizer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomizerComponent.prototype, "directionEvent", void 0);
    CustomizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-customizer",
            template: __webpack_require__(/*! raw-loader!./customizer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/customizer/customizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, renderer, router, cd) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.navlinks = [];
        this.activeLinks = [];
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.activeRoute = this.router.url;
        this.innerWidth = window.innerWidth;
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
        var element = this.el.nativeElement;
        this.$wrapper = this.renderer.parentNode(this.el.nativeElement); // document.getElementsByClassName("wrapper")[0];
        var $sidebar_img_container = this.el.nativeElement.querySelector('.sidebar-background');
        var $sidebar_img = element.getAttribute("data-image");
        if ($sidebar_img_container.length !== 0 && $sidebar_img !== undefined) {
            this.renderer.setAttribute($sidebar_img_container, 'style', 'background-image: url("' + $sidebar_img + '")');
        }
        if (!this.$wrapper.classList.contains("nav-collapsed")) {
            this.expandActive();
        }
        if (this.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        this.cd.detectChanges();
    };
    SidebarDirective.prototype.onMouseOver = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.navCollapsedOpen === true; })
                .forEach(function (link) {
                link.open = true;
                link.navCollapsedOpen = false;
            });
        }
    };
    SidebarDirective.prototype.onMouseOut = function (e) {
        if (this.$wrapper.classList.contains("nav-collapsed")) {
            this.renderer.addClass(this.$wrapper, 'menu-collapsed');
            this.navlinks
                .filter(function (_) { return _.open === true; })
                .forEach(function (link) {
                link.open = false;
                link.navCollapsedOpen = true;
            });
        }
    };
    SidebarDirective.prototype.onClick = function (e) {
        if (e.target.parentElement.classList.contains("logo-text") ||
            e.target.parentElement.classList.contains("logo-img")) {
            this.activeLinks = [];
            this.activeRoute = this.router.url;
            this.expandActive();
            this.hideSidebar();
        }
        else if (e.target.parentElement.classList.contains("nav-close") ||
            e.target.classList.contains("nav-close")) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (event.target.innerWidth < 992) {
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            this.toggleHideSidebar.emit(true);
        }
        if (event.target.innerWidth > 992) {
            var toggleStatus = this.el.nativeElement;
            this.el.nativeElement.querySelector('.toggle-icon')
                .getAttribute("data-toggle");
            if (toggleStatus === "collapsed" &&
                this.$wrapper.classList.contains("nav-collapsed") &&
                this.$wrapper.classList.contains("menu-collapsed")) {
                this.$wrapper.classList.add("nav-collapsed");
                this.$wrapper.classList.add("menu-collapsed");
            }
            this.toggleHideSidebar.emit(false);
        }
    };
    // check outside click and close sidebar for smaller screen <992
    SidebarDirective.prototype.onOutsideClick = function (event) {
        if (this.innerWidth < 992) {
            var clickedComponent = event.target;
            var inside = false;
            do {
                if (clickedComponent === this.el.nativeElement) {
                    inside = true;
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!this.el.nativeElement.classList.contains("hide-sidebar") &&
                !inside &&
                !event.target.classList.contains("navbar-toggle")) {
                this.toggleHideSidebar.emit(true);
            }
        }
    };
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    SidebarDirective.prototype.getLinks = function () {
        return this.navlinks;
    };
    SidebarDirective.prototype.hideSidebar = function () {
        if (this.innerWidth < 992) {
            this.toggleHideSidebar.emit(true);
        }
    };
    SidebarDirective.prototype.expandActive = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) { return _.routePath === _this.activeRoute; })
            .forEach(function (link) {
            link.isShown = true;
            if (link.level.toString().trim() === "3") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "2" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    _this.navlinks
                        .filter(function (_) {
                        return _.level.toString().trim() === "1" &&
                            _.title === parentLink.parent;
                    })
                        .forEach(function (superParentLink) {
                        superParentLink.open = true;
                        _this.activeLinks.push(superParentLink.title);
                        superParentLink.toggleEmit.emit(_this.activeLinks);
                    });
                });
            }
            else if (link.level.toString().trim() === "2") {
                _this.navlinks
                    .filter(function (_) { return _.level.toString().trim() === "1" && _.title === link.parent; })
                    .forEach(function (parentLink) {
                    parentLink.open = true;
                    _this.activeLinks.push(parentLink.title);
                    parentLink.toggleEmit.emit(_this.activeLinks);
                });
            }
        });
    };
    SidebarDirective.prototype.toggleActiveList = function () {
        var _this = this;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === "3" && _.routePath !== _this.activeRoute;
        })
            .forEach(function (link) {
            link.active = false;
        });
    };
    SidebarDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarDirective.prototype, "toggleHideSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onMouseOut", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarDirective.prototype, "onOutsideClick", null);
    SidebarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebar]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SidebarDirective);
    return SidebarDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebaranchortoggle.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/sidebaranchortoggle.directive.ts ***!
  \********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");



var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    SidebarAnchorToggleDirective.ctorParameters = function () { return [
        { type: _sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarAnchorToggleDirective.prototype, "onClick", null);
    SidebarAnchorToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[appSidebarAnchorToggle]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarLinkDirective"]])
    ], SidebarAnchorToggleDirective);
    return SidebarAnchorToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlink.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlink.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");




var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sidebarList, sidebar, el) {
        this.el = el;
        this.toggleEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarList = sidebarList;
        this.sidebar = sidebar;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "isHidden", {
        get: function () {
            return this._isHidden;
        },
        set: function (value) {
            this._isHidden = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sidebar.addLink(this);
    };
    SidebarLinkDirective.prototype.toggle = function () {
        this.sidebarList.activeLinks = [];
        this.sidebarList.setList(this.sidebar.getLinks());
        var classList = this.el.nativeElement.classList;
        if (this.level.toString().trim() === "3") {
            this.active = true;
            this.sidebarList.toggleActiveList(this);
            this.sidebar.hideSidebar();
        }
        if (this.level.toString().trim() === "1" && !classList.contains("has-sub")) {
            this.sidebarList.collapseOtherLinks(this);
        }
        if (classList.contains("has-sub") && classList.contains("open")) {
            this.sidebarList.collapse(this);
        }
        else {
            if (classList.contains("has-sub")) {
                this.sidebarList.expand(this);
            }
        }
    };
    SidebarLinkDirective.ctorParameters = function () { return [
        { type: _sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],] }] },
        { type: _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SidebarLinkDirective.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarLinkDirective.prototype, "routePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarLinkDirective.prototype, "toggleEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.nav-collapsed-open"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "navCollapsedOpen", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.active"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "active", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-shown"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isShown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-hidden"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarLinkDirective.prototype, "isHidden", null);
    SidebarLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarlink]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_2__["SidebarListDirective"],
            _sidebar_directive__WEBPACK_IMPORTED_MODULE_3__["SidebarDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SidebarLinkDirective);
    return SidebarLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebarlist.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/sidebarlist.directive.ts ***!
  \************************************************************/
/*! exports provided: SidebarListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarListDirective", function() { return SidebarListDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarListDirective = /** @class */ (function () {
    function SidebarListDirective() {
        this.navlinks = [];
        this.activeLinks = [];
    }
    SidebarListDirective.prototype.setList = function (list) {
        this.navlinks = list;
    };
    SidebarListDirective.prototype.collapse = function (link) {
        link.open = false;
        this.setIsHidden(link);
        if (link.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
        }
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.expand = function (link) {
        link.open = true;
        this.activeLinks.push(link.title);
        this.collapseOtherLinks(link);
        this.setIsShown(link);
        link.toggleEmit.emit(this.activeLinks);
    };
    SidebarListDirective.prototype.toggleActiveList = function (openLink) {
        this.navlinks
            .filter(function (_) { return _.level.toString().trim() === "3"; })
            .forEach(function (link) {
            if (link !== openLink) {
                link.active = false;
            }
        });
    };
    SidebarListDirective.prototype.collapseOtherLinks = function (openLink) {
        var _this = this;
        if (openLink.level.toString().trim() === "1") {
            this.navlinks
                .filter(function (_) {
                return (_.level.toString().trim() === openLink.level.toString().trim() ||
                    _.level.toString().trim() === "2") &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
        else if (openLink.level.toString().trim() === "2") {
            this.activeLinks.push(this.navlinks
                .filter(function (_) { return _.level.toString().trim() === "1" && _.open === true; })[0].title);
            this.navlinks
                .filter(function (_) {
                return _.level.toString().trim() === openLink.level.toString().trim() &&
                    _.parent === openLink.parent &&
                    _.open === true;
            })
                .forEach(function (link) {
                if (link !== openLink) {
                    link.open = false;
                    _this.setIsHidden(link);
                }
            });
        }
    };
    SidebarListDirective.prototype.setIsShown = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = true;
            link.isHidden = false;
        });
    };
    SidebarListDirective.prototype.setIsHidden = function (parentLink) {
        var childLevel = Number(parentLink.level) + 1;
        this.navlinks
            .filter(function (_) {
            return _.level.toString().trim() === childLevel.toString().trim() &&
                _.parent === parentLink.title;
        })
            .forEach(function (link) {
            link.isShown = false;
            link.isHidden = true;
        });
    };
    SidebarListDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarList]" })
    ], SidebarListDirective);
    return SidebarListDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebartoggle.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/sidebartoggle.directive.ts ***!
  \**************************************************************/
/*! exports provided: SidebarToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dataToggle = "expanded";
        this._toggleRight = true;
        this._toggleLeft = false;
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    Object.defineProperty(SidebarToggleDirective.prototype, "dataToggle", {
        get: function () {
            return this._dataToggle;
        },
        set: function (value) {
            this._dataToggle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleRight", {
        get: function () {
            return this._toggleRight;
        },
        set: function (value) {
            this._toggleRight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarToggleDirective.prototype, "toggleLeft", {
        get: function () {
            return this._toggleLeft;
        },
        set: function (value) {
            this._toggleLeft = value;
        },
        enumerable: true,
        configurable: true
    });
    SidebarToggleDirective.prototype.ngAfterViewInit = function () {
        this.$wrapper = document.getElementsByClassName("wrapper")[0];
        this.compact_menu_checkbox = this.$wrapper.querySelector('.cz-compact-menu');
    };
    SidebarToggleDirective.prototype.onClick = function (e) {
        var _this = this;
        if (this.dataToggle === "expanded") {
            this.dataToggle = "collapsed";
            this.renderer.addClass(this.$wrapper, 'nav-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = true;
            }
        }
        else {
            this.dataToggle = "expanded";
            this.renderer.removeClass(this.$wrapper, 'nav-collapsed');
            this.renderer.removeClass(this.$wrapper, 'menu-collapsed');
            if (this.compact_menu_checkbox) {
                this.compact_menu_checkbox.checked = false;
            }
        }
        this.toggleLeft = !this.toggleLeft;
        this.toggleRight = !this.toggleRight;
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.data-toggle"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SidebarToggleDirective.prototype, "dataToggle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-right"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleRight", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.ft-toggle-left"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SidebarToggleDirective.prototype, "toggleLeft", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "onClick", null);
    SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appSidebarToggle]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header .card {\n  background-color: #91bab5;\n  min-height: 100px;\n  margin: 0 !important;\n  margin-bottom: 30px;\n}\n\n.header .card:hover {\n  cursor: pointer;\n  background-color: #6E1946;\n}\n\n.title {\n  font-size: 0.9rem;\n}\n\n.header-title {\n  padding-left: 0.5rem;\n}\n\n.header-title h2 {\n  letter-spacing: 0px;\n  color: #6E1946;\n  font-family: sans-serif;\n  /* line-height: 32px; */\n  font-size: 18px;\n}\n\n@media screen and (max-width: 768px) {\n  .header .card {\n    margin-bottom: 30px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9EOlxccmVoYWJcXGZyZWVcXEZjL3NyY1xcYXBwXFxzaGFyZWRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUVJLGlCQUFBO0FDQUo7O0FERUE7RUFFQSxvQkFBQTtBQ0FBOztBREVBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURJQTtFQUVJO0lBRUksOEJBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIC5jYXJkXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWJhYjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5oZWFkZXIgLmNhcmQ6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2O1xyXG5cclxufVxyXG4udGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLmhlYWRlci10aXRsZVxyXG57XHJcbnBhZGRpbmctbGVmdDogMC41cmVtO1xyXG59XHJcbi5oZWFkZXItdGl0bGUgaDJcclxue1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjNkUxOTQ2O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAvKiBsaW5lLWhlaWdodDogMzJweDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgLmhlYWRlciAuY2FyZFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHghaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCIuaGVhZGVyIC5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxYmFiNTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaGVhZGVyIC5jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG4uaGVhZGVyLXRpdGxlIGgyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICM2RTE5NDY7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAvKiBsaW5lLWhlaWdodDogMzJweDsgKi9cbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyIC5jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, layoutService, configService) {
        var _this = this;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.currentLang = "en";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
        this.layoutSub = layoutService.changeEmitted$.subscribe(function (direction) {
            var dir = direction.direction;
            if (dir === "rtl") {
                _this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                _this.placement = "bottom-right";
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.config.layout.dir) {
            setTimeout(function () {
                var dir = _this.config.layout.dir;
                if (dir === "rtl") {
                    _this.placement = "bottom-left";
                }
                else if (dir === "ltr") {
                    _this.placement = "bottom-right";
                }
            }, 0);
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    };
    NavbarComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.emitNotiSidebarChange(true);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        var appSidebar = document.getElementsByClassName("app-sidebar")[0];
        if (appSidebar.classList.contains("hide-sidebar")) {
            this.toggleHideSidebar.emit(false);
        }
        else {
            this.toggleHideSidebar.emit(true);
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "toggleHideSidebar", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"], _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n#notification-sidebar.open {\n  right: 0;\n}\n#notification-sidebar .notification-sidebar-content {\n  position: relative;\n  height: 100%;\n  padding: 10px;\n}\n#notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n  border: none;\n}\n#notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n  border: none;\n}\n#notification-sidebar .notification-sidebar-content #settings .switch {\n  border: none;\n}\n#notification-sidebar a.notification-sidebar-toggle {\n  background: #FFF;\n  color: theme-color(\"primary\");\n  display: block;\n  box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1);\n}\n#notification-sidebar a.notification-sidebar-close {\n  color: #000;\n}\n#notification-sidebar .notification-sidebar-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  padding: 7px;\n  width: auto;\n  z-index: 10;\n}\n#notification-sidebar .notification-sidebar-toggle {\n  position: absolute;\n  top: 35%;\n  width: 54px;\n  height: 50px;\n  left: -54px;\n  text-align: center;\n  line-height: 50px;\n  cursor: pointer;\n}\n[dir=rtl] :host ::ng-deep #notification-sidebar {\n  left: -400px;\n  right: auto;\n}\n[dir=rtl] :host ::ng-deep #notification-sidebar.open {\n  left: 0;\n  right: auto;\n}\n[dir=rtl] :host ::ng-deep #notification-sidebar .notification-sidebar-close {\n  left: 10px;\n  right: auto;\n}\n[dir=rtl] :host ::ng-deep #notification-sidebar .notification-sidebar-toggle {\n  right: -54px;\n  left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL0Q6XFxyZWhhYlxcZnJlZVxcRmMvc3JjXFxhcHBcXHNoYXJlZFxcbm90aWZpY2F0aW9uLXNpZGViYXJcXG5vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbm90aWZpY2F0aW9uLXNpZGViYXIvbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0csYUFBQTtFQUNILFVBQUE7RUFDRyxzQkFBQTtFQUNILGFBQUE7RUFDRyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMERBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxzQ0FBQTtBQ0NKO0FEQ0M7RUFDQyxRQUFBO0FDQ0Y7QURJQztFQUNDLGtCQUFBO0VBQ0csWUFBQTtFQUNBLGFBQUE7QUNGTDtBRE9RO0VBQ0YsWUFBQTtBQ0xOO0FET1E7RUFDRixZQUFBO0FDTE47QURZRztFQUNDLFlBQUE7QUNWSjtBRGdCQztFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0csMkNBQUE7QUNkTDtBRGdCQztFQUNJLFdBQUE7QUNkTDtBRGdCQztFQUNDLGtCQUFBO0VBQ0csV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNkTDtBRGdCQztFQUNDLGtCQUFBO0VBQ0csUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDZEw7QUR1QkM7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ3BCRjtBRHFCRTtFQUNDLE9BQUE7RUFDQSxXQUFBO0FDbkJIO0FEcUJFO0VBQ0MsVUFBQTtFQUNBLFdBQUE7QUNuQkg7QURxQkU7RUFDQyxZQUFBO0VBQ0EsVUFBQTtBQ25CSCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZmljYXRpb24tc2lkZWJhcntcblx0d2lkdGg6IDQwMHB4O1xuICAgIHJpZ2h0OiAtNDAwcHg7XG5cdHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcblx0ei1pbmRleDogMTA1MTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHQmLm9wZW57XG5cdFx0cmlnaHQ6IDA7XG5cdH1cblxuXHRcblxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXHRoZWlnaHQ6IDEwMCU7XG4gICAgXHRwYWRkaW5nOiAxMHB4O1xuXG4gICAgXHQjdGltZWxpbmV7XG4gICAgXHRcdCYudGltZWxpbmUtbGVmdHtcbiAgICBcdFx0XHQudGltZWxpbmUtaXRlbXtcbiAgICBcdFx0XHRcdCY6YmVmb3Jle1xuXHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0XHQmOmFmdGVye1xuXHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdCNzZXR0aW5nc3tcblx0XHRcdC5zd2l0Y2h7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGEubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xle1xuXHRcdGJhY2tncm91bmQ6ICNGRkY7XG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcblx0XHRkaXNwbGF5OiBibG9jaztcbiAgICBcdGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdH1cblx0YS5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XG4gICAgXHRjb2xvcjogIzAwMDtcblx0fVxuXHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgcmlnaHQ6IDEwcHg7XG5cdCAgICB0b3A6IDEwcHg7XG5cdCAgICBwYWRkaW5nOiA3cHg7XG5cdCAgICB3aWR0aDogYXV0bztcblx0ICAgIHotaW5kZXg6IDEwO1xuXHR9XG5cdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgdG9wOiAzNSU7XG5cdCAgICB3aWR0aDogNTRweDtcblx0ICAgIGhlaWdodDogNTBweDtcblx0ICAgIGxlZnQ6IC01NHB4O1xuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG5cdCAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblx0XG5cblx0XG5cbn1cblxuW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXB7XG5cdCNub3RpZmljYXRpb24tc2lkZWJhcntcdFxuXHRcdGxlZnQ6IC00MDBweDtcdFxuXHRcdHJpZ2h0OiBhdXRvO1x0ICAgXG5cdFx0Ji5vcGVue1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiBhdXRvO1xuXHRcdH1cblx0XHQubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2V7XG5cdFx0XHRsZWZ0OiAxMHB4O1xuXHRcdFx0cmlnaHQ6IGF1dG87XG5cdFx0fVxuXHRcdC5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGV7XHRcblx0XHRcdHJpZ2h0OiAtNTRweDtcblx0XHRcdGxlZnQ6IGF1dG87XG5cdFx0fVx0XG5cdH1cbn0iLCIjbm90aWZpY2F0aW9uLXNpZGViYXIge1xuICB3aWR0aDogNDAwcHg7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDEwNTE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDUsIDAuNzQsIDAuMiwgMC45OSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbiNub3RpZmljYXRpb24tc2lkZWJhci5vcGVuIHtcbiAgcmlnaHQ6IDA7XG59XG4jbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbiNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCAjdGltZWxpbmUudGltZWxpbmUtbGVmdCAudGltZWxpbmUtaXRlbTpiZWZvcmUge1xuICBib3JkZXI6IG5vbmU7XG59XG4jbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3RpbWVsaW5lLnRpbWVsaW5lLWxlZnQgLnRpbWVsaW5lLWl0ZW06YWZ0ZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG4jbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQgI3NldHRpbmdzIC5zd2l0Y2gge1xuICBib3JkZXI6IG5vbmU7XG59XG4jbm90aWZpY2F0aW9uLXNpZGViYXIgYS5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGUge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBjb2xvcjogdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNoYWRvdzogLTNweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbiNub3RpZmljYXRpb24tc2lkZWJhciBhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG59XG4jbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiBhdXRvO1xuICB6LWluZGV4OiAxMDtcbn1cbiNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogLTU0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIge1xuICBsZWZ0OiAtNDAwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIub3BlbiB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xufVxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IGF1dG87XG59XG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xlIHtcbiAgcmlnaHQ6IC01NHB4O1xuICBsZWZ0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");



var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent(elRef, renderer, layoutService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.notiSidebarChangeEmitted$.subscribe(function (value) {
            if (_this.isOpen) {
                _this.renderer.removeClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = false;
            }
            else {
                _this.renderer.addClass(_this.sidebar.nativeElement, 'open');
                _this.isOpen = true;
            }
        });
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
    };
    NotificationSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NotificationSidebarComponent.prototype.onClose = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'open');
        this.isOpen = false;
    };
    NotificationSidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotificationSidebarComponent.prototype, "sidebar", void 0);
    NotificationSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! raw-loader!./notification-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-content-pages-content-pages-module */ "pages-content-pages-content-pages-module").then(__webpack_require__.bind(null, /*! ../../pages/content-pages/content-pages.module */ "./src/app/pages/content-pages/content-pages.module.ts")).then(function (m) { return m.ContentPagesModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: function () { return __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'homeservices',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-servicestable-servicestable-module */ "pages-servicestable-servicestable-module").then(__webpack_require__.bind(null, /*! ../../pages/servicestable/servicestable.module */ "./src/app/pages/servicestable/servicestable.module.ts")).then(function (m) { return m.ServicestableModule; }); }
    },
    {
        path: 'services',
        loadChildren: function () { return Promise.all(/*! import() | pages-script-revision-script-revision-module */[__webpack_require__.e("default~pages-script-revision-script-revision-module~pages-shoots-shoots-module"), __webpack_require__.e("pages-script-revision-script-revision-module")]).then(__webpack_require__.bind(null, /*! ../../pages/script-revision/script-revision.module */ "./src/app/pages/script-revision/script-revision.module.ts")).then(function (m) { return m.ScriptRevisionModule; }); }
    },
    {
        path: 'serviceshoot',
        loadChildren: function () { return Promise.all(/*! import() | pages-shoots-shoots-module */[__webpack_require__.e("default~pages-script-revision-script-revision-module~pages-shoots-shoots-module"), __webpack_require__.e("pages-shoots-shoots-module")]).then(__webpack_require__.bind(null, /*! ../../pages/shoots/shoots.module */ "./src/app/pages/shoots/shoots.module.ts")).then(function (m) { return m.ShootsModule; }); }
    },
];


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.setConfigValue();
    }
    ConfigService.prototype.setConfigValue = function () {
        this.templateConf = {
            layout: {
                variant: "Light",
                dir: "ltr",
                customizer: {
                    hidden: false //options: true, false
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-md",
                    backgroundColor: "man-of-steel",
                    /* If you want transparent layout add any of the following mentioned classes to backgroundColor of sidebar option :
                      bg-glass-1, bg-glass-2, bg-glass-3, bg-glass-4, bg-hibiscus, bg-purple-pizzaz, bg-blue-lagoon, bg-electric-viloet, bg-protage, bg-tundora
                    */
                    backgroundImage: true,
                    backgroundImageURL: "assets/img/sidebar-bg/01111.jpg"
                }
            }
        };
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        //Customizer
        this.emitCustomizerSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerChangeEmitted$ = this.emitCustomizerSource.asObservable();
        //customizer - compact menu
        this.emitCustomizerCMSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerCMChangeEmitted$ = this.emitCustomizerCMSource.asObservable();
        //customizer - compact menu
        this.emitNotiSidebarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notiSidebarChangeEmitted$ = this.emitNotiSidebarSource.asObservable();
    }
    LayoutService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    LayoutService.prototype.emitCustomizerChange = function (change) {
        this.emitCustomizerSource.next(change);
    };
    LayoutService.prototype.emitCustomizerCMChange = function (change) {
        this.emitCustomizerCMSource.next(change);
    };
    LayoutService.prototype.emitNotiSidebarChange = function (change) {
        this.emitNotiSidebarSource.next(change);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/sidebarlink.directive */ "./src/app/shared/directives/sidebarlink.directive.ts");
/* harmony import */ var _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/sidebarlist.directive */ "./src/app/shared/directives/sidebarlist.directive.ts");
/* harmony import */ var _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/sidebaranchortoggle.directive */ "./src/app/shared/directives/sidebaranchortoggle.directive.ts");
/* harmony import */ var _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/sidebartoggle.directive */ "./src/app/shared/directives/sidebartoggle.directive.ts");







//COMPONENTS






//DIRECTIVES






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_13__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_14__["SidebarDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_11__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_13__["ToggleFullscreenDirective"],
                _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_14__["SidebarDirective"],
                _directives_sidebarlink_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarLinkDirective"],
                _directives_sidebarlist_directive__WEBPACK_IMPORTED_MODULE_16__["SidebarListDirective"],
                _directives_sidebaranchortoggle_directive__WEBPACK_IMPORTED_MODULE_17__["SidebarAnchorToggleDirective"],
                _directives_sidebartoggle_directive__WEBPACK_IMPORTED_MODULE_18__["SidebarToggleDirective"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
//Sidebar menu Routes and data
var ROUTES = [
    { path: '/dashboard/home', title: 'My Home', icon: 'fa fa-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //   {
    //         path: '', title: 'Services', icon: 'fa fa-th-large', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
    //             { path: '/services/scriptrevision', title: 'Script Revision', icon: 'fa fa-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/shoot', title: 'Let’s Shoot', icon: 'fa fa-film', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/Clearance', title: 'Shooting Clearance', icon: 'fa fa-camera', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/Inspection', title: 'Inspection of video material circulation', icon: 'fa fa-search', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/Video', title: 'Video Website Registration', icon: 'ft-video', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/Location', title: 'Location & Activity Permit', icon: 'fa fa-map-pin', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/Insurance', title: 'Insurance Compliance', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/Production', title: 'Production Calculator', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/Drone', title: 'Drone Permit', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //             { path: '/services/Digital', title: 'Digital Video Registration', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         ]
    //     },
    {
        path: '', title: 'Services', icon: 'fa fa-th-large', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/services/scriptrevision', title: 'Script Revision', icon: 'fa fa-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/serviceshoot/shoot', title: 'Let’s Shoot', icon: 'fa fa-film', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services/Clearance', title: 'Shooting Clearance', icon: 'fa fa-camera', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services/Inspection', title: 'Inspection of video material circulation', icon: 'fa fa-search', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services/Video', title: 'Video Website Registration', icon: 'ft-sidebar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services/Location', title: 'Location & Activity Permit', icon: 'fa fa-map-pin', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services/Insurance', title: 'Insurance Compliance', icon: 'ft-cpu', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services/Production', title: 'Production Calculator', icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services/Drone', title: 'Drone Permit', icon: 'ft-aperture', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services/Digital', title: 'Digital Video Registration', icon: 'ft-video', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/custom-animations */ "./src/app/shared/animations/custom-animations.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");








var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(elementRef, renderer, router, route, translate, configService, layoutService) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.configService = configService;
        this.layoutService = layoutService;
        this.activeTitles = [];
        this.nav_collapsed_open = false;
        this.logoUrl = 'assets/img/new/FIC-LOGO.png';
        this.welcomeUrl = 'assets/img/new/welcome.png';
        this.config = {};
        if (this.depth === undefined) {
            this.depth = 0;
            this.expanded = true;
        }
        this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(function (options) {
            if (options) {
                if (options.bgColor) {
                    if (options.bgColor === 'white') {
                        _this.logoUrl = 'assets/img/new/FIC-LOGO.png';
                        _this.welcomeUrl = 'assets/img/new/welcome.png';
                    }
                    else {
                        _this.logoUrl = 'assets/img/new/FIC-LOGO.png';
                        _this.welcomeUrl = 'assets/img/new/welcome.png';
                    }
                }
                if (options.compactMenu === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (options.compactMenu === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.config = this.configService.templateConf;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/new/FIC-LOGO.png';
            this.welcomeUrl = 'assets/img/new/welcome.png';
        }
        else {
            this.logoUrl = 'assets/img/new/FIC-LOGO.png';
            this.welcomeUrl = 'assets/img/new/welcome.png';
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.getElementById('serviceList').click();
        setTimeout(function () {
            if (_this.config.layout.sidebar.collapsed != undefined) {
                if (_this.config.layout.sidebar.collapsed === true) {
                    _this.expanded = false;
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = true;
                }
                else if (_this.config.layout.sidebar.collapsed === false) {
                    _this.expanded = true;
                    _this.renderer.removeClass(_this.toggleIcon.nativeElement, 'ft-toggle-left');
                    _this.renderer.addClass(_this.toggleIcon.nativeElement, 'ft-toggle-right');
                    _this.nav_collapsed_open = false;
                }
            }
        }, 0);
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    SidebarComponent.prototype.toggleSlideInOut = function () {
        this.expanded = !this.expanded;
    };
    SidebarComponent.prototype.handleToggle = function (titles) {
        this.activeTitles = titles;
    };
    // NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf("forms/ngx") !== -1)
            this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleIcon', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "toggleIcon", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
            animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\rehab\free\Fc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map