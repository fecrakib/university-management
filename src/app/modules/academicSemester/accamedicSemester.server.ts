import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./accademicSemester.interface";
import { AcademicSemester } from "./accademicSemester.model";

export const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
      throw new Error('Invalid Semester Code');
    }
  
    const result = await AcademicSemester.create(payload);
    return result;
  };
  

  //get all semester form db

  export const getAllAcademicSemesterFromDb = async ()=>{
    return await AcademicSemester.find();
  }