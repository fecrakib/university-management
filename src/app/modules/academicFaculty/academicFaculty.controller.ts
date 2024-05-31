import httpStatus from "http-status";

import { createAcademicFacultyIntoDB, getAllAcademicFacultiesFromDB, getSingleAcademicFacultyFromDB, updateAcademicFacultyIntoDB } from "./academicFaculty.services";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";




export const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await createAcademicFacultyIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is created succesfully',
    data: result,
  });
});

export const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await getAllAcademicFacultiesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculties are retrieved successfully',
    data: result,
  });
});

export const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await getSingleAcademicFacultyFromDB(facultyId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is retrieved succesfully',
    data: result,
  });
});

export const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await updateAcademicFacultyIntoDB(
    facultyId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is updated succesfully',
    data: result,
  });
});
