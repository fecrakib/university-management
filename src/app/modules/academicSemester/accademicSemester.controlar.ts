import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createAcademicSemesterIntoDB } from "./accamedicSemester.server";
import { Request, Response, NextFunction } from 'express';
import { createAcademicSemesterValidationSchema } from "./accademicSemester.validation";


export const createAcademicSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await createAcademicSemesterIntoDB(
        req.body
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is created successfully',
      data: result,
    });
  });