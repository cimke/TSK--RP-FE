import { NextResponse } from "next/server";

// To handle a POST request to /api
// TODO: Not working - invesitgate
export async function POST(request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
