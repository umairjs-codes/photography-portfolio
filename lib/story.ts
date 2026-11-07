export type Shot = { src?: string; title: string; caption?: string };
export type Stop = { title: string; tag?: string; text: string; src?: string };

const p = (name: string) => `/images/about/${name}.jpg`;

export const origin: Shot[] = [
  { src: p("origin-1"), title: "Over the potholes", caption: "My first creative shot, on a morning run." },
  { src: p("origin-2"), title: "Cousin's version", caption: "The same shot, recreated by my cousin." },
  { src: p("origin-3"), title: "Just a phone", caption: "Nothing fancy, just curiosity." },
];

export const journey: Stop[] = [
  { tag: "Step 01", title: "Facebook", text: "I posted my photographs for the first time, with a minimal edit in Snapseed." },
  { tag: "Step 02", title: "Lightroom", text: "I moved to Adobe Lightroom and started building a look of my own." },
  { tag: "Step 03", title: "@umairpixels_", text: "I created a separate Instagram page just for photography." },
  { tag: "Step 04", title: "A 14-year-old Sony", text: "For the past year I've been shooting on an old Sony digital camera." },
  { tag: "Step 05", title: "Pexels", text: "I started uploading my images to Pexels, where anyone can see and use them." },
  
];

export const heritage: Stop[] = [
  { tag: "Stop 01", title: "Jaipur", text: "Pink walls, carved windows and old gates in warm light.", src: p("heritage-jaipur") },
  { tag: "Stop 02", title: "Agra", text: "Mughal stone and river light, away from the usual postcard angle.", src: p("heritage-agra-v1") },
  { tag: "Stop 03", title: "Delhi", text: "Old lanes and layered monuments, centuries side by side.", src: p("heritage-delhi-v2") },
  { tag: "Stop 04", title: "Lucknow", text: "Nawabi arches and old-city streets.", src: p("heritage-lucknow-v1") },
  { tag: "Stop 05", title: "Kashmir", text: "Where heritage meets the mountains.", src: p("heritage-kashmir") },
];

export const nature: Shot[] = [
  { src: p("nature-sunlight"), title: "Sunlight", caption: "Golden edges and long shadows." },
  { src: p("nature-clouds"), title: "Clouds", caption: "Big skies and moving weather." },
  { src: p("nature-sunsets"), title: "Sunsets", caption: "The last light of the day." },
  { src: p("nature-rain"), title: "Rain", caption: "Droplets, reflections and moody grey." },
];

export const landscapes: Shot[] = [
  { src: p("landscape-kashmir"), title: "Kashmir", caption: "Valleys, meadows and snow peaks." },
  { src: p("landscape-nainital"), title: "Nainital", caption: "Lake, hills and morning mist." },
];

export const design: Shot[] = [
  { src: p("design-1"), title: "Type meets image", caption: "Fonts that talk to the photograph." },
  { src: p("design-2"), title: "Words on frames", caption: "Design work built on my own shots." },
];

export const festivals: Shot[] = [
  { src: p("festival-eid"), title: "Eid", caption: "Joy, colour and family." },
  { src: p("festival-ramadan"), title: "Ramadan", caption: "Quiet evenings and shared meals." },
  { src: p("festival-festive"), title: "Festive moments", caption: "Lights, crowds and celebration." },
];

export const styles: Shot[] = [
  { src: p("style-macro"), title: "Macro", caption: "Tiny worlds, up close." },
  { src: p("style-night-v1"), title: "Night slow shutter", caption: "Light trails and long exposures after dark." },
];

export const street: Shot[] = [
  { src: p("street-railways-v1"), title: "Railways", caption: "Platforms, tracks and waiting." },
  { src: p("street-life"), title: "Street life", caption: "Everyday people in everyday light." },
  { src: p("street-foggy-v1"), title: "Winter foggy nights", caption: "Streets gone soft and quiet." },
];
export const portraits: string[] = [
  p("portrait-1"),
  // p("portrait-2"),
  // p("portrait-3"),
];

export const kit = [
  { label: "Camera", value: "Sony digital camera", note: "14 years old, and my camera for the past year." },
  { label: "Editing", value: "Adobe Lightroom", note: "After starting out with Snapseed on my phone." },
  { label: "Shared on", value: "Instagram & Pexels", note: "@umairpixels_ and my Pexels profile." },
  { label: "Started with", value: "A phone", note: "Morning runs, right after the first COVID wave." },
];