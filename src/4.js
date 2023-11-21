"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Key = /** @class */ (function () {
    function Key(signature) {
        this.signature = signature;
        this.signature = signature;
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(keyObj) {
        this.key = keyObj;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(keyObj) {
        this.tenants = [];
        this.key = keyObj;
    }
    House.prototype.comeIn = function (person) {
        if (this.door === true) {
            this.tenants.push(person);
        }
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse(keyObj) {
        return _super.call(this, keyObj) || this;
    }
    MyHouse.prototype.openDoor = function (keyObj) {
        if (this.key === keyObj) {
            this.door = true;
        }
    };
    return MyHouse;
}(House));
var key = new Key(Math.random());
var key2 = new Key(Math.random());
var house = new MyHouse(key);
var person = new Person(key2);
house.openDoor(person.getKey());
house.comeIn(person);
console.log(house.tenants);
