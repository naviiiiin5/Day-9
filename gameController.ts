namespace IGpingpong{
   export class gameController{
      public app!: PIXI.Application;
      public scorePlayer1:any;
      scorePlayer2:any;
      public graphics!:PIXI.Graphics;
      constructor(){
         this.app=new PIXI.Application({width:800,height:800,transparent:true});
         this.graphics=new PIXI.Graphics();
         this.graphics.lineStyle(2,0xFFFFFF,1);
         this.graphics.beginFill(0x961251);
         this.graphics.drawRect(0,this.app.view.height/2,this.app.view.width,10);
         this.graphics.endFill();
         this.app.stage.addChild(this.graphics);
         this.app.view.style.display="block";
         this.app.view.style.marginLeft="500px";
         let style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#ffffff'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
        });
         this.scorePlayer1 = new PIXI.Text('0', style);
         this.scorePlayer1.x = this.app.view.width/2;
         this.scorePlayer1.y = this.app.view.height/2-40;
         this.app.stage.addChild(this.scorePlayer1);
         this.scorePlayer2 = new PIXI.Text('0', style);
         this.scorePlayer2.x = this.app.view.width/2;
         this.scorePlayer2.y = this.app.view.height/2;
         this.app.stage.addChild(this.scorePlayer2);
         document.body.appendChild(this.app.view);
         this.start();
         this.app.ticker.add(this.update.bind(this));
      }
      public start():void{}
      public update(delta:number):void{}
   }
}