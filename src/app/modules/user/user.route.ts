import express from 'express'
import { createStudent } from "./user.controller";
import validateRequest from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';


const router =express.Router();
router.post('/create-student',validateRequest(createStudentValidationSchema),createStudent)

export const UserRoutes =router;