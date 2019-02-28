/// <reference path="./gameController.ts" />

namespace IGpingpong{
    export class pingpong extends gameController{
        paddle1!:Paddle;
        paddle2!:Paddle;
        ball!:Ball;
        topBoundries!:border;
        rightBoundries!:border;
        bottomBoundries!:border;
        leftBounders!:border;
        private ballPositionX=1;
        private ballPositionY=1;
        start():void{
            this.paddle1=new Paddle(this.app.view.width/2-this.app.view.height,10,30,200,this.app);
            this.paddle2=new Paddle(this.app.view.width/2-50,this.app.view.height-40,30,200,this.app);
            this.ball=new Ball(this.app.view.width/2,this.app.view.height/2,20,this.app);
            this.topBoundries=new border(0,0,800-2,5,this.app);
            this.rightBoundries=new border(800-2,0,5,800-2,this.app);
            this.bottomBoundries=new border(0,800-2,800-2,5,this.app);
            this.leftBounders=new border(0,0,5,800-2,this.app);
        }  
        update():void{
            let _this=this;
            _this.ball.moveTo(this.ballPositionX,this.ballPositionY);
        }
       
    }
}