# Portfolio App (Expo)

This project is a mobile application for my personal portfolio website. It is built with Expo (React Native) and uses a `WebView` to display the live website, providing a native app experience for users.

The original portfolio website is built with Next.js.

## ✨ Key Features & Technology

- Framework: Built with the latest Expo SDK (React Native).

- Core Functionality: Uses `react-native-webview` to embed the portfolio website directly into the app.

- Routing: Utilizes Expo Router for file-based routing structure.

- Build Service: Configured for EAS (Expo Application Services) to build `.apk` and `.aab` files for Android.

- Language: Written in TypeScript.

## 🚀 Getting Started (For Local Development)

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org) (LTS version recommended)
- `npm` or `yarn` package manager
- Expo Go app installed on your Android or iOS device.

### Installation & Running

1. Clone the repository (if you are on a new machine):

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   This command will install all the necessary packages for the project.

   ```bash
   npm install
   ```

3. Start the development server:
   This will start the Metro server and show a QR code in your terminal.

   ```bash
   npx expo start
   ```

4. Open the app:
   Scan the QR code from the terminal using the Expo Go app on your phone. The app should now be running on your device.

## 🛠️ Building the App (Generating APK / AAB)

This project is configured to use EAS Build for creating standalone application files.

1. Install EAS CLI globally (if you haven't already):

   ```bash
   npm install -g eas-cli
   ```

2. Log in to your Expo account:

   ```bash
   eas login
   ```

3. Start the build for Android:
   To create a production-ready .aab file for the Google Play Store, run the following command:
   ```bash
   eas build -p android --profile production
   ```
   After the build is complete, you will get a downloadable link for your .aab file.

### Purpose

The main goal of this project is to make the portfolio website easily accessible to users on their mobile devices through a native application wrapper.
