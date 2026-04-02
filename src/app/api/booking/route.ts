import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.CONTACT_EMAIL ?? "madelinecanaday@kw.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, meetingType, preferredDate, preferredTime, notes } = body;

  const { error } = await resend.emails.send({
    // TODO: replace with your verified domain email once set up in Resend
    from: "Maddy Canaday Website <onboarding@resend.dev>",
    to,
    subject: `New Booking Request: ${name} — ${meetingType}`,
    html: `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Meeting Type:</strong> ${meetingType}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate}</p>
      <p><strong>Preferred Time:</strong> ${preferredTime}</p>
      ${notes ? `<hr /><p><strong>Notes:</strong></p><p>${notes.replace(/\n/g, "<br>")}</p>` : ""}
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
