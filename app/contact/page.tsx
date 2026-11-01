import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <Reveal>
        <h1 className="font-display text-5xl md:text-7xl">Contact</h1>
        <p className="mt-4 text-neutral-400">
          Collaborations, prints, or a question about my edits? Send me a message.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <ContactForm />
      </Reveal>
    </div>
  );
}