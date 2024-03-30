import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { 

  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  sendEmailVerification 

} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'



const firebaseConfig = {
  apiKey: "AIzaSyAniNhYSBqGAt6PtXtZcvSGpo1vNwDXfhg",
  authDomain: "proyectonube2024a.firebaseapp.com",
  projectId: "proyectonube2024a",
  storageBucket: "proyectonube2024a.appspot.com",
  messagingSenderId: "389132655673",
  appId: "1:389132655673:web:058100c60794fa369a81e8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const registerauth = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)


export const verification = () =>
  sendEmailVerification(auth.currentUser)


export const loginauth = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)


export const googleauth = (provider) =>
  signInWithPopup(auth, provider)


export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      console.log(uid)

    } else {
      window.location.href='../Index.html'
    }
  });
}


export const loginout = () =>
  signOut(auth)

