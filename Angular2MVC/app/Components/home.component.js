"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "<mat-card class=\"example-card\">\n                  <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"></div>\n                    <mat-card-title>Users</mat-card-title>\n                    <mat-card-subtitle>Sample Image</mat-card-subtitle>\n                  </mat-card-header>\n                  <img mat-card-image src=\"../../images/users.png\" alt=\"Photo of a Users Icon\">\n                  <mat-card-content>\n                    <p>\n                      In this application, you can add new user, edit and delete existing user.\n                    </p>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button mat-button>LIKE</button>\n                    <button mat-button>SHARE</button>\n                  </mat-card-actions>\n               </mat-card>\n"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map