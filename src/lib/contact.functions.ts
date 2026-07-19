import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

const TO_EMAIL = "zrnexusservices@gmail.com";

function sanitize(s: string, max: number): string {
  return String(s ?? "").replace(/[\r\n]+/g, " ").slice(0, max).trim();
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(
    (data: {
      fullName: string;
      email: string;
      phone?: string;
      subject: string;
      message: string;
    }) => {
      if (!data?.fullName || !data?.email || !data?.subject || !data?.message) {
        throw new Error("Missing required fields");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        throw new Error("Invalid email");
      }
      return data;
    },
  )
  .handler(async ({ data }) => {
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error("Missing Gmail credentials in environment variables");
      throw new Error("Email service is not configured properly");
    }

    const fullName = sanitize(data.fullName, 100);
    const email = sanitize(data.email, 255);
    const phone = sanitize(data.phone ?? "", 30);
    const subject = sanitize(data.subject, 150);
    const message = String(data.message ?? "").slice(0, 4000);

    const body = [
      "New enquiry from zrnexus.co.uk contact form",
      "──────────────────────────────────────────",
      `Name:    ${fullName}`,
      `Email:   ${email}`,
      `Phone:   ${phone || "—"}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${fullName}" <${gmailUser}>`, // Must send from the authenticated user to avoid spam filters
        to: TO_EMAIL,
        replyTo: email, // Direct replies back to the user who filled the form
        subject: `[ZR Nexus Contact] ${subject}`,
        text: body,
      });
      return { ok: true };
    } catch (err) {
      console.error("Gmail send failed:", err);
      throw new Error("Failed to send email");
    }
  });
