"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {  
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "farwafaizan334@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Thanks for reaching out! I'll get back to you shortly.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Something went wrong while sending the message.",
    }
  }
}
