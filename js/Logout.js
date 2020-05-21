

function LogOut() {
    
    firebase.auth().signOut().then(function () {
        window.location.replace("index.html");
    }).catch(function (error) {
        
        alert(error.message);
    });
}


