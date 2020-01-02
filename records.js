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

        let obj1 = JSON.parse(localStorage.getItem('users')) || [];
        let val = [];
        val = obj1.userNames;
        let flag = 1;

        for(let key in val)
        {
           
            if(val.hasOwnProperty(key) ){
              
                if(val[key] == uname )
                {
                    let userDetails = JSON.parse(localStorage.getItem(obj1.userNames[key]));
                    alert(val[key] + "  UserName Already Exists!");
                    flag = 0;
                    break;                    
                }
            }
        }

        if(flag!=0)
        {
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
    let isReminder = document.getElementById("isReminder").value;
    let isReminder_date = document.getElementById("isReminder_date").value;
    let isPublic = document.getElementById("isPublic").value;

    obj = {
        category : category,
        task : task,
        start_date : start_date,
        end_date : end_date,
        status : status,
        isReminder : isReminder,
        isReminder_date : isReminder_date,
        isPublic : isPublic
    };
    
    obj.user = sessionStorage.getItem('activeUser');
        
    userData.toDoId++;
    obj.id = userData.toDoId;

    userData.todo.push(obj);

    localStorage.setItem(sessionStorage.getItem('activeUser'),JSON.stringify(userData));     
    
    location.reload();
}


function to_do_display()
{
    
    let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));
    let to_do_list = [];
    to_do_list = get_userData.todo;

    for(key in to_do_list)
    {        
        if(to_do_list.hasOwnProperty(key) ){
           
            let data = Object.values(to_do_list[key]);
            let tr = document.createElement("TR");
            document.getElementById("todolist").appendChild(tr);

            for(let key2 in data)
            {        
                if (key2 > 7)
                    break; 
                if(data.hasOwnProperty(key2) ){  
                    
                    let td = document.createElement("TD");
                    let td_data = document.createTextNode(data[key2]);
                    td.appendChild(td_data);
                    document.getElementById("todolist").appendChild(td);
                }
            }                      
        }

        let isReminder_name = 'isReminder' + key;
        //let isReminder_id = 'isReminder' + key;
        //createRadioButton(isReminder_name);
        //createCalender();
        let isPublic_name = 'isPublic' + key;
        //createRadioButton(isPublic_name);
        
        let Delete_id = 'Delete' + key;
        let Update_id = 'Update' + key;
        let EditMode_id = 'EditMode' + key;
        
        createButton();
        
    } 

}


function createButton()
{
    
    let button_Update = document.createElement("INPUT");
    button_Update.setAttribute("type", "button");
    button_Update.setAttribute("value", "Update");
    button_Update.setAttribute("id", Update_id);
    button_Update.setAttribute("onclick", "todo_Update(this.id)");

    let button_Delete = document.createElement("INPUT");
    button_Delete.setAttribute("type", "button");
    button_Delete.setAttribute("value", "Delete");
    button_Delete.setAttribute("id", Delete_id);
    button_Delete.setAttribute("onclick", "todo_Delete(this.id)");

    let button_EditMode = document.createElement("INPUT");
    button_EditMode.setAttribute("type", "button");
    button_EditMode.setAttribute("value", "EditMode");
    button_EditMode.setAttribute("id", EditMode_id);
    button_EditMode.setAttribute("onclick", "todo_EditMode(this.id)");

    let td = document.createElement("TD");
    td.appendChild(button_EditMode);
    td.appendChild(button_Update);
    td.appendChild(button_Delete);

    document.getElementById("todolist").appendChild(td);           

    return 0;
}

