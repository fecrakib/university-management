import { z } from 'zod';
import { AcademicSemesterName, AcademicSemesterCode, Months } from './academicSemester.constant';

export const createAcademicSemesterValidationSchema = z.object({
    body: z.object({
      name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
      year: z.string(),
      code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
      startMonth: z.enum([...Months] as [string, ...string[]]),
      endMonth: z.enum([...Months] as [string, ...string[]]),
    }),
  });
