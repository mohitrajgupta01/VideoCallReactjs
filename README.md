# Video Call App (ReactJS + ZEGOCLOUD)

A modern, high-quality video call web application built with ReactJS and [ZEGOCLOUD](https://www.zegocloud.com/) UI Kit, powered by Vite for fast development.

## Features

- **1-on-1 Video Calls:** Connect with anyone, anywhere, in real-time.
- **Room-based System:** Create or join a video call room by entering your name.
- **Modern UI:** Clean, responsive interface with easy navigation.
- **Powered by ZEGOCLOUD:** Uses ZEGOCLOUD’s prebuilt UI kit for seamless video call integration.
- **Single Page App:** Fast navigation between Home, About, Contact, and Video Call pages.

## Demo

> Stay connected with friends, family, or business partners effortlessly.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Video-Call-App-ReactJS-2025-main.git
   cd Video-Call-App-ReactJS-2025-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your ZEGOCLOUD credentials:
   ```
   VITE_APP_ID=your_zegocloud_app_id
   VITE_APP_SECRET=your_zegocloud_server_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Build for Production

```bash
npm run build
```

### Lint the Code

```bash
npm run lint
```

## Usage

- **Home:** Introduction and "Get Started" button to join a video call.
- **About:** Information about the app.
- **Contact:** Contact details for support or feedback.
- **Video Call:** Enter your name to join a room and start a 1-on-1 video call.

## Tech Stack

- **Frontend:** ReactJS, React Router DOM
- **Video Calls:** [@zegocloud/zego-uikit-prebuilt](https://www.npmjs.com/package/@zegocloud/zego-uikit-prebuilt)
- **Build Tool:** Vite
- **Linting:** ESLint

## Project Structure

```
src/
  Components/
    Layout/         # Header, Footer, Layout components
  Pages/
    Home.jsx        # Home page
    About.jsx       # About page
    Contact.jsx     # Contact page
    VideoCall/
      Room.jsx      # Room entry page
      VideoCall.jsx # Video call interface
  App.jsx           # Main app and routing
  main.jsx          # Entry point
  App.css, index.css# Styles
```

---

Let me know if you want to add badges, screenshots, or further customization!

## Contact

For questions or support, contact:

- **Phone:** 0123456789
- **Email:** mohit46306@gmail.com
- **Instagram:** [@mohitrajgupta01](https://instagram.com/mohitrajgupta01)




