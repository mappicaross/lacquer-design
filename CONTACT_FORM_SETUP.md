# Contact Form Setup Guide

## Current Implementation

The contact form is set up to use **FormSubmit.co**, a free form submission service that sends form data directly to your email address.

## Initial Setup Required

### First Time Setup (One-time only)

1. **Submit a test form** from your live website
2. **Check the email** inbox for `studio@lacquerdesign.com`
3. **Click the confirmation link** in the email from FormSubmit
4. After confirmation, all future form submissions will be sent directly to your email

### What Happens After Setup

Once confirmed, every form submission will:
- ✅ Send an email to `studio@lacquerdesign.com`
- ✅ Include all form fields in a formatted table
- ✅ Include the subject line: "New Project Inquiry from [Name]"
- ✅ Show a success message to the user

## Email Format

Each submission email will include:
- Name
- Email Address
- Phone
- Project Address
- Current Address (if different)
- Square Footage
- Type of Project
- Scope of Work
- Project Start Date
- Project Completion Date
- Build/Renovation Budget
- Furnishings & Decor Budget
- Architect/Contractor Information
- Occupants
- Inspiration Links
- How They Heard About You
- Additional Information

## Alternative Email Services

If you prefer a different service, here are some alternatives:

### 1. Formspree (Recommended for Growth)
- **Pros**: More features, better spam protection, file uploads
- **Cons**: Free tier limited to 50 submissions/month
- **Setup**: Sign up at https://formspree.io
- **Code change**: Update the fetch URL to your Formspree endpoint

### 2. Netlify Forms (If hosting on Netlify)
- **Pros**: Built-in, no external service needed
- **Cons**: Only works on Netlify hosting
- **Setup**: Add `netlify` attribute to form tag

### 3. Custom Serverless Function
- **Pros**: Full control, can integrate with CRM/database
- **Cons**: Requires backend setup
- **Setup**: Create API endpoint using Vercel/Netlify Functions or AWS Lambda

## Spam Protection

FormSubmit includes basic spam protection. For additional protection:

1. **Add reCAPTCHA**: Include `_captcha: "true"` in form data
2. **Honeypot field**: FormSubmit automatically filters bot submissions
3. **Custom redirect**: Add `_next` parameter to redirect after submission

## Testing the Form

### First Time Setup (Works on both Localhost and Production)

**The form sends real emails in all environments:**

1. **Initial Submission:**
   - Fill out the form with test data (use real info in required fields)
   - Click "Submit Inquiry"
   - Check `studio@lacquerdesign.com` inbox
   - **You'll receive a confirmation email from FormSubmit**
   - Click the confirmation link in that email

2. **After Confirmation:**
   - FormSubmit is now activated for `studio@lacquerdesign.com`
   - All future submissions (from any domain) will send emails automatically
   - No further setup needed!

### Testing on Localhost

**The form works the same on localhost as production:**
- ✅ Sends real emails to `studio@lacquerdesign.com`
- ✅ Great for testing the actual email format and content
- ✅ See exactly what your clients will experience
- ✅ Verify all fields are included and formatted correctly

**To test:**
1. Fill out the form with test data
2. Click "Submit Inquiry"
3. Check your email inbox
4. Verify the email looks good and includes all fields

**Pro tip:** Use a label in Gmail (like `studio+test@lacquerdesign.com`) for test submissions if you want to filter them

### Production Testing

Once you've confirmed the email with FormSubmit:
1. Form submissions work automatically
2. Emails arrive within seconds
3. Subject line: "New Project Inquiry from [Name]"
4. All form data formatted in a clean table

## Troubleshooting

### Form Not Submitting
- Check browser console for errors
- Verify all required fields are filled
- Check email address is confirmed with FormSubmit

### Emails Not Arriving
- Check spam folder
- Confirm you clicked the FormSubmit confirmation link
- Try submitting again

### Form Shows Error Message
- Check internet connection
- Verify FormSubmit service is online
- Check browser console for detailed error

## Support

- **FormSubmit Docs**: https://formsubmit.co
- **FormSubmit Support**: support@formsubmit.co
