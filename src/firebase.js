import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase, ref, onValue, set, serverTimestamp} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAoLy5UrYuEkNAfN36orCswqvoTdrSIwho",
  authDomain: "fir-auth-72fdb.firebaseapp.com",
  projectId: "fir-auth-72fdb",
  storageBucket: "fir-auth-72fdb.appspot.com",
  messagingSenderId: "371661209491",
  appId: "1:371661209491:web:0c017b9da7f968d2843266",
  measurementId: "G-HCHNJTSWLH",
  databaseURL: "https://fir-auth-72fdb-default-rtdb.firebaseio.com/",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Set up user presence
const presenceRef = ref(database, 'presence');

auth.onAuthStateChanged((user) => {
  if (user) {
    const userRef = ref(presenceRef, user.uid);

    set(userRef, {
      online: true,
      lastOnline: serverTimestamp(),
    });

    onValue(userRef, (snapshot) => {
      if (!snapshot.exists()) return;

      set(userRef, {
        online: false,
        lastOffline: serverTimestamp(),
      });
    });
  }
});

export { app, auth, database };
