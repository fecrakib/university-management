


import express from 'express';

import { createAcademicFacultyValidationSchema, updateAcademicFacultyValidationSchema } from './academicFaculty.validation';
import { createAcademicFaculty, getAllAcademicFaculties, getSingleAcademicFaculty, updateAcademicFaculty } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';


const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    createAcademicFacultyValidationSchema,
  ),
  createAcademicFaculty,
);

router.get('/:facultyId', getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validateRequest(
    updateAcademicFacultyValidationSchema,
  ),
  updateAcademicFaculty,
);

router.get('/', getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;