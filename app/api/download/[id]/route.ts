import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { presets } from "@/lib/presets";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const preset = presets.find((p) => p.id === id);

  if (!preset) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const filePath = path.join(process.cwd(), "content", "presets", preset.file);
    const data = await fs.readFile(filePath);

    console.log(`[download] ${preset.id} at ${new Date().toISOString()}`);

    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${preset.file}"`,
      },
    });
  } catch {
    return new NextResponse("File unavailable", { status: 500 });
  }
}