

//get all students 

import { Student } from "./student.model"

export const getAllStudentSFromDB = async() =>{
    const result = await Student.find();
    return result; 
}