# 🎂 Age & Birthday Countdown PWA

A beautiful, modern **Progressive Web App** that calculates your exact age in real-time and counts down to your next birthday — with **offline support**, **dark mode**, and seamless cross-platform compatibility.

![Version](https://img.shields.io/badge/version-3.0.0-emerald)
![License](https://img.shields.io/badge/license-MIT-blue)
![PWA](https://img.shields.io/badge/PWA-ready-success)

---

## ✨ Features

### Core Functionality
- **⏱️ Live Age Calculation** - Real-time display of your age in years, days, hours, minutes, and seconds
- **🎉 Birthday Countdown** - Precise countdown to your next birthday with special birthday message
- **💾 Data Persistence** - Your birthdate is saved locally and auto-loaded on return visits
- **📴 Offline Ready** - Full functionality without internet connection via Service Worker
- **🌓 Dark Mode** - Beautiful dark theme with system preference detection
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices

### User Experience
- **🎨 Modern Design** - Clean, minimal interface with smooth animations
- **♿ Accessible** - WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **⚡ Fast & Lightweight** - Optimized performance with minimal dependencies
- **🎯 Easy to Use** - Intuitive interface requiring just one input
- **📲 Installable** - Works like a native app on any device

---

## 🚀 Quick Start

### Option 1: Clone & Run Locally

```bash
# Clone the repository
git clone https://github.com/FrancisOtieno-Hub/age-calculator.git
cd age-calculator

# Open with a local server (required for Service Worker)
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Then open http://localhost:8000 in your browser
```

### Option 2: Deploy to Cloud

Deploy instantly to your favorite platform:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📱 Installation as PWA

### On Mobile (iOS/Android)
1. Open the app in your browser (Chrome, Safari, Edge, etc.)
2. Look for the "Add to Home Screen" or "Install" prompt
3. Tap **Add** or **Install**
4. The app icon will appear on your home screen

### On Desktop (Chrome/Edge/Firefox)
1. Open the app in your browser
2. Look for the install icon (⊕) in the address bar
3. Click **Install**
4. The app will open in its own window

---

## 🎨 Design System

### Color Palette
- **Primary (Emerald):** `#0B8457` - Main brand color
- **Secondary (Mist):** `#B4E1C1` - Soft background accent
- **Highlight (Amber):** `#F59E0B` - Emphasis and highlights
- **Dark Text:** `#083A2B` - Primary text color
- **Light Background:** `#F9FAFB` - Subtle backgrounds

### Typography
- **Font Family:** Inter (Google Fonts)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Design Principles
- **Minimalism** - Clean, distraction-free interface
- **Accessibility** - High contrast, clear typography, keyboard navigation
- **Responsiveness** - Fluid design adapting to all screen sizes
- **Performance** - Optimized animations and efficient rendering

---

## 🏗️ Technical Architecture

### File Structure
```
age-calculator/
├── index.html              # Main HTML with embedded CSS & JS
├── service-worker.js       # PWA caching & offline support
├── manifest.json          # PWA metadata & configuration
├── icon.png               # App icon (512x512)
├── icon-192.png           # Smaller icon (192x192) - optional
├── screenshots/           # App screenshots - optional
│   ├── desktop.png
│   └── mobile.png
└── README.md             # Documentation
```

### Technologies Used
- **HTML5** - Semantic markup with accessibility attributes
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Service Workers** - Offline caching and background sync
- **Web App Manifest** - PWA installation and configuration
- **localStorage** - Data persistence for birthdate
- **sessionStorage** - Splash screen control

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ✅ Samsung Internet 14+

---

## 🔧 Customization Guide

### Change Color Scheme

Edit CSS variables in `index.html`:

```css
:root {
  --emerald: #0B8457;        /* Your primary color */
  --mist: #B4E1C1;           /* Your secondary color */
  --amber: #F59E0B;          /* Your highlight color */
}
```

### Modify Calculation Logic

The age calculation happens in the `updateAge()` function in `index.html`:

```javascript
function updateAge() {
  // Your custom logic here
}
```

### Add Features

The app is built modularly. To add features:
1. Add HTML structure in the `.calculator` section
2. Style with CSS in the `<style>` tag
3. Add JavaScript functionality in the `<script>` tag

---

## 🛣️ Roadmap

### Version 3.1 (Planned)
- [ ] Push notifications for upcoming birthdays
- [ ] Share birthday countdown on social media
- [ ] Multiple birthday tracking (family & friends)
- [ ] Age milestones and fun facts

### Version 3.2 (Future)
- [ ] Multi-language support (i18n)
- [ ] Customizable themes and color schemes
- [ ] Birthday history and statistics
- [ ] Export birthday data

### Version 4.0 (Long-term)
- [ ] User accounts with cloud sync
- [ ] Birthday reminders via email/SMS
- [ ] Social features and birthday wishes
- [ ] Integration with calendar apps

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style Guidelines
- Use 2 spaces for indentation
- Follow existing naming conventions
- Add comments for complex logic
- Test on multiple browsers before submitting

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please open an issue:

**[Create an Issue](https://github.com/FrancisOtieno-Hub/age-calculator/issues/new)**

When reporting bugs, please include:
- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Private use

---

## 👨‍💻 Author

**Francis Otieno**  
Award-winning author, software engineer, and motivational speaker

- 🌐 Website: [francisotieno.com](https://francisotieno.com)
- 💼 LinkedIn: [Francis Otieno](https://linkedin.com/in/francisotieno)
- 🐦 Twitter: [@FrancisOtieno](https://twitter.com/francisotieno)
- 📧 Email: contact@francisotieno.com

---

## 🙏 Acknowledgments

- **Inter Font** by Rasmus Andersson
- **Design Inspiration** from modern UI/UX best practices
- **Community** for feedback and contributions

---

## 📊 Project Stats

- **Size:** < 50KB (uncompressed)
- **Load Time:** < 1 second
- **Lighthouse Score:** 100/100
- **Accessibility:** WCAG 2.1 AA compliant

---

## 💡 Tips for Users

1. **Bookmark or Install** - Add to your home screen for quick access
2. **Enable Dark Mode** - Easier on the eyes in low light
3. **Works Offline** - No internet? No problem!
4. **Birthday Alert** - Check on your birthday for a special message
5. **Share** - Tell friends and family about this free tool

---

<div align="center">

Made with ❤️ by Francis Otieno

⭐ **Star this repo** if you find it helpful!

[Report Bug](https://github.com/FrancisOtieno-Hub/age-calculator/issues) · [Request Feature](https://github.com/FrancisOtieno-Hub/age-calculator/issues) · [Documentation](https://github.com/FrancisOtieno-Hub/age-calculator/wiki)

</div>
