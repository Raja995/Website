

function sendPin() {

    firebase.auth().onAuthStateChanged(async function (user) {


        if (user) {
            id = user.uid;
            alert(id);
            var token;
            var test2 = firebase.functions().httpsCallable('getToken');
            await test2({ userId: id }).then(result => {
                token = result.data;


            }, (error) => {

            });

            alert("Token :" + token);
            var string = user.uid + Date.now();

            let OTP = '';


            var len = string.length;
            for (let i = 0; i < 6; i++) {
                OTP += string[Math.floor(Math.random() * len)];
            };



            const test = firebase.functions().httpsCallable('addKey');

            await test({ userId: id, key: OTP }).then(result2 => {




            }, (error) => {
                alert(error.message);
            });
            const message = {
                to: token,
                sound: 'default',
                title: 'Your Website Verification Code',
                body: OTP,
                data: { data: 'goes here' },
                _displayInForeground: true,
            };
            fetch('https://exp.host/--/api/v2/push/send', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Accept-encoding': 'gzip, deflate',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });
        } else {
            window.location.replace("index.html");


        }

    })
}
async function checkPin() {
    firebase.auth().onAuthStateChanged(async function (user) {

        if (user) {
            const test3 = firebase.functions().httpsCallable('getKey');
            await test3({ userId: user.uid, }).then(result3 => {
                alert(user.uid);
                alert("server Key :" + result3.data);
                alert(document.getElementById('Pin').value);
                if (result3.data == document.getElementById('Pin').value) {
                    window.location.replace("main.html");
                }
                else {
                    firebase.auth().signOut().then(function () {

                        window.location.replace("index.html");
                    }).catch(function (error) {

                        alert(error.message);
                    });
                }
            }, (error) => {
                alert(error.code);
            })

        } else {



        }

    });


}
sendPin();
