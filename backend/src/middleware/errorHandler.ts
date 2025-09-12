import { NextFunction, Request, Response } from "express";

const errorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log("Error occurred:", err.message);
	console.log("Request path:", req.path);
	console.log("Request method:", req.method);

	res.status(err.status || 500).json({
		success: false,
		error: err.message || "Internal Server Error",
	});
};

export default errorHandler;
