# 🚀 Anuj Kumar Singh - Developer Portfolio

<p align="center">
  <strong>A modern, responsive portfolio showcasing my projects, skills, and experience</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js" alt="Next.js 16.0.1">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React 19.2.0">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS 4">
</p>

---

## 📋 Overview

This is my personal portfolio website built with cutting-edge technologies including **Next.js 16**, **React 19**, and **Tailwind CSS 4**. The portfolio features a modern design with dark/light theme support, responsive layout, and smooth animations.

---

## ✨ Features

- ✅ **Modern Tech Stack**: Built with Next.js 16 App Router, React 19, and Tailwind CSS 4
- ✅ **Fully Responsive**: Optimized for all devices and screen sizes
- ✅ **Dark/Light Theme**: Beautiful theme toggle with smooth transitions
- ✅ **Mobile-Friendly Navigation**: Hamburger menu with click-outside-to-close functionality
- ✅ **SEO Optimized**: Enhanced visibility with Next.js metadata API
- ✅ **Fast Performance**: Server components and optimized images
- ✅ **Contact Form**: Integrated email and Telegram notifications
- ✅ **Blog Integration**: Automatically fetches posts from dev.to
- ✅ **Smooth Animations**: Lottie animations and interactive elements

---

## 🎯 Sections

| Section | Description |
|---------|-------------|
| 🦸 **Hero** | Eye-catching introduction with animated code display |
| 👤 **About** | Personal information and professional summary |
| 💼 **Experience** | Work history and professional accomplishments |
| 🛠️ **Skills** | Technical skills with animated marquee display |
| 🚀 **Projects** | Showcase of projects with descriptions and links |
| 🎓 **Education** | Academic background and certifications |
| 📝 **Blog** | Latest articles from dev.to (auto-fetched) |
| 📧 **Contact** | Contact form with email/Telegram integration |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.1 | React framework with App Router |
| **React** | 19.2.0 | UI component library |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **next-themes** | 0.4.6 | Dark/light theme management |
| **Lottie** | Latest | Lightweight animations |
| **Nodemailer** | Latest | Email functionality |
| **React Icons** | Latest | Icon library |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.17.0 or higher
- **npm** or **pnpm** package manager
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Anujsingh7/New_Portfolio.git
cd New_Portfolio
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Google Tag Manager (Optional)
NEXT_PUBLIC_GTM=GTM-XXXXXXX

# App URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Telegram Bot (Optional - for contact form)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Gmail (Optional - for contact form)
GMAIL_PASSKEY=your_gmail_app_password
EMAIL_ADDRESS=your_email@gmail.com
```

4. **Run the development server**

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Customization

### Personal Data

Update your information in `utils/data/personal-data.js`:

```javascript
export const personalData = {
  name: "Your Name",
  profile: "/profile.png",
  designation: "Your Job Title",
  description: "Your bio...",
  email: "your.email@example.com",
  // ... other fields
};
```

### Other Data Files

| File | Location | Purpose |
|------|----------|---------|
| `experience.js` | `utils/data/` | Work experience |
| `projects-data.js` | `utils/data/` | Portfolio projects |
| `skills.js` | `utils/data/` | Technical skills |
| `educations.js` | `utils/data/` | Education history |

### Profile Image

Place your profile picture in the `public/` directory and update the path in `personal-data.js`.

---

## 📧 Contact Form Setup

### Gmail Configuration

1. Enable 2-Step Verification on your Google account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Navigate to **App Passwords**
4. Generate a new app password
5. Add to `.env` file

### Telegram Bot Setup

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` and follow instructions
3. Copy the bot token
4. Get your chat ID from `https://api.telegram.org/bot<TOKEN>/getUpdates`
5. Add credentials to `.env` file

---

## 📝 Blog Integration

The portfolio automatically fetches your latest articles from [dev.to](https://dev.to/). Simply set your dev.to username in `utils/data/personal-data.js`:

```javascript
devUsername: "yourusername"
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

---

## 📦 Key Dependencies

- **next** - React framework
- **react** & **react-dom** - UI library
- **tailwindcss** - CSS framework
- **next-themes** - Theme management
- **lottie-react** - Animations
- **react-icons** - Icons
- **nodemailer** - Email sending
- **axios** - HTTP client
- **react-toastify** - Notifications

---

## 🔧 Recent Updates

- ✅ Centered footer text alignment
- ✅ Removed empty blog image section
- ✅ Fixed mobile navbar to close when clicking outside
- ✅ Updated hero section with full name
- ✅ Improved window control dots styling (macOS-style)
- ✅ Enhanced theme toggle functionality

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Connect With Me

- **GitHub**: [Anujsingh7](https://github.com/Anujsingh7)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Email**: your.email@example.com

---

<p align="center">
  Made with ❤️ by Anuj Kumar Singh
</p>
