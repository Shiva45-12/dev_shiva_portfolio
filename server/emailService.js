import nodemailer from 'nodemailer';

const GMAIL_USER = process.env.GMAIL_USER || 'sv575014@gmail.com';
const GMAIL_APP_PASS = process.env.GMAIL_APP_PASS || 'qnmpvaroaktcuqaj';

// Gmail SMTP Transporter using user credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASS,
  },
});

export function generateEmailHtml({ name, email, message }) {
  const istDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #06040d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #06040d; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #0e0720; border: 1px solid #7e22ce; border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px rgba(126, 34, 206, 0.3);">
          
          <!-- Gradient Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #7e22ce 0%, #9333ea 50%, #c026d3 100%); padding: 36px 30px; text-align: center;">
              <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2.5px; color: #fae8ff; margin-bottom: 8px;">
                ⚡ Portfolio Inquiry Notification
              </div>
              <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                New Message Received!
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 13px; color: #f3e8ff;">
                A visitor has sent an inquiry through your portfolio website.
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px 30px;">
              
              <!-- Sender Details Grid -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <!-- Sender Name Box -->
                  <td width="48%" style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 14px; padding: 14px 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #c084fc; letter-spacing: 1px;">
                      👤 Sender Name
                    </div>
                    <div style="font-size: 15px; font-weight: 700; color: #ffffff; margin-top: 4px;">
                      ${name}
                    </div>
                  </td>
                  <td width="4%"></td>
                  <!-- Sender Email Box -->
                  <td width="48%" style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 14px; padding: 14px 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #c084fc; letter-spacing: 1px;">
                      ✉️ Sender Email
                    </div>
                    <div style="font-size: 15px; font-weight: 700; color: #ffffff; margin-top: 4px;">
                      <a href="mailto:${email}" style="color: #e879f9; text-decoration: none; word-break: break-all;">
                        ${email}
                      </a>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Message Content Section -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #c084fc; letter-spacing: 1.5px; margin-bottom: 10px;">
                  💬 Message Content:
                </div>
                <div style="background: #140b2d; border-left: 4px solid #a855f7; border-radius: 0 14px 14px 0; padding: 20px 22px; font-size: 14px; line-height: 1.7; color: #f3f0ff; white-space: pre-wrap; font-family: inherit;">
${message}
                </div>
              </div>

              <!-- Quick Action Reply Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px; margin-bottom: 10px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry%20from%20Shiva%20Vishwakarma" style="display: inline-block; background: linear-gradient(135deg, #9333ea, #c026d3); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 34px; border-radius: 50px; box-shadow: 0 8px 25px rgba(168, 85, 247, 0.55); letter-spacing: 0.3px;">
                      Reply Directly to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Metadata -->
          <tr>
            <td style="background: #080314; border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 22px 30px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8; font-weight: 500;">
                Sent automatically from the contact section of <strong style="color: #c084fc;">Shiva Vishwakarma Portfolio</strong>.
              </p>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #64748b;">
                📅 Received: ${istDate} (IST)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function sendContactEmail({ name, email, message }) {
  if (!name || !email || !message) {
    throw new Error('Name, email, and message are required.');
  }

  const htmlContent = generateEmailHtml({ name, email, message });

  const mailOptions = {
    from: `"Shiva Portfolio" <${GMAIL_USER}>`,
    to: GMAIL_USER, // User's email
    replyTo: email, // Direct reply to the sender
    subject: `🚀 New Portfolio Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}
