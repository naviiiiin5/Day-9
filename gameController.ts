namespace IGpingpong{
   export class gameController{
      public app!: PIXI.Application;
      constructor(){
         this.app=new PIXI.Application(800,800);
         document.body.appendChild(this.app.view);
         this.start();
         this.app.ticker.add(this.update.bind(this));
      }
      public start():void{}
      public update(delta:number):void{}
   }
}