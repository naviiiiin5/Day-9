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
            this.graphics.lineStyle(1, 0xFF00FF);
            this.graphics.beginFill(0x961251);
            this.graphics.drawRoundedRect(this.x,this.y,this.width,this.height,15);
            this.graphics.endFill();
            this.stage.stage.addChild(this.graphics);
         }
         moveTo(x:number,y:number){
            this.x+=x;
            this.y=y;
            this.graphics.x+=x;
            this.graphics.y=y;
            
         }
     }
}