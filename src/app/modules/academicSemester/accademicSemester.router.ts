import  express  from "express"
import validateRequest from "../../middlewares/validateRequest"
import { createAcademicSemesterValidationSchema } from "./accademicSemester.validation"
import { createAcademicSemester, getAllSemesters } from "./accademicSemester.controlar"

const router = express.Router()

router.post ('/create-academic-semester', validateRequest(createAcademicSemesterValidationSchema), createAcademicSemester)

// get all semester

router.get('/',getAllSemesters)

export const AcademicRouter = router;