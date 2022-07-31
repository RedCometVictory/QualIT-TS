class ErrorHandler extends Error {
  constructor(statusCode, message) {
    // super();
    this.status = "error";
    this.statusCode = statusCode;
    this.message = message;
  }
}

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const handleError = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode || 500).json({
    status: "error",
    statusCode: statusCode || 500,
    message: statusCode === 500 ? "Sever error..." : err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
  next();
}
module.export = { ErrorHandler, notFound, handleError };