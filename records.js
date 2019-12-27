
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

    userData.todo.push(obj);

    localStorage.setItem(sessionStorage.getItem('activeUser'),JSON.stringify(userData));

    let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));

    for(let key in get_userData)
    {        
        if(get_userData.hasOwnProperty(key) ){

            let data = Object.values(get_userData.todo[key]);
            
            
        }
    }
}