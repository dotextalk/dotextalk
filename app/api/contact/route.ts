import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone = "",
      company = "",
      service = "",
      budget = "",
      message,
      website = "",
    } = body ?? {};

    // Honeypot: silently accept bot submissions without sending email.
    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !EMAIL_RE.test(email.trim()) ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Please complete the required fields with valid information." },
        { status: 400 },
      );
    }

    if (name.trim().length > 120 || email.trim().length > 254 || message.trim().length > 5000) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL || "dotex.software@gmail.com";

    if (!apiKey || !from) {
      console.error("Contact form email configuration is missing.");
      return NextResponse.json(
        { error: "The contact service is temporarily unavailable. Please use WhatsApp or email instead." },
        { status: 503 },
      );
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(String(phone).trim());
    const safeCompany = escapeHtml(String(company).trim());
    const safeService = escapeHtml(String(service).trim());
    const safeBudget = escapeHtml(String(budget).trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email.trim(),
        subject: `New project enquiry from ${name.trim()}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#18181b;max-width:680px">
            <h2 style="margin-bottom:24px">New DOTEX.TALK Project Enquiry</h2>
            <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
              <tr><td style="padding:8px 0;font-weight:700;width:140px">Name</td><td style="padding:8px 0">${safeName}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Email</td><td style="padding:8px 0">${safeEmail}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Phone / WhatsApp</td><td style="padding:8px 0">${safePhone || "—"}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Company</td><td style="padding:8px 0">${safeCompany || "—"}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Service</td><td style="padding:8px 0">${safeService || "—"}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Budget</td><td style="padding:8px 0">${safeBudget || "—"}</td></tr>
            </table>
            <h3>Project details</h3>
            <p style="background:#f4f4f5;padding:16px;border-radius:8px">${safeMessage}</p>
            <p style="margin-top:24px;color:#71717a;font-size:13px">Submitted through dotextalk.com/contact</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend API error:", errorBody);
      return NextResponse.json(
        { error: "We could not send your enquiry. Please try again or contact us on WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
