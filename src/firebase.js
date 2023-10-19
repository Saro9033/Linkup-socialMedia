  import { initializeApp } from 'firebase/app';
  import { getFirestore } from 'firebase/firestore';
  import { getAuth, GoogleAuthProvider } from 'firebase/auth';
  import { getStorage } from 'firebase/storage';

  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzKXywg6xy-xAphuJOcSL4bQaS3DcjtUw",
    authDomain: "facebook-clone-5b0a4.firebaseapp.com",
    projectId: "facebook-clone-5b0a4",
    storageBucket: "facebook-clone-5b0a4.appspot.com",
    messagingSenderId: "780333176011",
    appId: "1:780333176011:web:e576ccb997bcb77be9b74e",
    measurementId: "G-SV9DWE2LWK"
  };
  
  // Initialize Firebase with your configuration
  const firebaseApp = initializeApp(firebaseConfig);
  
  // Access the Firestore and Auth services
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
   const storage = getStorage(firebaseApp);

  export { auth, provider,storage };
  export default db;
  