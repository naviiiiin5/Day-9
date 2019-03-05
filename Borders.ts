namespace IGpingpong{
    export class border implements iRigidBody{
        public x:number;
        public y:number;
        public width:number;
        public height:number;
        stage:any;
        graphics=new PIXI.Graphics();
        constructor(x:number,y:number,width:number,height:number,stage:any){
            this.x=x;
            this.y=y;
            this.width=width;
            this.height=height;
            this.stage=stage;
            this.draw();
        }
        draw(){
        this.graphics.beginFill(0xFFFFFF);
        this.graphics.lineStyle(2, 0x000000, 1);
        this.graphics.drawRect(this.x,this.y,this.width,this.height);
        this.graphics.endFill();
        this.stage.stage.addChild(this.graphics);
        }
        moveTo(){

        }
    }
}