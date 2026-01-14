import { NextResponse } from "next/server";

export function GET(req: Request) {
  return new NextResponse("Terminal API is running");
}
