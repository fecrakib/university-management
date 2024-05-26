import { Router } from "express";

import { StudentRouters } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";


const router =Router();
const moduleRouter =[
    {
        path:'/users',
        route:UserRoutes,
    },
    {
        path:'/students',
        route:StudentRouters,
    }
]

moduleRouter.forEach((route)=>router.use(route.path,route.route))

export default router;