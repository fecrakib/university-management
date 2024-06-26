import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createAcademicSemesterIntoDB, getAllAcademicSemesterFromDb, getSingleSemesterFromDb, updateSemesterInDb } from "./accamedicSemester.server";
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

 //get all semester
  export const getAllSemesters =  catchAsync(async (req,res)=>{
    const result = await getAllAcademicSemesterFromDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semesters are retrieved successfully',
      data: result,
    });

  })

 //get single semester by id
 
 export const getSingleSemester = catchAsync(async(req,res)=>{

  const {semesterId}=req.params;
  const result = await getSingleSemesterFromDb(semesterId)
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Academic semester not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });

 })

 //update semester

 export const updateAcademicSemester =  catchAsync(async(req,res)=>{
  const {semesterId}= req.params;
  const result = await updateSemesterInDb(semesterId,req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});
