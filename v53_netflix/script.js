function pro(){
        alert("We redicrect to the the orignal website Sign In Page...");
        window.open("https://www.netflix.com/login");
}

function pro1(){
        var input = document.getElementById("youremail").value;
        if(input == ""){
                alert("Please Enter Your Email Address.")
        }
        else{
                document.getElementById("youremail").value = "";
                alert("Your Email Address is stored.")
        }
}

function pro2(){
        window.open("https://www.netflix.com/in/");
}