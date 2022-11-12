const auth = firebaseApp.auth();

    var accessToken;
    var refreshToken;

    document.getElementById('login_button').addEventListener('click', Login);

    document.addEventListener('DOMContentLoaded', login_dom_loaded);

function login_dom_loaded(){
}

    function Login() {
      const email = document.getElementById("login_email").value;
      const password = document.getElementById("login_password").value;

      
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          accessToken = user.multiFactor.user.stsTokenManager.accessToken
          refreshToken = user.multiFactor.user.stsTokenManager.refreshToken
          localStorage.setItem('refreshToken', refreshToken)
          localStorage.setItem('accessToken', accessToken);
          
          window.location = "main.html"
          window.alert('Logged in ' + user.email)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert(errorMessage)
        });

    }