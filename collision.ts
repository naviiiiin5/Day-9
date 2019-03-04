namespace IGpingpong{
    export class Collider{
        check_collision(body1:iRigidBody,body2:iRigidBody){
        if(body1.x < body2.x + body2.width &&
             body1.x + body1.width > body2.x &&
                body1.y < body2.y + body2.height &&
                body1.height + body1.y > body2.y)
            {   
                return true;  
            }
    }
}
}