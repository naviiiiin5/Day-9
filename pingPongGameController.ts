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
        leftBoundries!:border;
        private ballVelocityX=2;
        private ballVelocityY=2;
        collider!:Collider;
    
        start():void{
            this.paddle2=new Paddle(0,this.app.view.height-40,30,200,this.app);
            this.paddle1=new Paddle(this.app.view.width/2-50,5,30,200,this.app);
            this.ball=new Ball(this.app.view.width/2-50,this.app.view.height/2,20,this.app);
            this.topBoundries=new border(0,0,800-2,1,this.app);
            this.rightBoundries=new border(800-2,0,5,800-2,this.app);
            this.bottomBoundries=new border(0,800-2,800-2,5,this.app);
            this.leftBoundries=new border(0,0,1,800-2,this.app);
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
               
           }
           if(this.collider.check_collision(this.ball,this.rightBoundries))
           {
                _this.ballVelocityX *= -1;
                
           }
           if(this.collider.check_collision(this.ball,this.topBoundries))
           {
                _this.ballVelocityY *= -1;
               
           }
           if(this.collider.check_collision(this.ball,this.leftBoundries))
           {
                _this.ballVelocityX *= -1;
               
           }
           if(this.collider.check_collision(this.ball,this.paddle1))
           {
                _this.ballVelocityY *= -1;
               
           }
           if(this.collider.check_collision(this.ball,this.paddle2))
           {
                _this.ballVelocityY *= -1;
                
           }
        }
        moveBall(){
            let _this=this;
            _this.ball.moveTo(this.ballVelocityX,this.ballVelocityY);
        }
        paddle1Move(){
            let _this=this;
             _this.paddle1.moveTo(this.ballVelocityX,this.paddle1.y);

        }
        paddle2Move(){
            let mousePosition=this.app.renderer.plugins.interaction.mouse.global.x;
            if(mousePosition<0){
                mousePosition=0;
            }
            if(mousePosition>this.app.view.width)
            {
                mousePosition =this.app.view.width; 
            }
            this.paddle2.x=mousePosition;
            this.paddle2.graphics.position.x = mousePosition;
        }
        
    }
}