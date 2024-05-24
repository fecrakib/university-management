
import {z} from 'zod';

export const userValidationSchema = z.object({
    id:z.string(),

    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .max(20, { message: 'Password can not be more than 20 characters' }),
   needsPasswordChange:z.boolean().optional().default(true),
   role:z.enum (['student','faculty','admin']),
   status:z.enum(['inprogress','blocked']),
   isDeleted:z.boolean().optional().default(false)
      
  });
  