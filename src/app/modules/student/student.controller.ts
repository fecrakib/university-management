import { NextFunction,Response } from "express";
import { getAllStudentSFromDB } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";



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