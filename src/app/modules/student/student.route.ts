import { Router } from 'express';
import express from 'express';

const router =express.Router();
router.get('/:studentId') // for single  student get
router.delete('/:studentId')
router.get('/',) //get all student

export const StudentRouters =router;