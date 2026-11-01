export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
};

export const photos: Photo[] = [
  { src: "/images/gallery/photo-1.jpg", alt: "Mountain valley at sunrise", width: 2000, height: 1333, category: "Landscape" },
  { src: "/images/gallery/photo-2.jpg", alt: "Birds in a grey sky", width: 1333, height: 2000, category: "Monochrome" },
  // add the rest, one object per photo
];