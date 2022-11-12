const auth = firebaseApp.auth();

var accessToken;
var refreshToken;

document.getElementById('logout_button').addEventListener('click', Logout);
document.addEventListener('DOMContentLoaded', main_dom_loaded);

function main_dom_loaded(){
    
    accessToken = localStorage.getItem('accessToken');
    refreshToken = localStorage.getItem('refreshToken');
    displayTokens();
}

function Logout(){

  auth.signOut().then(() => {
    // Sign-out successful.
    window.location = "login.html";
  }).catch((error) => {
    // An error happened.
    window.alert(error)
  });
    
}


function displayTokens(){

  document.getElementById('accessToken').innerHTML = accessToken;
  document.getElementById('refreshToken').innerHTML = refreshToken;

}

