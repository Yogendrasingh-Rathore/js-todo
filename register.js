var password, uname, cpassword, gender, email, address, profile_pic;

function validation()
{
    var flag = 1;
    password = document.getElementById("r_password").value;
    uname = document.getElementById("r_uname").value;
    cpassword = document.getElementById("r_cpassword").value;
    gender = document.getElementById("gender");
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    profile_pic = document.getElementById("profile_pic").value;


    var patt_password =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(!patt_password.test(password))
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
        profile_data();
    }
    else
    {
        alert("Your data is not stored until you clear all the errors!")
    }
   
}    