
import httpStatus from "http-status";

import { createAcademicDepartmentIntoDB, getAllAcademicDepartmentsFromDB, getSingleAcademicDepartmentFromDB, updateAcademicDepartmentFormDB } from "./academicDepartment.services";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";


export const createAcademicDepartment = catchAsync(async (req, res) => {
    const result =
      await createAcademicDepartmentIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department is created succesfully',
      data: result,
    });
  });
  
export  const getAllAcademicDepartments = catchAsync(async (req, res) => {
    const result =
      await getAllAcademicDepartmentsFromDB();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic departments are retrieved successfully',
      data: result,
    });
  });
  
export  const getSingleAcademicDepartment = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const result =
      await getSingleAcademicDepartmentFromDB(
        departmentId,
      );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department is retrieved succesfully',
      data: result,
    });
  });
  
export  const updateAcademicDepartment = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const result =
      await updateAcademicDepartmentFormDB(
        departmentId,
        req.body,
      );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department is updated succesfully',
      data: result,
    });
  });