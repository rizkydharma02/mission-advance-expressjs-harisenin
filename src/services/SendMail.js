import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// ethereal email
const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: process.env.PORT_EMAIL,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

/**
 * function to send verification email
 * @param {string} to - purpose email
 * @param {string} token - verification token
 * @returns {Promise}
 */

export const sendVerificationEmail = async (to, token) => {
  try {
    const verificationUrl = `${process.env.BASE_URL || 'http://localhost:4000'}/auth/verify-email?token=${token}`;

    const mailOptions = {
      from: `"ChillStream" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: 'Verifikasi Email - ChillStream',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 50px auto;
              background-color: #ffffff;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
              border-bottom: 2px solid #e74c3c;
            }
            .header h1 {
              color: #e74c3c;
              margin: 0;
            }
            .content {
              padding: 20px 0;
            }
            .content p {
              color: #333;
              line-height: 1.6;
            }
            .button {
              display: inline-block;
              padding: 12px 30px;
              margin: 20px 0;
              background-color: #e74c3c;
              color: #ffffff !important;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
            }
            .button:hover {
              background-color: #c0392b;
            }
            .footer {
              text-align: center;
              padding-top: 20px;
              border-top: 1px solid #eee;
              color: #999;
              font-size: 12px;
            }
            .token-info {
              background-color: #f8f9fa;
              padding: 10px;
              border-radius: 5px;
              margin: 10px 0;
              word-break: break-all;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎬 ChillStream</h1>
            </div>
            <div class="content">
              <h2>Verifikasi Email Anda</h2>
              <p>Terima kasih telah mendaftar di ChillStream! Untuk melanjutkan, silakan verifikasi email Anda dengan mengklik tombol di bawah ini:</p>
              
              <div style="text-align: center;">
                <a href="${verificationUrl}" class="button">Verifikasi Email</a>
              </div>
              
              <p>Atau salin dan tempel URL berikut ke browser Anda:</p>
              <div class="token-info">
                ${verificationUrl}
              </div>
              
              <p><strong>Token verifikasi:</strong></p>
              <div class="token-info">
                ${token}
              </div>
              
              <p><strong>Catatan:</strong> Token ini akan kedaluwarsa dalam 5 menit.</p>
              
              <p>Jika Anda tidak mendaftar akun ChillStream, abaikan email ini.</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 ChillStream. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
