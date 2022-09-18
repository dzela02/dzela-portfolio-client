import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface Data {
  message: string;
  error?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { subject, message, name, email } = req.body;
  const msg = {
    to: "dzelanovi@gmail.com",
    from: "marko@markodzelatovic.me",
    subject,
    name,
    text: `Message: ${message} Sender Email: ${email} Sender name: ${name}`,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error, message: "Imamo problem hjustone" });
  }
}
