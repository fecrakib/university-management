
import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";


export const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
    const result = await AcademicDepartment.create(payload);
    return result;
  };
  
export  const getAllAcademicDepartmentsFromDB = async () => {
    const result = await AcademicDepartment.find()
    return result;
  };
  
export  const getSingleAcademicDepartmentFromDB = async (id: string) => {
    const result =
      await AcademicDepartment.findById(id)
    return result;
  };
export const updateAcademicDepartmentFormDB = async(
    id:string,
    payload:Partial <TAcademicDepartment>
)=>{
    const result = await AcademicDepartment.findOneAndUpdate(
        {_id:id},
        payload,
        {
            new:true,
        }
    );
    return result;
}  