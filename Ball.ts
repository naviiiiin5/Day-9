namespace IGpingpong{
    export class Ball implements iRigidBody{
        public x:number;
        public y:number;
        public height:number;
        public width:number;
        stage:any;
        public radius:number;
        public graphics=new PIXI.Graphics();
        constructor(x:number,y:number,radius:number,stage:any)
        {
            this.x=x;
            this.y=y;
            this.height=2*radius;
            this.width=2*radius;
            this.stage=stage;
            this.radius=radius;
            this.draw();
         }
         draw(){
            this.graphics.beginFill(0x961251);
            this.graphics.drawCircle(this.x,this.y,this.radius);
            this.graphics.endFill();
            this.graphics.pivot.set(-this.radius,-this.radius);
            this.stage.stage.addChild(this.graphics);
         }
         moveTo(x:number,y:number){
            this.x+=x;
            this.y+=y;
            this.graphics.x+=x;
            this.graphics.y+=y;  
        }
    }
}