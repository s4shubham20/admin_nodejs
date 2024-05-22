export class ApiError extends Error{
	constructor(statusCode=404, errors=[], message = "An error occurred"){
		super(message);
		this.statusCode = statusCode;
		this.errors = errors;
		this.success = false;
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}