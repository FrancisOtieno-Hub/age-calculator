# Age & Birthday Countdown PWA

A beautiful, minimal **Progressive Web App (PWA)** that calculates your age in real time and counts down to your next birthday — even offline.  

Built with **HTML, CSS, and JavaScript**, this app is fully installable on desktop and mobile devices, lightweight, and designed for both young adults and elderly users.

---

## Features

- **Live Age Calculation**  
  Shows your age in years, days, hours, minutes, and seconds.

- **Birthday Countdown**  
  Tracks the exact time remaining until your next birthday.

- **Offline Ready**  
  Thanks to a fully functional **service worker**, the app works even without an internet connection.

- **Modern, Accessible UI**  
  Clean design with **Emerald & Mist White** palette, readable fonts, and a responsive layout for all screen sizes.

- **Installable PWA**  
  Works like a native app on Android, iOS, and desktop devices.

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/FrancisOtieno-Hub/age-calculator.git
cd age-calculator
````

2. **Open `index.html`** in your browser
   Or deploy it to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

3. **Install the PWA**

   * On mobile: Tap the "Add to Home Screen" prompt
   * On desktop: Use the browser install option (Chrome / Edge / Firefox)

---

## How It Works

* **Service Worker** caches app shell for offline use.
* **Manifest** provides metadata for installable PWA.
* **JavaScript** updates the age and birthday countdown live every second.
* **Floating label input** enhances UX for birthdate selection.

---

## Design

* **Primary Color:** Emerald `#0B8457`

* **Secondary Color:** Mist White `#B4E1C1`

* **Highlight Color:** Amber `#FFD166`

* Rounded, friendly UI elements

* High contrast for readability

* Minimalistic, modern aesthetic

---

## File Structure

```
├── index.html          # Main HTML file
├── service-worker.js   # Caching & offline functionality
├── manifest.json       # PWA metadata
├── icon.png            # App icon 
├── README.md           # Documentation
```

---

## Future Enhancements

* Dark mode toggle
* Local notifications for upcoming birthdays
* Multi-language support
* Additional analytics for fun insights (age trends, countdown stats)

---

## Author

**Francis Otieno**
Award-winning author, software engineer, and motivational speaker.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

