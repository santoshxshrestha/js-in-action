import { NextResponse } from "next/server";

export const GET = async () => {
  return new NextResponse("Terminal API is running");
};
