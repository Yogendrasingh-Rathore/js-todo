//var uname = document.getElementById("l_uname").value;


function profile_data()
{
var userName = document.getElementById("r_uname").value;
var password = document.getElementById("r_password").value;
var gender = document.getElementById("gender").value;
var email = document.getElementById("email").value;
var address = document.getElementById("address").value;
var profile_pic = document.getElementById("profile_pic").value;

    if (typeof(Storage) !== "undefined") {

        let loadUserData = () => JSON.parse(localStorage.getItem('users'))||[];

        let obj = {
            userName : userName,
            email : email,
            password : password,
            gender : gender,
            address : address,
            userImage : profile_pic
            };

                obj.todo = [];
                obj.toDoId = 0;
                let users = loadUserData();
                let userData = {};
                if(users == ""){
                        userData.userNames = [userName];
                        userData.emailId = [email];
                        alert();
                        localStorage.setItem('users', JSON.stringify(userData));
                }else{
                    users.userNames.push(obj.userName);
                    users.emailId.push(obj.email);
                    localStorage.setItem('users', JSON.stringify(users));
                }
                localStorage.setItem(obj.userName, JSON.stringify(obj));
                alert("Registration Successful..");
                location.replace('homepage.html');
           
/*                
            }else{
                // Profile Edit

                let userData = JSON.parse(localStorage.getItem(userName.value))
                userData.password = password.value;
                userData.firstName = firstName.value;
                userData.lastName = lastName.value;
                userData.gender = gender.value;
                userData.address = address.value;
                userData.userImage = picture;
                
                localStorage.setItem(obj.userName, JSON.stringify(userData));
                location.assign('to-do-mainpage.html');
                alert("Profile Updated Successfully");
            }
        }
  */      

        // if(profile[u_name] != uname)
        // {        
        //     profile = [uname,pwd,email,addr,profile_pic];            
        //     records[uname] = { profile , to_do };     
        //     localStorage.setItem("records",JSON.stringify(records));
        //     alert(get_records.undefined.profile[0] + " has Successfully Registered !");
        //     window.location.href = "homepage.html";
               
        // }
        // else
        // {
        //     profile = get_records.undefined.profile;

        //     var e = document.getElementById("category");
        //     var category = e.options[e.selectedIndex].value;

        //     var s = document.getElementById("status");
        //     var status = s.options[s.selectedIndex].value;

        //     var start_date = document.getElementById("start_date").value;
        //     var end_date = document.getElementById("end_date").value;
        //     var task = document.getElementById("task").value;

        //     var x = [];
        //     x = [category,start_date,end_date,status,task];
        
        //     // to_do[0] = [x];
        //     alert(uname);
            
        //     var to_do = {};
        //     to_do = { x };

        //     records[uname] = { profile, to_do };
            
        //     localStorage.setItem("records",JSON.stringify(records));
        // }
             
        
       
        
       // document.getElementById("result").innerHTML = get_records.uname.profile[0];
        
    }
    else
    {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


function to_do()
{
    let userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));

    let e = document.getElementById("category");
    let category = e.options[e.selectedIndex].value;

    let s = document.getElementById("status");
    let status = s.options[s.selectedIndex].value;

    let start_date = document.getElementById("start_date").value;
    let end_date = document.getElementById("end_date").value;
    let task = document.getElementById("task").value;

    obj = {
        category : category,
        task : task,
        start_date : start_date,
        end_date : end_date,
        status : status
    };
    
    obj.user = sessionStorage.getItem('activeUser');
        
    userData.toDoId++;
    obj.id = userData.toDoId;
    alert(userData.toDoId);
    userData.todo.push(obj);

    localStorage.setItem(sessionStorage.getItem('activeUser'),JSON.stringify(userData));
    
}