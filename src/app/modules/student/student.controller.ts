import { NextFunction,Response } from "express";
import { getAllStudentSFromDB, getSingleStudentFromDB } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Request } from 'express';



export const getAllStudent = async (req:Request,res:Response,next:NextFunction)=>{
  try {
    const result = await getAllStudentSFromDB();

    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Student is retrieved successfully',
      data:result
    })

  } catch (error) {
    next(error)
  }
}

export const getSingleStudentById = async (req:Request, res:Response,next:NextFunction)=>{

  try {
    const { studentId } = req.params;
    const result = await getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error)
  }

}