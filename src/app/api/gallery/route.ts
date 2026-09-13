import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), "public", "gallery");

    const files = fs.readdirSync(galleryPath);

    const images = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map((file) => ({
        src: `/gallery/${encodeURIComponent(file)}`,
        name: file,
      }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Gallery error:", error);

    return NextResponse.json(
      { error: "Unable to load gallery images" },
      { status: 500 }
    );
  }
}