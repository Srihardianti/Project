webpackJsonp([7],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu-burger/menu-burger.module": [
		268,
		6
	],
	"../pages/menu-icecream/menu-icecream.module": [
		269,
		5
	],
	"../pages/menu-mieayam/menu-mieayam.module": [
		270,
		4
	],
	"../pages/menu-mieayeam/menu-mieayeam.module": [
		271,
		3
	],
	"../pages/menu-nasigoreng/menu-nasigoreng.module": [
		272,
		2
	],
	"../pages/menu-rendang/menu-rendang.module": [
		273,
		1
	],
	"../pages/menu-sandwich/menu-sandwich.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.MenuNasigorengPage = function (ket) {
        this.navCtrl.push("MenuNasigorengPage", { kategori: ket });
    };
    HomePage.prototype.MenuRendangPage = function (ket) {
        this.navCtrl.push("MenuRendangPage", { kategori: ket });
    };
    HomePage.prototype.MenuSandwichPage = function (ket) {
        this.navCtrl.push("MenuSandwichPage", { kategori: ket });
    };
    HomePage.prototype.MenuBurgerPage = function (ket) {
        this.navCtrl.push("MenuBurgerPage", { kategori: ket });
    };
    HomePage.prototype.MenuMieayamPage = function (ket) {
        this.navCtrl.push("MenuMieayamPage", { kategori: ket });
    };
    HomePage.prototype.MenuIcecreamPage = function (ket) {
        this.navCtrl.push("MenuIcecreamPage", { kategori: ket });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\asus\mytask\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      MENU UTAMA \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n<ion-grid>\n\n   <ion-row>\n	<ion-col (click)= "MenuNasigorengPage()"> \n	<img src="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/2609217/makanan%20khas%20indonesia/Image%20Banner%20travel.png" width="70%">\n	<div class="col-title">Nasi Goreng</div>\n	</ion-col>\n	\n	<ion-col (click)= "MenuRendangPage()"> \n	<img src="https://www.goodnewsfromindonesia.id/uploads/post/large-rendang-seruni-id-6015660445b23a5f60d1bbe1ce5e2562.jpg" width="70%">\n	<div class="col-title">Rendang</div>\n	</ion-col>\n   </ion-row>\n\n   <ion-row>\n	<ion-col (click)= "MenuSandwichPage()"> \n	<img src="http://txchiliparlor.com/wp-content/uploads/2018/01/makanan-untuk-sarapan-pagi.jpg" width="70%">\n	<div class="col-title">Sandwich</div>\n	</ion-col>\n\n	<ion-col (click)= "MenuBurgerPage()"> \n	<img src="https://halomuda.com/wp-content/uploads/2016/04/Burger.jpg" width="70%">\n	<div class="col-title">Burger</div>\n	</ion-col>\n    </ion-row>\n\n    <ion-row>\n	<ion-col (click)= "MenuMieayamPage()"> \n	<img src="https://www.nibble.id/blog/wp-content/uploads/2017/04/makanan-enak-di-bogor-01.jpg" width="70%">\n	<div class="col-title">Mie Ayam</div>\n	</ion-col>\n\n	<ion-col (click)= "MenuIcecreamPage()"> \n        <img src="https://awsimages.detik.net.id/community/media/visual/2017/09/08/7def0185-392c-44e7-9aea-2a382b45ef2c_43.jpg?w=700&q=90" width="70%">\n	<div class="col-title">Ice Cream</div>\n	</ion-col>\n   </ion-row>\n   </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus\mytask\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/menu-burger/menu-burger.module#MenuBurgerPageModule', name: 'MenuBurgerPage', segment: 'menu-burger', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-icecream/menu-icecream.module#MenuIcecreamPageModule', name: 'MenuIcecreamPage', segment: 'menu-icecream', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-mieayam/menu-mieayam.module#MenuMieayamPageModule', name: 'MenuMieayamPage', segment: 'menu-mieayam', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-mieayeam/menu-mieayeam.module#MenuMieayeamPageModule', name: 'MenuMieayeamPage', segment: 'menu-mieayeam', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-nasigoreng/menu-nasigoreng.module#MenuNasigorengPageModule', name: 'MenuNasigorengPage', segment: 'menu-nasigoreng', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-rendang/menu-rendang.module#MenuRendangPageModule', name: 'MenuRendangPage', segment: 'menu-rendang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-sandwich/menu-sandwich.module#MenuSandwichPageModule', name: 'MenuSandwichPage', segment: 'menu-sandwich', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\asus\mytask\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\asus\mytask\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map