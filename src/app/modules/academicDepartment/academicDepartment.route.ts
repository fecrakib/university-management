
import { Router } from 'express';
import { createAcademicDepartmentValidationSchema, updateAcademicDepartmentValidationSchema } from './academicDepartmentValidation';

import { createAcademicDepartment, getAllAcademicDepartments, getSingleAcademicDepartment, updateAcademicDepartment } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';



const router = Router();

router.post(
  '/create-academic-department',
   validateRequest(
    createAcademicDepartmentValidationSchema,
   ),
  createAcademicDepartment,
);

router.get(
  '/:departmentId',
  getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(
    updateAcademicDepartmentValidationSchema,
  ),
updateAcademicDepartment,
);

router.get('/', getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;