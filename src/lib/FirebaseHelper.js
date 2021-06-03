// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDD5m_gArbimK1v8ugimNIDsassVhTTC_4",
    authDomain: "edu-platform-13faf.firebaseapp.com",
    projectId: "edu-platform-13faf",
    storageBucket: "edu-platform-13faf.appspot.com",
    messagingSenderId: "935087477977",
    appId: "1:935087477977:web:612af13907c16db4429ac8"
};


class FirebaseHelper {
    constructor() {
        this.init()
        this.authChangedListener(function(){})
    }

    init() {
        console.log('intii')
        firebase.initializeApp(firebaseConfig);
    }


    getUser() {
        const user = firebase.auth().currentUser
        console.log('getUser', user)
        return user
    }

    authChangedListener(cb) {
        firebase.auth().onAuthStateChanged(function (user) {
            console.log('user changed', user)
            if (user) {
                cb(user)

                // User is signed in.
            } else {
                cb(null)

                // No user is signed in.
            }
        });
    }



    signUp() {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(res => {
                return firebase.auth().signInWithPopup(provider)
                    .then((result) => {
                        /** @type {firebase.auth.OAuthCredential} */
                        console.log('ok - result', result)
                        var credential = result.credential;

                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;

                        return result
                        // ...
                    }).catch((error) => {
                        console.log('error', error)
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                        throw error
                    });
            })

    }

    signOut() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log('signd out')
            window.location.reload()
        }).catch((error) => {
            // An error happened.
            console.log('sign out error')
        });

    }
}

export default new FirebaseHelper()