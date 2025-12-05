# Age & Birthday Countdown (PWA)
A sleek, animated web app for calculating your exact age in years, months, days, hours, minutes, and seconds — plus a real-time countdown to your next birthday.
Includes a launch splash screen, beautiful UI, and full offline support as a Progressive Web App (PWA).

## Features
- Real-time age calculation  
- Live next-birthday countdown  
- Animated splash screen  
- Mobile-friendly glass-UI design  
- Offline support (PWA)  
- Installable on Android, iOS, and Desktop  

## Project Structure
/
│── index.html
│── manifest.json
│── service-worker.js
│── icon.png (512×512 recommended)

## Installation (PWA)
1. Host the files on any static server (GitHub Pages, Netlify, Vercel, etc.)
2. Visit the site on your phone or desktop
3. Tap **“Add to Home Screen”**  
4. Launch the app like a native app

## How It Works
### Age Calculation
The script calculates:
- years  
- months  
- days  
- hours  
- minutes  
- seconds  

All updated every second.

### PWA
- `manifest.json` defines app metadata & icon  
- `service-worker.js` caches assets for offline use  
- App loads instantly after first visit  

## Requirements
- icon.png (minimum 192×192; recommended 512×512)
- HTTPS hosting (required for PWA)

## Fade-out uses:
animation: fadeOut 1s ease forwards;
animation-delay: 3s;

Adjust delay to control splash duration.

## Credit
Developed by: Francis Otieno

## License
MIT License
