namespace IGpingpong {
     export class Paddle implements iRigidBody{
         x:number;
         y:number;
         height:number;
         width:number;
         stage:any;
         graphics=new PIXI.Graphics();
         constructor(x:number,y:number,height:number,width:number,stage:any)
         {
                this.x=x;
                this.y=y;
                this.height=height;
                this.width=width;
                this.stage=stage;
                this.draw();
         }
         draw(){
            this.graphics.lineStyle(2, 0xFF00FF, 1);
            this.graphics.beginFill(0x650A5A,0.25);
            this.graphics.drawRect(this.x,this.y,this.width,this.height);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
         }
         moveTo(x:number,y:number){
            
         }
     }
}