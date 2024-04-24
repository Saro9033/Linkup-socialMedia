  import { initializeApp } from 'firebase/app';
  import { getFirestore } from 'firebase/firestore';
  import { getAuth, GoogleAuthProvider } from 'firebase/auth';
  import { getStorage } from 'firebase/storage';


  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCZqZBgt-JVXO__xHRHbBdisqDq-vUndr0",
    authDomain: "fb-clone2-aaeef.firebaseapp.com",
    projectId: "fb-clone2-aaeef",
    storageBucket: "fb-clone2-aaeef.appspot.com",
    messagingSenderId: "114438666806",
    appId: "1:114438666806:web:11d2a2cb9ffc55ced27697",
    measurementId: "G-WPGQSQRHZ8"
  };
  
  // Initialize Firebase with your configuration
  const firebaseApp = initializeApp(firebaseConfig);
  
  
  // Access the Firestore and Auth services
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider(firebaseApp);
   const storage = getStorage(firebaseApp);

  export { storage,auth, provider};
  export default db;

  