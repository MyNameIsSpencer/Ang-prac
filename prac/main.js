var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// let point: Point = new Point();
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (<string>message).endsWith('c');
//
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3, 4];
// let f: any[] = [1, true, 'a', false];
//
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
//
// enum Color = { Red, Green, Blue };
// enum Color = { Red = 0, Green = 1, Blue = 2 };
// let backgroundColor = Col.Red;
//
// function doSomething() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log('Finally: ' + i);
// }
//
// doSomething();
// function log(message) {
//   console.log(message);
// }
// var message = 'Hello Warldo';
//
// log(message);
