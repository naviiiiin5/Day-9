/// <reference path="gameController.ts" />
/// <reference path="Paddle.ts" />


namespace IGpingpong{
    export class pingpong extends gameController{
        paddle1!:Paddle;
        paddle2!:Paddle;
        ball!:Ball;
        topBoundries!:border;
        rightBoundries!:border;
        bottomBoundries!:border;
        leftBounders!:border;
        private ballVelocityX=1;
        private ballVelocityY=1;
        collider!:Collider;
    
        start():void{
            this.paddle2=new Paddle(this.app.view.width/2,this.app.view.height-40,30,200,this.app);
            this.paddle1=new Paddle(this.app.view.width/2-50,10,30,200,this.app);
            this.ball=new Ball(this.app.view.width/2-50,this.app.view.height/2,20,this.app);
            this.topBoundries=new border(0,0,800-2,5,this.app);
            this.rightBoundries=new border(800-2,0,5,800-2,this.app);
            this.bottomBoundries=new border(0,800-2,800-2,5,this.app);
            this.leftBounders=new border(0,0,5,800-2,this.app);
            this.collider=new Collider();
        }  
        update():void{
            let _this=this;
           this.moveBall();
           this.paddle2Move();
           this.paddle1Move();
           if(this.collider.check_collision(this.ball,this.bottomBoundries))
           {
                _this.ballVelocityY *= -1;
                _this.ball.moveTo(_this.ballVelocityX,_this.ballVelocityY);
           };
        }
        moveBall(){
            let _this=this;
            _this.ball.moveTo(this.ballVelocityX,this.ballVelocityY);
        }
        paddle1Move(){
            let _this=this;
            if(_this.paddle1.graphics.position.x==this.app.view.width/2-50)
            {
                _this.paddle1.x=_this.app.view.width;
            }
            else{
                _this.paddle1.moveTo(this.ballVelocityX,this.paddle1.y);
            }
        }
        paddle2Move(){
            let position=this.app.renderer.plugins.interaction.mouse.global.x;
            if(position<0){
                position=0-this.paddle2.width/2-50;
            }
            if(position>this.app.view.width)
            {
                position =this.app.view.width-this.paddle2.width/2;
                console.log(this.paddle2.width);
            }
            this.paddle2.graphics.x=position;
            this.paddle2.graphics.x = position-this.paddle2.width/2;
            
        }
    }
}