import { NextResponse } from "next/server";

type ContactBody = {
  email?: string;
  issue?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody;

  if (!body.email || !body.issue) {
    return NextResponse.json(
      { message: "Please provide both email and issue details." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message:
      "Thanks. Your request has been received. For urgent issues, email support@ditch.app directly."
  });
}
