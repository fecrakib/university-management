
import { createStudentIntoDB } from "./user.service";

import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";

export const createStudent =async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {password,student:studentData}=req.body;
    const result = await createStudentIntoDB(password,studentData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student is created successfully',
        data: result,
      });
    
} catch (error) {
    next(error)
}
}