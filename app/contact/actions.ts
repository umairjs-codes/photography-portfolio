"use server";

import { Resend } from "resend";

export type FormState = {
  ok: boolean;
  message: string;
  values?: { name: string; email: string; message: string };
};

export async function sendMessage(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot: real users never fill this hidden field, bots often do
  if (formData.get("website")) return { ok: true, message: "Thanks!" };

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (
    values.name.length < 2 ||
    !/^\S+@\S+\.\S+$/.test(values.email) ||
    values.message.length < 10 ||
    values.message.length > 3000
  ) {
    return {
      ok: false,
      message: "Please enter your name, a valid email, and a message of at least 10 characters.",
      values,
    };
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    return { ok: false, message: "Contact form isn't configured yet.", values };
  }

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: values.email,
    subject: `New message from ${values.name}`,
    text: `From: ${values.name} <${values.email}>\n\n${values.message}`,
  });

  if (error) {
    return { ok: false, message: "Something went wrong. Please try again.", values };
  }

  return {
    ok: true,
    message: "Thanks! I'll get back to you soon.",
    values: { name: "", email: "", message: "" },
  };
}