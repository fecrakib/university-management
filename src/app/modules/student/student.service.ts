



import { Student } from "./student.model"
//get all students 
export const getAllStudentSFromDB = async() =>{
    const result = await Student.find()
    return result; 
}

//get single student

export const getSingleStudentFromDB = async (id:string )=>{
    const result = await Student.findById(id);
    return result;
}

//single data deleted

export const deletedStudentData = async (id:string)=>{
    const result = await Student.findByIdAndDelete(id);
    return result;
}