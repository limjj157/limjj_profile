import { profileData } from "@/lib/data/profile";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(profileData);
}
