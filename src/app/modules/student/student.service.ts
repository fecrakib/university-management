import { query } from 'express';

import mongoose from "mongoose";
import { Student } from "./student.model"
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { User } from "../user/user.model";
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchableFields } from './student.constant';
//get all students 
export const getAllStudentSFromDB = async(query:Record<string,unknown>) =>{


    const studentQuery  = new QueryBuilder(
        Student.find().populate('admissionSemester') 
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    }),
    query,
    ).search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

    const result = await studentQuery.modelQuery;
  return result;
   
}

//get single student

export const getSingleStudentFromDB = async (id:string )=>{

    const result = await Student.findOne({ id })
    return result;

}

//single data deleted

export const deletedStudentData = async (id:string)=>{
    const session = await mongoose.startSession();
    try {
        
   
        session.startTransaction();
    
        const deleteStudent = await  Student.findOneAndUpdate(
            {id},
            {isDeleted:true},
            {new:true,session}
        )
        if(!deleteStudent){
            throw new AppError(httpStatus.BAD_REQUEST,"Failed to delete student")
        }
    
        const deleteUser = await User.findOneAndUpdate(
            {id},
            {isDeleted:true},
            {new:true, session}
    
        )
    
        if(!deleteUser){
            throw new AppError (httpStatus.BAD_REQUEST,'Failed to delete user')
        }
    
        await session.commitTransaction();
        await session.endSession();
        return deleteStudent;
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error ('Failed to delete student')
    }
  
}