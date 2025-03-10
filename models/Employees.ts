import mongoose from "mongoose";

enum Role {
  Admin = "Admin",
  Staff = "Staff",
}

const EmproyeeSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
});

export default mongoose.models.Employee ||
  mongoose.model("Employee", EmproyeeSchema);

export type Employee = mongoose.InferSchemaType<typeof EmproyeeSchema>;
export type Employees = Employee[];
export type EmployeeWithId = mongoose.InferSchemaType<typeof EmproyeeSchema> & {
  _id: string;
};
export type EmployeesWithId = EmployeeWithId[];

export type EmployeeWithoutId = mongoose.InferSchemaType<
  typeof EmproyeeSchema
> & {
  _id?: string;
};

export type EmployeesWithoutId = EmployeeWithoutId[];
