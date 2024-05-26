import { Router } from 'express';
import express from 'express';
import { getAllStudent, getSingleStudentById } from './student.controller';

const router =express.Router();

router.get('/',getAllStudent) //get all student

router.get('/:studentId',getSingleStudentById) //get single
 

export const StudentRouters =router;