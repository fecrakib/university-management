import { Router } from "express";

import { StudentRouters } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicRouter } from "../modules/academicSemester/accademicSemester.router";


const router =Router();
const moduleRouters =[
    {
        path:'/users',
        route:UserRoutes,
    },
    {
        path:'/students',
        route:StudentRouters,
    },
    {
        path:'/academic-semesters',
        route:AcademicRouter
    }
]

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;