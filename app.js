"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IGpingpong;
(function (IGpingpong) {
    var Ball = /** @class */ (function () {
        function Ball(x, y, radius, stage) {
            this.graphics = new PIXI.Graphics();
            this.x = x;
            this.y = y;
            this.height = 2 * radius;
            this.width = 2 * radius;
            this.stage = stage;
            this.radius = radius;
            this.draw();
        }
        Ball.prototype.draw = function () {
            this.graphics.beginFill(0x961251);
            this.graphics.drawCircle(this.x, this.y, this.radius);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
        };
        Ball.prototype.moveTo = function (x, y) {
            this.graphics.x += x;
            this.graphics.y += y;
        };
        return Ball;
    }());
    IGpingpong.Ball = Ball;
})(IGpingpong || (IGpingpong = {}));
var IGpingpong;
(function (IGpingpong) {
    var border = /** @class */ (function () {
        function border(x, y, width, height, stage) {
            this.graphics = new PIXI.Graphics();
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.draw();
        }
        border.prototype.draw = function () {
            this.graphics.beginFill(0xFFFFFF);
            this.graphics.lineStyle(2, 0xFFFFFF, 1);
            this.graphics.drawRect(this.x, this.y, this.width, this.height);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
        };
        border.prototype.moveTo = function () {
        };
        return border;
    }());
    IGpingpong.border = border;
})(IGpingpong || (IGpingpong = {}));
var IGpingpong;
(function (IGpingpong) {
    var Collider = /** @class */ (function () {
        function Collider() {
        }
        Collider.prototype.check_collision = function (body1, body2, handler) {
            if (!((body1.x > body2.x + body2.height) || (body1.x + body1.height < body2.y) || (body1.x + body1.width < body2.x) || (body1.y + body1.height < body2.y))) {
                handler();
            }
        };
        return Collider;
    }());
    IGpingpong.Collider = Collider;
})(IGpingpong || (IGpingpong = {}));
var IGpingpong;
(function (IGpingpong) {
    var gameController = /** @class */ (function () {
        function gameController() {
            this.app = new PIXI.Application(800, 800);
            document.body.appendChild(this.app.view);
            this.start();
            this.app.ticker.add(this.update.bind(this));
        }
        gameController.prototype.start = function () { };
        gameController.prototype.update = function (delta) { };
        return gameController;
    }());
    IGpingpong.gameController = gameController;
})(IGpingpong || (IGpingpong = {}));
var IGpingpong;
(function (IGpingpong) {
    var Paddle = /** @class */ (function () {
        function Paddle(x, y, height, width, stage) {
            this.graphics = new PIXI.Graphics();
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;
            this.stage = stage;
            this.draw();
        }
        Paddle.prototype.draw = function () {
            this.graphics.lineStyle(2, 0xFF00FF, 1);
            this.graphics.beginFill(0x650A5A, 0.25);
            this.graphics.drawRect(this.x, this.y, this.width, this.height);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
        };
        Paddle.prototype.moveTo = function (x, y) {
            this.graphics.x += x;
            this.graphics.y += y;
        };
        return Paddle;
    }());
    IGpingpong.Paddle = Paddle;
})(IGpingpong || (IGpingpong = {}));
/// <reference path="./gameController.ts" />
var IGpingpong;
(function (IGpingpong) {
    var pingpong = /** @class */ (function (_super) {
        __extends(pingpong, _super);
        function pingpong() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ballVelocityX = 1;
            _this.ballVelocityY = 1;
            return _this;
        }
        pingpong.prototype.start = function () {
            this.paddle2 = new IGpingpong.Paddle(this.app.view.width / 2 - 50, this.app.view.height - 40, 30, 200, this.app);
            this.paddle1 = new IGpingpong.Paddle(this.app.view.width / 2, 10, 30, 200, this.app);
            this.ball = new IGpingpong.Ball(this.app.view.width / 2 - 50, this.app.view.height / 2, 20, this.app);
            this.topBoundries = new IGpingpong.border(0, 0, 800 - 2, 5, this.app);
            this.rightBoundries = new IGpingpong.border(800 - 2, 0, 5, 800 - 2, this.app);
            this.bottomBoundries = new IGpingpong.border(0, 800 - 2, 800 - 2, 5, this.app);
            this.leftBounders = new IGpingpong.border(0, 0, 5, 800 - 2, this.app);
            this.collider = new IGpingpong.Collider();
        };
        pingpong.prototype.update = function () {
            var _this = this;
            this.moveBall();
            this.paddle2Move();
            this.collider.check_collision(this.ball, this.bottomBoundries, function () {
                _this.ballVelocityY *= -1;
                _this.ball.moveTo(_this.ballVelocityX, _this.ballVelocityY);
            });
        };
        pingpong.prototype.moveBall = function () {
            var _this = this;
            _this.ball.moveTo(this.ballVelocityX, this.ballVelocityY);
        };
        pingpong.prototype.paddle2Move = function () {
            var _this = this;
            if (this.app.renderer.plugins.interaction.mouse.global.x < 0) {
                this.paddle2.x = this.app.renderer.plugins.interaction.mouse.global.x;
                //_this.paddle2.moveTo(,0);
            }
            if (this.app.renderer.plugins.interaction.mouse.global.x < this.app.view.width) {
                this.paddle2.x = this.app.renderer.plugins.interaction.mouse.global.x;
                //_this.paddle2.moveTo(,0);   
            }
        };
        return pingpong;
    }(IGpingpong.gameController));
    IGpingpong.pingpong = pingpong;
})(IGpingpong || (IGpingpong = {}));
/// <reference path="Paddle.ts" />
/// <reference path="pixi.js.d.ts" />
/// <reference path="pingPongGameController.ts" />
var IGpingpong;
(function (IGpingpong) {
    IGpingpong.gc = new IGpingpong.pingpong();
})(IGpingpong || (IGpingpong = {}));
