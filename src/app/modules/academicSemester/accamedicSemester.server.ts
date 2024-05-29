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

  // single semester get form db

  export const getSingleSemesterFromDb = async (id:string)=>{
    return await AcademicSemester.findById(id)
  }

  // update semester
export const updateSemesterInDb = async (id:string,payload:Partial<TAcademicSemester>)=>
  {
if(
  payload.name &&
  payload.code &&
  academicSemesterNameCodeMapper[payload.name]!==payload.code
){
  throw  new Error ('Invalid Semester code')
}
const result = await AcademicSemester.findOneAndUpdate({_id:id},payload,{
  new:true,
})
return result;
  }