// Firebase configuration
const firebaseConfig = {
    // Replace with your Firebase config object
    apiKey: "AIzaSyDYjBD4p0n_l_EZ-0ZGaTQfFNA41oZX37w",
    authDomain: "signup-6504f.firebaseapp.com",
    projectId: "signup-6504f",
    storageBucket: "signup-6504f.firebasestorage.app",
    messagingSenderId: "722220780138",
    appId: "1:722220780138:web:9a8cfb00b0c55590c71813"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements
const signupContainer = document.getElementById('signup-container');
const loginContainer = document.getElementById('login-container');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

// Switch between signup and login forms
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

// Handle Sign Up
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert('Account created successfully!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        })
        .catch((error) => {
            // Handle errors
            alert(error.message);
        });
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            alert('Logged in successfully!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        })
        .catch((error) => {
            // Handle errors
            alert(error.message);
        });
});

// Check authentication state
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        window.location.href = 'dashboard.html';
    }
}); 