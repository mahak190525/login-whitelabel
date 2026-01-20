# Login Whitelabel

A whitelabel authentication application built with React and Supabase, supporting multiple authentication providers.

## Authentication Providers

This application supports authentication through Supabase's built-in auth providers. Follow the configuration steps below for each provider you want to enable.

### Google OAuth

1. **Create a project in Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable the Gmail API**
   - Navigate to "APIs & Services" > "Library"
   - Search for "Gmail API" and enable it

3. **Create OAuth Client IDs**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Select "Web application" as the application type
   - In the "Authorized redirect URIs" section, add your Supabase callback URL:
     ```
     https://<your-project-ref>.supabase.co/auth/v1/callback
     ```
   - Copy the Client ID and Client Secret
   - Enter these credentials in your Supabase project dashboard under Authentication > Providers > Google

### Microsoft OAuth

1. **Create an app in Microsoft Azure Portal**
   - Go to [Azure Portal](https://portal.azure.com/)
   - Navigate to "Azure Active Directory" > "App registrations"
   - Click "New registration" to create a new app

2. **Create a client secret**
   - In your app registration, go to "Certificates & secrets"
   - Click "New client secret"
   - Copy the secret value (you'll only see it once)

3. **Configure redirect URI**
   - Go to "Authentication" in your app registration
   - Under "Platform configurations", click "Add a platform" > "Web"
   - Add your Supabase callback URL:
     ```
     https://<your-project-ref>.supabase.co/auth/v1/callback
     ```
   - Copy the Application (client) ID and Directory (tenant) ID
   - Enter these details along with the client secret in your Supabase project dashboard under Authentication > Providers > Microsoft

### Form Authentication

Form-based authentication (email/password) requires no additional configuration. It's enabled by default in Supabase.

## Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project dashboard under Settings > API.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables (see above)

3. Configure your authentication providers in Supabase dashboard

4. Start the development server:
   ```bash
   npm run dev
   ```
