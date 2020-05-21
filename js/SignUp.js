







function SignUp() {
    if (document.getElementById('passConfInput').value != document.getElementById('passInput').value) {
        alert("Wrong confirm passowrd");
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(document.getElementById('emailInput').value, document.getElementById('passInput').value).then(function (result) {
            window.location.replace("main.html");
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }





}










