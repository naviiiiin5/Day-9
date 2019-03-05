namespace IGpingpong{
   export class gameController{
      public app!: PIXI.Application;
      constructor(){
         this.app=new PIXI.Application({width:800,height:800,transparent:true});
         this.app.view.style.display="block";
         this.app.view.style.marginLeft="500px";
         document.body.appendChild(this.app.view);
         this.start();
         this.app.ticker.add(this.update.bind(this));
      }
      public start():void{}
      public update(delta:number):void{}
   }
}