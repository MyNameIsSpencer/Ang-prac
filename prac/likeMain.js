"use strict";
exports.__esModule = true;
var liker_1 = require("./liker");
var component = new liker_1.Liker(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
