namespace IGpingpong{
    export class Collider{
        check_collision(body1:iRigidBody,body2:iRigidBody,handler:any){
            if(!((body1.x>body2.x+body2.height) || (body1.x+body1.height<body2.y)||(body1.x+body1.width<body2.x)||(body1.y+body1.height<body2.y)))
            {
                handler();
            }
        }
    }
}