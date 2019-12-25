var pwd, uname, cpwd, gender, email, addr, profile_pic;

function validation()
{
    var flag = 1;
    pwd = document.getElementById("r_pwd").value;
    uname = document.getElementById("r_uname").value;
    cpwd = document.getElementById("r_cpwd").value;
    gender = document.getElementById("gender");
    email = document.getElementById("email").value;
    addr = document.getElementById("addr").value;
    profile_pic = document.getElementById("profile_pic").value;


    var patt_pwd =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(!patt_pwd.test(pwd))
    {
        alert("Invalid Password, Must have minimum length 6, 1 lowercase, 1 uppercase, 1 digit, 1 special char");
        flag = 0;
    }
  
    // if(gender[0].checked)
    // {
    //     gender_val = gender[0].value;
    // }
    // else
    // {
    //     gender_val = gender[1].value;
    // }

    var patt_email = /\w+\d*\@\w+\.\w{2,6}/;
    
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

        var profile = [uname,pwd,email,addr,profile_pic];
        var records = { pid : profile, to_do : ["category", "from", "to", "status"]};
        
        localStorage.setItem("yuvi_records",JSON.stringify(records));

        // localStorage.setItem("username", uname);
        // localStorage.setItem("pwd", pwd);
        // // localStorage.setItem("gender", gender);
        // localStorage.setItem("email", email);
        // localStorage.setItem("addr", addr);
        // localStorage.setItem("profile_pic", profile_pic);
        // // Retrieve

        var getval = JSON.parse(localStorage.getItem("yuvi_records"));
        document.getElementById("result").innerHTML = getval[0];
        alert(getval[0] + " has Successfully Registered !");
        window.location.href = "homepage.html";
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
}