  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDaZfPrMU159cZoLu7h5gIfZaZ58qBzMK8",
    authDomain: "geekymilan-d8739.firebaseapp.com",
    projectId: "geekymilan-d8739",
    storageBucket: "geekymilan-d8739.appspot.com",
    messagingSenderId: "90594365576",
    appId: "1:90594365576:web:bc9141b438d7de165c8f3d",
    measurementId: "G-4B0N4QT529"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
