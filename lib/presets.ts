export type Preset = {
  id: string;
  name: string;
  type: "Lightroom Preset";
  description: string;
  file: string;
  preview: string;
};

export const presets: Preset[] = [
  {
    id: "cinematic-night-teal-orange",
    name: "Cinematic Night Teal Orange",
    type: "Lightroom Preset",
    description: "Teal shadows and warm orange highlights for night and city scenes.",
    file: "cinematic-night-teal-orange.xmp",
    preview: "/images/presets/cinematic-night-teal-orange.jpg",
  },
  {
    id: "earth-cinematic",
    name: "Earth Cinematic",
    type: "Lightroom Preset",
    description: "Rich earthy tones and filmic contrast for landscapes.",
    file: "earth-cinematic.xmp",
    preview: "/images/presets/earth-cinematic-v2.jpg",
  },
  {
    id: "rainy-moody",
    name: "Rainy Moody",
    type: "Lightroom Preset",
    description: "Muted, cool and atmospheric, made for rain and overcast days.",
    file: "rainy-moody.xmp",
    preview: "/images/presets/rainy-moody.jpg",
  },
  {
    id: "night-slow-shutter-cool",
    name: "Night Slow Shutter Cool",
    type: "Lightroom Preset",
    description: "Cool tones that make long-exposure night shots clean and smooth.",
    file: "night-slow-shutter-cool.xmp",
    preview: "/images/presets/night-slow-shutter-cool.jpg",
  },
];