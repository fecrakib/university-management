import  express  from "express"
import validateRequest from "../../middlewares/validateRequest"
import { createAcademicSemesterValidationSchema } from "./accademicSemester.validation"
import { createAcademicSemester } from "./accademicSemester.controlar"

const router = express.Router()

router.post ('/create-academic-semester', validateRequest(createAcademicSemesterValidationSchema), createAcademicSemester)

export const AcademicRouter = router;