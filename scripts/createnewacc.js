var userdata=JSON.parse(localStorage.getItem("userdatabase")) ||[]

function creteaccount(){
    var email = document.querySelector("#newemail").value;
    var password = document.querySelector(".enterpass").value;

    var usercred={
        emailadd:email,
        pass:password,
    }

    userdata.push(usercred);
    localStorage.setItem("userdatabase",JSON.stringify(userdata));
    alert("successfull")
    window.location.href = "./signin.html"
}