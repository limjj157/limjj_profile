import { careerData } from "@/lib/data/career";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(careerData);
}
