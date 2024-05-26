



import { Student } from "./student.model"
//get all students 
export const getAllStudentSFromDB = async() =>{
    const result = await Student.find();
    return result; 
}

//get single student

export const getSingleStudentFromDB = async (id:string )=>{
    const result = await Student.findById(id);
    return result;
}