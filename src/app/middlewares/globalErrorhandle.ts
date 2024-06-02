import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';


export const globalErrorHandler:ErrorRequestHandler = (
err,req,res,next
)=>{
    const statusCode = 500;
  const message = 'Something went wrong!';

  let errorSources:

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
}