import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";
import { StudentRouters } from "../modules/student/student.route";


const router =Router();
const moduleRouter =[
    {
        path:'/users',
        route:UserRouter,
    },
    {
        path:'/students',
        route:StudentRouters,
    }
]

moduleRouter.forEach((route)=>router.use(route.path,route.route))

export default router;