namespace IGpingpong{
   export class gameController{
      public app!: PIXI.Application;
      constructor(){
         this.app=new PIXI.Application({width:800,height:800,backgroundColor: 0x889978});
         document.body.appendChild(this.app.view);
         this.start();
         this.app.ticker.add(this.update.bind(this));
      }
      public start():void{}
      public update(delta:number):void{}
   }
}