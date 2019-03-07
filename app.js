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
            this.graphics.beginFill(0xFFFFFF);
            this.graphics.drawCircle(this.x, this.y, this.radius);
            this.graphics.endFill();
            this.graphics.pivot.set(-this.radius, -this.radius);
            this.stage.stage.addChild(this.graphics);
        };
        Ball.prototype.moveTo = function (x, y) {
            this.x += x;
            this.y += y;
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
        Collider.prototype.check_collision = function (body1, body2) {
            if (body1.x < body2.x + body2.width &&
                body1.x + body1.width > body2.x &&
                body1.y < body2.y + body2.height &&
                body1.height + body1.y > body2.y) {
                return true;
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
            this.app = new PIXI.Application({ width: 800, height: 800, transparent: true });
            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(2, 0xFFFFFF, 1);
            this.graphics.beginFill(0x961251);
            this.graphics.drawRect(0, this.app.view.height / 2, this.app.view.width, 10);
            this.graphics.endFill();
            this.app.stage.addChild(this.graphics);
            this.app.view.style.display = "block";
            this.app.view.style.marginLeft = "500px";
            var style = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 36,
                fontStyle: 'italic',
                fontWeight: 'bold',
                fill: ['#ffffff', '#ffffff'],
                stroke: '#4a1850',
                strokeThickness: 5,
            });
            this.scorePlayer1 = new PIXI.Text('0', style);
            this.scorePlayer1.x = this.app.view.width / 2;
            this.scorePlayer1.y = this.app.view.height / 2 - 40;
            this.app.stage.addChild(this.scorePlayer1);
            this.scorePlayer2 = new PIXI.Text('0', style);
            this.scorePlayer2.x = this.app.view.width / 2;
            this.scorePlayer2.y = this.app.view.height / 2;
            this.app.stage.addChild(this.scorePlayer2);
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
            this.graphics.lineStyle(1, 0xFFF0FF);
            this.graphics.beginFill(0x961251);
            this.graphics.drawRoundedRect(this.x, this.y, this.width, this.height, 15);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
        };
        Paddle.prototype.moveTo = function (x, y) {
            this.x += x;
            this.y = y;
            this.graphics.x += x;
            this.graphics.y = y;
        };
        return Paddle;
    }());
    IGpingpong.Paddle = Paddle;
})(IGpingpong || (IGpingpong = {}));
/// <reference path="gameController.ts" />
/// <reference path="Paddle.ts" />
var IGpingpong;
(function (IGpingpong) {
    var pingpong = /** @class */ (function (_super) {
        __extends(pingpong, _super);
        function pingpong() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ballVelocityX = 5;
            _this.ballVelocityY = 5;
            _this.countPlayer1 = 1;
            _this.countPlayer2 = 1;
            return _this;
        }
        pingpong.prototype.start = function () {
            this.paddle2 = new IGpingpong.Paddle(0, this.app.view.height - 30, 20, 200, this.app);
            this.paddle1 = new IGpingpong.Paddle(this.app.view.width / 2 - 50, 5, 20, 200, this.app);
            this.ball = new IGpingpong.Ball(this.app.view.width / 2 - 50, this.app.view.height / 2, 10, this.app);
            this.topBoundries = new IGpingpong.border(0, 0, 800 - 2, 1, this.app);
            this.rightBoundries = new IGpingpong.border(800 - 2, 0, 5, 800 - 2, this.app);
            this.bottomBoundries = new IGpingpong.border(0, 800 - 2, 800 - 2, 5, this.app);
            this.leftBoundries = new IGpingpong.border(0, 0, 1, 800 - 2, this.app);
            this.collider = new IGpingpong.Collider();
            this.startGame = new IGpingpong.gameController();
            PIXI.sound.add("music", "musical.mp3");
            PIXI.sound.play("music");
            this.interval = setInterval(function () {
                PIXI.sound.play("music");
            }, 8000);
        };
        pingpong.prototype.update = function () {
            var _this = this;
            this.moveBall();
            this.paddle2Move();
            this.paddle1Move();
            if (this.collider.check_collision(this.ball, this.bottomBoundries)) {
                this.app.stop();
                PIXI.sound.stop("music");
                clearInterval(this.interval);
                //this.app.stage.removeChild(this.ball.graphics);
                // setTimeout(this.startGame.start,3000);
            }
            if (this.collider.check_collision(this.ball, this.rightBoundries)) {
                _this.ballVelocityX *= -1;
            }
            if (this.collider.check_collision(this.ball, this.topBoundries)) {
                this.app.stop();
                PIXI.sound.stop("music");
                clearInterval(this.interval);
            }
            if (this.collider.check_collision(this.ball, this.leftBoundries)) {
                _this.ballVelocityX *= -1;
            }
            if (this.collider.check_collision(this.ball, this.paddle1)) {
                _this.ballVelocityY *= -1;
                PIXI.sound.add("boing", "boing.mp3");
                PIXI.sound.play("boing");
                this.scorePlayer1.text = this.countPlayer1;
                this.countPlayer1 += 1;
            }
            if (this.collider.check_collision(this.ball, this.paddle2)) {
                _this.ballVelocityY *= -1;
                PIXI.sound.add("boing", "boing.mp3");
                PIXI.sound.play("boing");
                this.scorePlayer2.text = this.countPlayer2;
                this.countPlayer2 += 1;
            }
        };
        pingpong.prototype.moveBall = function () {
            var _this = this;
            _this.ball.moveTo(this.ballVelocityX, this.ballVelocityY);
        };
        pingpong.prototype.paddle1Move = function () {
            var _this = this;
            _this.paddle1.moveTo(this.ballVelocityX, this.paddle1.y);
        };
        pingpong.prototype.paddle2Move = function () {
            var mousePosition = this.app.renderer.plugins.interaction.mouse.global.x;
            if (mousePosition < 0) {
                mousePosition = 0;
            }
            if (mousePosition > this.app.view.width) {
                mousePosition = this.app.view.width;
            }
            this.paddle2.x = mousePosition;
            this.paddle2.graphics.position.x = mousePosition;
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
