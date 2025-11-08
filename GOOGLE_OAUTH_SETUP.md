# Google OAuth Setup Guide

This guide will walk you through setting up Google Sign-In for your Emmet Builds Systems marketplace.

## What's Been Implemented

✅ **Complete Google OAuth System** with:
- Login page that automatically redirects to Google
- Consent page for Terms of Service and Privacy Policy
- Session management and user storage
- Protected routes and logout functionality
- User profile system

## What You Need to Do

You need to obtain Google OAuth credentials and add them to your Replit Secrets.

---

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "Emmet Builds Systems")
4. Click "Create"

### 2. Enable Google+ API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

### 3. Configure OAuth Consent Screen

1. Go to "APIs & Services" → "OAuth consent screen"
2. Select "External" user type
3. Click "Create"
4. Fill in the required fields:
   - **App name**: Emmet Builds Systems
   - **User support email**: Your email
   - **Developer contact email**: Your email
5. Under "Scopes", click "Add or Remove Scopes" and add:
   - `.../auth/userinfo.email`
   - `.../auth/userinfo.profile`
6. Click "Save and Continue"
7. Click "Save and Continue" on Test users
8. Review and click "Back to Dashboard"

### 4. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. Choose "Web application"
4. Name it (e.g., "Emmet Builds Systems Web Client")
5. Under "Authorized redirect URIs", add:
   ```
   https://your-replit-url.repl.co/auth/google/callback
   ```
   **Important**: Replace `your-replit-url` with your actual Replit URL
   
6. Click "Create"
7. **Save your Client ID and Client Secret** - you'll need these!

### 5. Add Credentials to Replit Secrets

1. In your Replit project, click the lock icon (🔒) in the left sidebar
2. Click "New Secret"
3. Add the first secret:
   - **Key**: `GOOGLE_CLIENT_ID`
   - **Value**: Paste your Client ID from Google
4. Add the second secret:
   - **Key**: `GOOGLE_CLIENT_SECRET`
   - **Value**: Paste your Client Secret from Google
5. Restart your application

### 6. Test the Integration

1. Click the "Log In" button in your header
2. You should be redirected to Google's login page
3. Sign in with your Google account
4. You'll be asked to accept Terms of Service and Privacy Policy
5. After accepting, you'll be redirected to the homepage
6. You're now logged in!

---

## How It Works

### The Flow:

1. **User clicks "Log In"** → Redirects to `/login`
2. `/login` automatically redirects to Google OAuth
3. **User signs in with Google** → Google verifies identity
4. **Google redirects back** to your site with user info
5. **System checks if user is new**:
   - **New user**: Redirect to `/consent` page
   - **Existing user**: Redirect to homepage
6. **New users accept Terms/Privacy** on `/consent`
7. **User is fully authenticated** and can access the site

### Security Features:

- ✅ Passwords never stored (Google handles authentication)
- ✅ Session-based authentication with httpOnly cookies
- ✅ CSRF protection built-in
- ✅ Terms of Service and Privacy Policy consent tracking
- ✅ User data stored securely in memory (upgradeable to database)

---

## Updating Redirect URI After Deployment

When you deploy your site to a custom domain:

1. Go back to Google Cloud Console
2. Navigate to your OAuth credentials
3. Add your new domain's callback URL:
   ```
   https://your-custom-domain.com/auth/google/callback
   ```
4. No code changes needed - it will work automatically!

---

## Troubleshooting

**"OAuth2Strategy requires a clientID option"**
- You haven't added the secrets to Replit yet
- Make sure secret names are exactly `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`

**"Redirect URI mismatch"**
- The callback URL in Google Cloud must exactly match your Replit URL
- Make sure it ends with `/auth/google/callback`

**"Access denied"**
- Make sure you've enabled the Google+ API
- Check that your OAuth consent screen is configured

---

## Current System Capabilities

✅ Google Sign-In
✅ User sessions (24 hour expiry)
✅ Terms & Privacy consent
✅ User profile storage
✅ Logout functionality
❌ Multiple OAuth providers (only Google for now)
❌ Email/password login (using Google OAuth only)

---

## Need Help?

If you run into issues, check:
1. All secrets are spelled correctly in Replit
2. Google Cloud Console shows your project as active
3. Google+ API is enabled
4. Redirect URI matches your Replit URL exactly

Your Google OAuth system is fully implemented and ready to use once you add your credentials!
