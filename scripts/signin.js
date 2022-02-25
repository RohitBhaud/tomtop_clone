var regdUsers = JSON.parse(localStorage.getItem("userdatabase"))

 function verifyuser(){

    var email = document.querySelector("#email").value;
        var password = document.querySelector("#pass").value;

        if(email==="admin" && password==="admin"){
            window.location.href ="admin.html"
        }
        else{
            flag = false
           for(var i=0 ; i<regdUsers.length;i++){
             
               if(regdUsers[i].emailadd==email && regdUsers[i].pass==password){
                   alert("Sucessfull")
                   window.location.href="index.html"
                   flag = true
                   break
               }
               else if(regdUsers[i].emailadd!=email || regdUsers[i].pass!=password){
                   flag = false
               }
             

           }
           if(flag == false){
               alert("invalid Credentials")
           }
        }

 }



    function movetocreate(){
        window.location.href = "./createnewacc.html"
    }
