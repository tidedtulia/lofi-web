import { Music } from "@/utils/interface";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { MAX } from "@/utils/files";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type");
  const folder = "lofi/music-" + type;

  const { resources } = await cloudinary.v2.api.resources({
    type: "upload",
    resource_type: "video",
    quality: "auto:low",
    flags: "lossy",
    format: "mp3",
    prefix: folder,
    max_results: MAX,
  });

  if (resources) {
    let listMusics: Music[] = [];
    resources.forEach((rs: any, index: number) => {
      let nameResult: string = rs.public_id.substring(13);
      let nameArray: string[] = nameResult.split("_");
      let name = "";
      let src = rs["secure_url"];

      for (let i = 0; i < nameArray.length - 1; i++) {
        name += nameArray[i] + " ";
      }

      listMusics.push({ index, name, src });
    });
    listMusics = shuffleArray(listMusics);
    return NextResponse.json(listMusics);
  } else {
    return NextResponse.json("error");
  }
}

function shuffleArray(arr: Music[]): Music[] {
  const shuffledArray = [...arr]; // Tạo một bản sao của mảng ban đầu

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Hoán đổi hai phần tử ngẫu nhiên
  }

  return shuffledArray;
}
