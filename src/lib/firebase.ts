import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: don't reinit the firebase app every time on page load
// move it to a store
const firebaseConfig = {
	apiKey: "AIzaSyBiUP1mz_aaOomVD9-tCaVHuO0IZ9_wIpg",
	authDomain: "authenticator-95365.firebaseapp.com",
	projectId: "authenticator-95365",
	storageBucket: "authenticator-95365.appspot.com",
	messagingSenderId: "87407968965",
	appId: "1:87407968965:web:5125d61b2cb8d1c4db66ac"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
