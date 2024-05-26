import { NextFunction } from 'express';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemester.constant';
import { TAcademicSemester } from './accademicSemester.interface';
import { Schema, model } from 'mongoose';


const academicSemesterSchema = new Schema <TAcademicSemester>({
    name:{
        type:String,
        required:true,
        enum:AcademicSemesterName,
    },
    year:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true,
        enum:AcademicSemesterCode,
    },
    startMoth:{
        type:String,
        required:true,
        enum:Months
    },

},{
    timestamps:true
}
)

academicSemesterSchema.pre('save',async function (Next) {
    const isSemesterExists =await AcademicSemester.findOne({
        year:this.year,
        name:this.name
    });
    if(isSemesterExists){
        throw new Error ('Semester is already exists !')
    }
})


export const AcademicSemester = model <TAcademicSemester>(
'AcademicSemester',
academicSemesterSchema
)