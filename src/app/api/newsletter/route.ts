import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.CONTACT_EMAIL ?? "madelinecanaday@kw.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  const { error } = await resend.emails.send({
    // TODO: replace with your verified domain email once set up in Resend
    from: "Maddy Canaday Website <onboarding@resend.dev>",
    to,
    subject: `New Newsletter Signup: ${email}`,
    html: `
      <h2>New Newsletter Subscriber</h2>
      <p><strong>Email:</strong> ${email}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
