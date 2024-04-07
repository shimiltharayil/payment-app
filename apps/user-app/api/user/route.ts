import { NextResponse } from "next/server";
import { createUserForm } from "../../lib/zod/validations";

export async function POST(request: Request, response: Response) {
  const body = await request.json();
  const parsedForm = createUserForm.safeParse(body);
  if (!parsedForm.success) {
    return NextResponse.json(parsedForm.error, {
      status: 422,
    });
  }
}
export async function GET() {
  return NextResponse.json({ message: "Jee" });
}
