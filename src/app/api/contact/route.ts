import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.CONTACT_EMAIL ?? "madelinecanaday@kw.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, interest, message } = body;

  const { error } = await resend.emails.send({
    // TODO: replace with your verified domain email once set up in Resend
    from: "Maddy Canaday Website <onboarding@resend.dev>",
    to,
    subject: `New Contact: ${name} — ${interest || "General Inquiry"}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Interested in:</strong> ${interest || "Not specified"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