function todo_EditMode(EditMode_id)
{
    let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));

    let to_do_list = [];
    to_do_list = get_userData.todo;

    let size = EditMode_id.length;
    let user_to_id = EditMode_id.charAt(size-1);

    for(key in to_do_list)
    {        
        if(to_do_list.hasOwnProperty(key) ){
           
            let data = [];
            data = Object.values(to_do_list[key]);
            alert(EditMode_id);
            if(data[9] == user_to_id)
            {
                
                let category = document.getElementById("category");
                category.value = data[0];
                let task = document.getElementById("task");
                task.value = data[1];
                let start_date = document.getElementById("start_date");
                start_date.value = data[2];
                let end_date = document.getElementById("end_date");
                end_date.value = data[3];
                let status = document.getElementById("status");
                status.value = data[4];
                let isReminder = document.getElementById("isReminder");
                isReminder.value = data[5];
                let isReminder_date = document.getElementById("isReminder_date");
                isReminder_date.value = data[6];
                let isPublic = document.getElementById("isPublic");
                isPublic.value = data[7];               

                alert("Selected Record is Displayed on the 'Add Task' tab!");
                break;
            }
            
        }
    }

}

function todo_Delete()
{
    let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));
    let to_do_list = [];
    to_do_list = get_userData.todo;

    let size = Delete_id.length;
    let user_to_id = Delete_id.charAt(size-1);

    for(key in to_do_list)
    {        
        if(to_do_list.hasOwnProperty(key) ){
           
            let data = [];
            data = Object.values(to_do_list[key]);
            
            if(data[9] == user_to_id)
            {
                to_do_list.splice(key, 1);
                alert(data + 'data deleted');
                break;
            }
            
        }
    }
    get_userData.todo = to_do_list;

    localStorage.setItem(sessionStorage.getItem('activeUser'),JSON.stringify(get_userData));        

    location.reload();

}

function todo_Update()
{
    let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));

    let to_do_list = [];
    to_do_list = get_userData.todo;

    // let size = Update_id.length;
    // let user_to_id = Update_id.charAt(size-1);

    let e = document.getElementById("category");
    let category = e.options[e.selectedIndex].value;

    let s = document.getElementById("status");
    let status = s.options[s.selectedIndex].value;

    let start_date = document.getElementById("start_date").value;
    let end_date = document.getElementById("end_date").value;
    let task = document.getElementById("task").value;
    let isReminder = document.getElementById("isReminder").value;
    let isReminder_date = document.getElementById("isReminder_date").value;
    let isPublic = document.getElementById("isPublic").value;

    
    
    //let isReminder = document.getElementsByName("isReminder1").value;

    for(key in to_do_list)
    {        
        if(to_do_list.hasOwnProperty(key) ){
           
            let data = [];
            data = Object.values(to_do_list[key]);
            
            if(data[9] == this.id)
            {
                data[0] = category;
                data[1] = task;
                data[2] = start_date;
                data[3] = end_date;
                data[4] = status;  
                data[5] = isReminder;
                data[6] = isReminder_date;
                data[7] = isPublic;
                to_do_list[key] = data;
                alert(data + '  Data Updated');
                break;
            }
            
        }
    }
    get_userData.todo = to_do_list;

    localStorage.setItem(sessionStorage.getItem('activeUser'),JSON.stringify(get_userData));     
    
    location.reload();
}



// function createRadioButton(name)
// {
                
//     let radio_button_yes = document.createElement("INPUT");
//     radio_button_yes.setAttribute("type", "radio");
//     radio_button_yes.setAttribute("name", name);

//     let radio_button_no = document.createElement("INPUT");
//     radio_button_no.setAttribute("type", "radio");
//     radio_button_no.setAttribute("name", name);

//     let td = document.createElement("TD");
    
//     let td_data_yes = document.createTextNode("Yes");
//     td.appendChild(td_data_yes);
//     td.appendChild(radio_button_yes);

//     let td_data_no = document.createTextNode("No");
//     td.appendChild(td_data_no);
//     td.appendChild(radio_button_no);

//     document.getElementById("todolist").appendChild(td);           

//     return 0;
    
// }

// function createCalender()
// {
//     let calender = document.createElement("INPUT");
//     calender.setAttribute("type", "date");

//     let td = document.createElement("TD");
//     td.appendChild(calender);

//     document.getElementById("todolist").appendChild(td);           

//     return 0;

// }
