import { NextFunction,Request,Response } from "express-serve-static-core";
import { createStudentIntoDB } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";



export const createStudent =async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const { password, student: studentData } = req.body;
       
        const result =await createStudentIntoDB(password,studentData)

        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"Student is create successfully",
            data:result,
        })

    } catch (error) {
        next(error)
        
    }
}