"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendMessage, type FormState } from "@/app/contact/actions";

const initial: FormState = { ok: false, message: "" };

const field =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-neutral-100 placeholder:text-neutral-500 focus:border-accent focus:outline-none";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-neutral-950 transition-transform hover:scale-105 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useActionState(sendMessage, initial);

  return (
    <form action={action} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-neutral-400">Name</label>
        <input id="name" name="name" required defaultValue={state.values?.name} className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-neutral-400">Email</label>
        <input id="email" name="email" type="email" required defaultValue={state.values?.email} className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-neutral-400">Message</label>
        <textarea id="message" name="message" rows={6} required defaultValue={state.values?.message} className={field} />
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <SubmitButton />

      {state.message && (
        <p role="status" className={state.ok ? "text-emerald-400" : "text-red-400"}>
          {state.message}
        </p>
      )}
    </form>
  );
}