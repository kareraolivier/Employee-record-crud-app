import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import Employee from "../../../models/Employees";
export async function GET() {
  try {
    await dbConnect();
    const employees = await Employee.find({});
    return NextResponse.json(
      { success: true, data: employees },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const employee = await Employee.create(body);
    return NextResponse.json(
      { success: true, data: employee },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
