import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

export async function POST(request: Request) {
  const body: ContactFormData = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { success: false, message: "필수 항목을 모두 입력해주세요." },
      { status: 400 }
    );
  }

  // TODO: Prisma를 통한 DB 저장 구현
  console.log("Contact form submission:", body);

  return NextResponse.json({
    success: true,
    message: "메시지가 전송되었습니다.",
  });
}
