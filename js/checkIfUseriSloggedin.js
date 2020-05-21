

firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
        
        window.location.replace("main.html");
    } else {
        
        

    }

});



