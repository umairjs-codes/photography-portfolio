export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-neutral-400 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
        <p>© {new Date().getFullYear()} Syed Umair Ali. All rights reserved.</p>
        <a
          href="https://www.pexels.com/@umairpixels/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          Pexels
        </a>
      </div>
    </footer>
  );
}