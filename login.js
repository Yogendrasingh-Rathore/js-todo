
function auth()
{
    var uname = document.getElementById("l_uname").value;
    var password = document.getElementById("l_password").value;
    let obj = JSON.parse(localStorage.getItem('users')) || [];
    let val = [];
    val = obj.userNames;
    // login_email = obj.emailld;

    if(uname == "" || password == "")
    {
        alert("UserName and Password cannot be left blank!");
        location.href = 'homepage.html';
    }

    for(let key in val)
    {
        
        if(val.hasOwnProperty(key) ){
            
            if(val[key] == uname )
            {
                let userDetails = JSON.parse(localStorage.getItem(obj.userNames[key]));

                if(userDetails){
                    if(userDetails.password == password){
                        sessionStorage.setItem('activeUser',obj.userNames[key]);
                        location.assign('to-do-mainpage.html');
                        break;
                    }else{
                        alert("Incorrect Password");
                    } 
               }
               else{
                   alert("No such user ... Please Sign Up!");
                   location.href = 'homepage.html';
               }
            }
        }
    }

}