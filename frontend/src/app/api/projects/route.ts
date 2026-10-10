import { projectsData } from "@/lib/data/projects";
import { NextResponse } from "next/server";
import type { Industry } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const industry = searchParams.get("industry") as Industry | null;

  const filtered = industry
    ? projectsData.filter((p) => p.industry === industry)
    : projectsData;

  return NextResponse.json(filtered);
}
