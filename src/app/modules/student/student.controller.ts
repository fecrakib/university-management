import { Student } from './student.model';
import { NextFunction,Response } from "express";
import { deletedStudentData, getAllStudentSFromDB, getSingleStudentFromDB} from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Request } from 'express';
import { catchAsync } from "../../utils/catchAsync";



export const getAllStudent = catchAsync(async(req,res)=>{
  const result = await getAllStudentSFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrieved successfully',
    data: result,
  });
})

export const getSingleStudentById = catchAsync(async (req,res)=>{
  const {studentId} =req.params;
  const result = await getSingleStudentFromDB (studentId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved successfully',
    data: result,
  });
})

// deleted student 

export const deletedStudent = catchAsync(async(req,res)=>{
  const {studentId}= req.params;
  const result = await deletedStudentData(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrieved successfully',
    data: result,
  });
})