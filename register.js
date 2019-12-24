var uname = document.getElementById("r_uname").value;
var cpwd = document.getElementById("r_cpwd").value;
var gender = document.getElementById("gender");
var email = document.getElementById("email").value;
var addr = document.getElementById("addr").value;
var profile_pic = document.getElementById("profile_pic").value;


function validation()
{
   /* var gender_val;
    if(gender[0].checked)
    {
        gender_val = gender[0].value;
    }
    else
    alert(gender);
    alert(pwd);
*/
    var flag = 1;
    var pwd = document.getElementById("r_pwd").value;


    // Need to add regex for special char

    var patt_pwd =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    alert(patt_pwd.test(pwd));
    if(!patt_pwd.test(pwd))
    {
        alert("Invalid Password, Must have minimum length 6, 1 lowercase, 1 uppercase, 1 digit, 1 special char");
        flag = 0;
    }
  
    var patt_email = /\w+\d*\@\w+\.\w{2,6}/;
    alert(patt_email.test(email));
    if(!patt_email.test(email))
    {
        alert("Invalid Email id, Must be in this format abc@abc.com or abc@abc.org.in");
        flag = 0;
    }

    if(flag != 0)
    {
        store_data();
    }
    else
    {
        alert("Your data is not stored until you clear all the errors!")
    }
   
}    

function store_data()
{
    if (typeof(Storage) !== "undefined") {
        // Store

        localStorage.setItem("username", uname);
        localStorage.setItem("pwd", pwd);
        localStorage.setItem("gender", gender);
        localStorage.setItem("email", email);
        localStorage.setItem("addr", addr);
        localStorage.setItem("profile_pic", profile_pic);
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("uname");
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
}