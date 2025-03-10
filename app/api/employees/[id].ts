import { NextApiRequest, NextApiResponse } from "next";
import Employee from "../../../models/Employees";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PUT":
      try {
        const employee = await Employee.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!employee) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: employee });
      } catch (error) {
        res.status(400).json({ success: false });
        throw error;
      }
      break;

    case "DELETE":
      try {
        const deletedEmployee = await Employee.deleteOne({ _id: id });
        if (!deletedEmployee) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
        throw error;
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
