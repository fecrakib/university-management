import  express  from "express"
import validateRequest from "../../middlewares/validateRequest"
import { createAcademicSemesterValidationSchema } from "./accademicSemester.validation"
import { createAcademicSemester, getAllSemesters, getSingleSemester, updateAcademicSemester } from "./accademicSemester.controlar"
import { getSingleStudentById } from "../student/student.controller"

const router = express.Router()

router.post ('/create-academic-semester', validateRequest(createAcademicSemesterValidationSchema), createAcademicSemester)

// get all semester

router.get('/',getAllSemesters)

//get single semester

router.get('/:semesterId',getSingleSemester)

//update semester
router.patch('/:semesterId',updateAcademicSemester)

export const AcademicRouter = router;