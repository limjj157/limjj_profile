import { skillsData } from "@/lib/data/skills";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(skillsData);
}
