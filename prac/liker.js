"use strict";
exports.__esModule = true;
var Liker = /** @class */ (function () {
    function Liker(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    Liker.prototype.onClick = function () {
        this.likesCount += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    };
    return Liker;
}());
exports.Liker = Liker;
