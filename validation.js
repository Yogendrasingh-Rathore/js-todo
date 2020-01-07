var password, uname, cpassword, gender, email, address, profile_pic;

function validation()
{
    let flag = 1;
    password = document.getElementById("r_password").value;
    uname = document.getElementById("r_uname").value;
    cpassword = document.getElementById("r_cpassword").value;
    gender = document.getElementById("gender").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    profile_pic = document.getElementById("profile_pic").value;

    if(uname == "" || password == "" || cpassword == "" || gender == "" || email == "" || address == "" || profile_pic == "")
    {
        alert("Fields cannot be left blank!");
        location.href = 'homepage.html';
    }

    let patt_password =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(!patt_password.test(password))
    {
        alert("Invalid Password, Must have minimum length 6, 1 lowercase, 1 uppercase, 1 digit, 1 special char");
        flag = 0;
    }

    if(password != cpassword)
    {
        alert("Password Not Match");
        flag = 0;
    }
  
    if( gender[0].checked == false || gender[1].checked == false || gender[2].checked == false)
    {
        alert("Please select the gender!");
        flag = 0;
    }

    let patt_email = /\w+\d*\@\w+\.\w{2,6}/;
    
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
        alert("Your data is not stored until you clear all the errors!");
    }
   
}    


function date_validation()
{
    let startDate = document.getElementById("start_date").value;
    let endDate = document.getElementById("end_date").value;

    if ((Date.parse(startDate) >= Date.parse(endDate))) {
            alert("End date should be greater than Start date");
            document.getElementById("end_date").value = "";
            document.getElementById("start_date").value = "";
    }

    // let ToDate = new Date();

    // if (new Date(startDate).getTime() <= ToDate.getTime() || new Date(endDate).getTime() <= ToDate.getTime()) {
    //       alert("The Date must be Bigger or Equal to today date");
    //       document.getElementById("end_date").value = "";
    //       document.getElementById("start_date").value = "";
    //  }

}

function isReminderdate()
{
    let startDate = document.getElementById("start_date").value;
    let endDate = document.getElementById("end_date").value;
    let isReminder_date = document.getElementById("isReminder_date").value;

    if (isReminder_date < startDate || isReminder_date > endDate)
     {
          alert("The Date must be between " + startDate + " and " + endDate);
          document.getElementById("isReminder_date").value = "";
    
     }
}