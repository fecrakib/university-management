import { Router } from "express";

import { StudentRouters } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicRouter } from "../modules/academicSemester/accademicSemester.router";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";


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
    },
    {
        path:'/academic-department',
        route:AcademicDepartmentRoutes
    },
    {
        path:'/academic-faculty',
        route:AcademicFacultyRoutes
    }
]

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;