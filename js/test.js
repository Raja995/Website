function signIn() {

    alert("asd");
    const test = firebase.functions().httpsCallable('CheckOtpStatus');
    test().then(result2 => {

        alert(result2.data);
        if (result2.data == "Enabled") {
            window.location.replace("Check.html");
        }
        else {

            window.location.replace("main.html");
        }
    });





}