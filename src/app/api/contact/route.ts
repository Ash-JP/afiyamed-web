import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    // Check if the API key is missing
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({
            error: "Resend API key is not configured. Please add RESEND_API_KEY to your .env.local file."
        }, { status: 500 });
    }

    try {
        const { firstName, lastName, company, email, phone, subject, message } = await request.json();

        const data = await resend.emails.send({
            // NOTE TO USER: 
            // 1. 'onboarding@resend.dev' is a testing email provided by Resend.
            //    It can ONLY send emails to the exact email address you used to sign up for Resend.
            // 2. To send emails from info@afiyamed.com, you MUST verify the afiyamed.com domain in your Resend Dashboard.
            //    Once verified, change the "from" address below to 'Contact Form <info@afiyamed.com>'
            from: 'Contact Form <onboarding@resend.dev>',

            // Your receiving email address
            to: ['info@afiyamed.com8'],

            subject: `New Website Inquiry: ${subject}`,
            replyTo: email, // Allows you to hit "reply" directly in your email client
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px;">
                    <h2 style="color: #0B3D54; border-bottom: 2px solid #3AABB8; padding-bottom: 10px;">New Contact Form Submission</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Company/Facility:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #3AABB8;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${subject}</td>
                        </tr>
                    </table>

                    <h3 style="color: #0B3D54; margin-top: 30px;">Message:</h3>
                    <div style="background-color: #F4FBFC; padding: 15px; border-left: 4px solid #3AABB8; border-radius: 4px; white-space: pre-wrap; font-size: 15px; line-height: 1.5;">${message}</div>
                </div>
            `,
        });

        // Resend returns an error field if something goes wrong on their end
        if (data.error) {
            console.error("Resend API Error:", data.error);
            return NextResponse.json({ error: data.error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("Internal API Error:", error);
        return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
    }
}
