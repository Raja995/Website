


firebase.auth().onAuthStateChanged(async function (user) {

    if (user) {


        const test4 = firebase.functions().httpsCallable('CheckOtpStatus');
       await test4({ userId: firebase.auth().currentUser.uid }).then(result => {

            if (result.data == "Enabled") {
                document.getElementById('otpStatus').innerHTML = "OTP ACTIVATED";
            }
            else {
                document.getElementById('otpStatus').innerHTML = "Key to Activate OTP : <br>"+user.uid;
            }
        })
    } else {



    }

});



