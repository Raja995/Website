



async function SignIn() {

    await firebase.auth().signInWithEmailAndPassword(document.getElementById('emailInput').value, document.getElementById('passInput').value)
        .then(async function (result) {

            const test = firebase.functions().httpsCallable('CheckOtpStatus');
            await test({ userId: firebase.auth().currentUser.uid }).then(result2 => {
                alert(firebase.auth().currentUser.uid);
                alert(result2.data);
                if (result2.data == "Enabled") {
                    window.location.replace("Check.html");
                }
                else {

                    window.location.replace("main.html");
                }
            })


        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });


}