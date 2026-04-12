# EmailJS Integration Setup Guide

## Overview
Your portfolio contact form is now integrated with EmailJS, which allows emails to be sent directly from your frontend without a backend server.

## Step-by-Step Setup

### 1. Create an EmailJS Account
- Visit [EmailJS.com](https://www.emailjs.com/)
- Sign up with your email address
- Verify your email

### 2. Create an Email Service
- Go to **Email Services** in your dashboard
- Click **Add Service**
- Choose **Gmail** (or your preferred email provider)
- Connect your email account
- Name it something like `gmail_service`
- Copy the **SERVICE_ID** → You'll need this

### 3. Create an Email Template
- Go to **Email Templates** in your dashboard
- Click **Create New Template**
- Use the following template content:

```
Subject: New Message from {{from_name}}

From: {{from_email}}
Name: {{from_name}}

Message:
{{message}}
```

- Save the template
- Copy the **TEMPLATE_ID** → You'll need this

### 4. Get Your PUBLIC_KEY
- Go to **Account** → **API Keys**
- Copy your **Public Key** → You'll need this

### 5. Update Your Code
In `/src/App.jsx`, locate this line (around line 11):
```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE')
```
Replace `YOUR_PUBLIC_KEY_HERE` with your actual public key:
```javascript
emailjs.init('1234567890abcdef')
```

Then find the `emailjs.send()` call (around line 38) and update:
```javascript
await emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', {
```

Replace with your actual IDs:
```javascript
await emailjs.send('gmail_service_abc123', 'template_xyz789', {
```

### 6. Test Your Form
- Refresh your portfolio website
- Fill out the contact form
- Click "Send Message"
- You should receive the email in your inbox within seconds

## Form Fields Mapping

The form captures:
- **name** → visitor's name
- **email** → visitor's email address
- **message** → visitor's message

These are sent to your email (`sunita.chxx@gmail.com`) via EmailJS.

## Features

✅ **Form Validation** - Checks that all fields are filled
✅ **Loading State** - Button shows "Sending..." while submitting
✅ **Success Message** - Displays success feedback to the user
✅ **Error Handling** - Shows error message if something goes wrong
✅ **Form Reset** - Clears fields after successful submission
✅ **Message Auto-clear** - Success/error messages disappear when user starts typing

## Troubleshooting

### "Failed to send message" Error
- Check that SERVICE_ID and TEMPLATE_ID are correct
- Verify your Gmail is properly connected in EmailJS
- Check browser console for detailed error messages

### Not Receiving Emails
- Check your Gmail spam folder
- Verify the email template is published (not in draft)
- Ensure the Gmail service is active in your EmailJS dashboard

### "Invalid credentials" Error
- Double-check your PUBLIC_KEY is correct
- Verify you're using the Public Key, not the Private Key

## Security Notes

⚠️ **Public Key is Safe to Share** - The PUBLIC_KEY visible in your code is intentionally public (it's rate-limited and can only send emails via your configured template)

⚠️ **Keep Private Key Secret** - Never expose your Private Key in client-side code

## Documentation
- [EmailJS Official Docs](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/sdk/react/)

## Need Help?
- Check EmailJS status page
- Review console errors in browser DevTools
- Visit EmailJS support: support@emailjs.com

---

Happy emailing! 🚀
