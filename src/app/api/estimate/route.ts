import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      phone,
      email,
      projectType,
      location,
      budget,
      requirement,
    } = data;

    if (!name || !phone || !email || !projectType || !location) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { data: emailData, error } = await resend.emails.send({
      from:
        process.env.EMAIL_FROM ||
        "Shriman Buildcon <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO || "shrimanbuildcon@gmail.com"],
      replyTo: email,
      subject: `New Project Query - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #222;">
          
          <h2 style="color: #071B33;">
            New Project Query
          </h2>

          <p>
            A new project enquiry has been submitted through the
            <strong>Shriman Buildcon</strong> website.
          </p>

          <hr />

          <h3>Customer Details</h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Phone:</strong> ${phone}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Project Type:</strong> ${projectType}
          </p>

          <p>
            <strong>Location:</strong> ${location}
          </p>

          <p>
            <strong>Budget:</strong> ${budget || "Not specified"}
          </p>

          <h3>Project Requirement</h3>

          <p style="white-space: pre-line;">
            ${requirement || "No additional requirement provided."}
          </p>

          <hr />

          <p style="font-size: 13px; color: #666;">
            This enquiry was submitted through the Shriman Buildcon website.
          </p>

        </div>
      `,
    });

    if (error) {
  console.error("RESEND ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      message: error.message || "Failed to send the email.",
    },
    { status: 500 }
  );
}

    return NextResponse.json({
      success: true,
      message: "Query submitted successfully.",
      id: emailData?.id,
    });
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting the query.",
      },
      { status: 500 }
    );
  }
}