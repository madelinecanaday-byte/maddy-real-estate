import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.CONTACT_EMAIL ?? "madelinecanaday@kw.com";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name, email, phone, address, city,
    bedrooms, bathrooms, squareFeet, yearBuilt,
    condition, improvements, timeline,
  } = body;

  const { error } = await resend.emails.send({
    // TODO: replace with your verified domain email once set up in Resend
    from: "Maddy Canaday Website <onboarding@resend.dev>",
    to,
    subject: `Home Valuation Request: ${address}, ${city}`,
    html: `
      <h2>Home Valuation Request</h2>
      <h3>Contact Info</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <h3>Property Details</h3>
      <p><strong>Address:</strong> ${address}, ${city}</p>
      <p><strong>Bedrooms:</strong> ${bedrooms || "Not specified"}</p>
      <p><strong>Bathrooms:</strong> ${bathrooms || "Not specified"}</p>
      <p><strong>Square Feet:</strong> ${squareFeet || "Not specified"}</p>
      <p><strong>Year Built:</strong> ${yearBuilt || "Not specified"}</p>
      <p><strong>Condition:</strong> ${condition || "Not specified"}</p>
      <p><strong>Selling Timeline:</strong> ${timeline || "Not specified"}</p>
      ${improvements ? `<p><strong>Recent Improvements:</strong> ${improvements}</p>` : ""}
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
