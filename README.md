# Micro-SaaS Modular Monolith Boilerplate

A production-ready, highly scalable Fullstack Micro-SaaS boilerplate built with **Next.js (App Router)**, **Supabase**, and **Stripe**. This repository is engineered following clean code and modular monolith practices, providing an optimized foundation to launch subscription-based web applications in hours instead of weeks.

## 🚀 Key Features

- **Next.js 15 Implementation**: Built on top of the modern React server/client component paradigm for extreme speed and optimal SEO.
- **Supabase Authentication**: Pre-configured secure authentication loops covering email/password sign-in and OAuth providers.
- **Stripe Billing Pipelines**: Fully integrated Stripe webhook endpoints designed to dynamically manage user subscription statuses, upgrades, and cancellations.
- **Modular Monolith Path**: Isolated directory boundaries inside the structure ensure logic components do not tightly couple, making it easy to refactor or scale.
- **Tailwind CSS Styling**: Modern dark-themed layout built with fluid responsive grid networks and standard developer UI design aesthetics.

---

## 📂 Project Structure

```text
├── apps/
│   ├── web/
│   │   ├── app/
│   │   │   ├── (auth)/          # Isolated login, registration, and recovery UI routes
│   │   │   ├── (dashboard)/     # Protected membership portal views
│   │   │   ├── api/
│   │   │   │   └── webhooks/    # Stripe webhook handler endpoint
│   │   │   ├── components/      # Modular layout widgets (headers, footers, pricing)
│   │   │   └── page.tsx         # Modern SaaS high-converting landing page
├── .env.example                 # Configuration mapping file for keys
├── .gitignore                   # Safeguard for private parameters and dependencies
└── package.json                 # Core modern Javascript packages directory
```

---

## 🛠️ Quick Start

### Prerequisites
Make sure you have the following installed on your developer workstation:
- [Node.js 20+ / npm](https://nodejs.org)
- A free [Supabase Account](https://supabase.com)
- A [Stripe Developer Dashboard Instance](https://stripe.com)

### 1. Environment Configurations
Clone this repository to your machine, open the terminal in the project root, and copy the variable structures:
```bash
cp .env.example .env
```

Open the newly created `.env` file and insert your actual staging/production sandbox keys:
```ini
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase Credentials
NEXT_PUBLIC_SUPABASE_URL=https://supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...

# Stripe Credentials
STRIPE_SECRET_KEY=sk_test_51N...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51N...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 2. Installations & Startup
Install the pre-configured project dependencies and launch the localized Next.js real-time reload development server:

```bash
# Install required npm application modules
npm install

# Activate the local web deployment server
npm run dev
```

Open your browser and navigate to 👉 **`http://localhost:3000`** to see your SaaS landing page running live.

---

## 🔒 Security Architecture Reminder
The `.env` file contains high-level administrative credentials (like `SUPABASE_SERVICE_ROLE_KEY` and `STRIPE_SECRET_KEY`) that override database constraints. **Never upload or commit your real `.env` settings to GitHub.** The repository features a trilateral `.gitignore` pattern built to safeguard your keys against production leaks.

## 📄 License
This starter pack configuration is open-source and free for commercial or personal projects under the [MIT License](LICENSE).


<div align="center">
  <h1>(sorry for the long readme, take some diamonds;))</h1>                 <img width="415" height="382" alt="image" src="https://github.com/user-attachments/assets/0239543d-b7da-4e57-aaca-fc7bb0842ffa" />

</div>

