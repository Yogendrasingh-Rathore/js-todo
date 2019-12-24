var uname = document.getElementById("r_uname").value;
var pwd = document.getElementById("r_pwd").value;

function auth()
{
    if(uname == localStorage.getItem("username") && pwd == localStorage.getItem("pwd"))
    {
        alert("Login Successfull");
        location.replace("to-do-mainpage.html");
    }
    else
    {
        alert("Invalid Credentials!");
        location.replace("to-do-mainpage.html");
    }
}