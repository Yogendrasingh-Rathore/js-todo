
function auth()
{
    var uname = document.getElementById("l_uname").value;
    var pwd = document.getElementById("l_pwd").value;

    if(uname == localStorage.getItem("username") && pwd == localStorage.getItem("pwd"))
    {
        alert("Login Successfull");
        location.replace("to-do-mainpage.html");
    }
    else
    {
        alert("Invalid Credentials!");
        location.href = "homepage.html";
    }
}