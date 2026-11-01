import { photos as localPhotos, type Photo } from "@/lib/photos";

type PexelsMedia = {
  id: number;
  width: number;
  height: number;
  alt: string | null;
  src: { large2x: string };
};

export async function getPhotos(): Promise<Photo[]> {
  const key = process.env.PEXELS_API_KEY;
  const collection = process.env.PEXELS_COLLECTION_ID;
  if (!key || !collection) return localPhotos;

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/collections/${collection}?type=photos&per_page=80`,
      {
        headers: { Authorization: key },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return localPhotos;

    const data: { media: PexelsMedia[] } = await res.json();
    return data.media.map((m) => ({
      src: m.src.large2x,
      alt: m.alt || "Photograph by Umair Ali",
      width: m.width,
      height: m.height,
      category: "Pexels",
    }));
  } catch {
    return localPhotos;
  }
}