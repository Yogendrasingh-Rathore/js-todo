(function ()
{
    
    let get_userData = {};
    get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));
    let to_do_list = [];
    to_do_list = get_userData.todo;
    let todoid;

    let profile_image = document.getElementById("profile_image");
    let pic_address = get_userData['userImage'];   
    
    profile_image.innerHTML = profile_image.setAttribute("src",pic_address);

    let d = new Date();

    for(key in to_do_list)
    {        
        if(to_do_list.hasOwnProperty(key) ){
           
            let data = [];
            data = Object.values(to_do_list[key]);
            let tr = document.createElement("TR");
            document.getElementById("todolist").appendChild(tr);
            todoid = data[9]; 

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
            
            if(data[5] == "Yes" && new Date(data[6]).getDate() == d.getDate() && new Date(data[6]).getMonth() == d.getMonth() && new Date(data[6]).getFullYear() == d.getFullYear())
            {
                alert("Reminder for Task : "+ data[1]+ ' Start Date: '+ data[2]+ ' End Date: ' + data[3] + ' Status: ' +data[4]);
            
            }                      
        }
        
        createButton(todoid,"todolist");
        
    } 

})();

function to_do()
{
    let flag = reminder_validation();

    let e = document.getElementById("category").value;
    if(e=="")
    {
        flag=1;
        alert("To Do not added, Must select the category");
    }

    if(flag == 0)
    {
        let userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));

        let e = document.getElementById("category");
        let category = e.options[e.selectedIndex].value;

        let start_date = document.getElementById("start_date").value;
        let end_date = document.getElementById("end_date").value;
        let task = document.getElementById("task").value;
        let isReminder_yes = document.getElementById("isReminder_yes");
        let isReminder_no = document.getElementById("isReminder_no");
        let isReminder_date = document.getElementById("isReminder_date").value;
        let isPublic_yes = document.getElementById("isPublic_yes");
        let isPublic_no = document.getElementById("isPublic_no");
        let isReminder, isPublic;

        if(isReminder_yes.checked == true)
        {
            isReminder = "Yes";
        }
        else
        {
            isReminder = "No";
        }

        if(isPublic_yes.checked == true)
        {
            isPublic = "Yes";
        }
        else
        {
            isPublic = "No";
        }

        obj = {
            category : category,
            task : task,
            start_date : start_date,
            end_date : end_date,
            status : "To-Do",
            isReminder : isReminder,
            isReminder_date : isReminder_date,
            isPublic : isPublic
        };
        
        obj.user = sessionStorage.getItem('activeUser');
            
        userData.toDoId++;
        obj.id = userData.toDoId;

        userData.todo.push(obj);

        localStorage.setItem(sessionStorage.getItem('activeUser'),JSON.stringify(userData));     
        cleanup();
        location.reload();        
    }
   
}


function createButton(checkbox_id,flag)
{
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox"; 
    checkbox.name = "checkbox"; 
    checkbox.id = checkbox_id;   

    let td = document.createElement("TD");
    td.appendChild(checkbox);
    
    if(flag == "todolist")
    {
        document.getElementById("todolist").appendChild(td);           
    }
    else
    {
        document.getElementById("table_data").appendChild(td);         
    }

    return 0;
}

function todo_EditMode()
{
    let checkboxes = document.getElementsByName("checkbox");
    let counter=0;
    let flag;
        
    for (let i=0; i<checkboxes.length; i++) {
           
        if (checkboxes[i].checked) {
            counter++;
            if(counter > 1)
            {
                alert("Cannot Edit More than one record at a time!");
                break;
            }    
            checkbox_id = checkboxes[i].id;
        }
    }

    if(counter < 1)
    {
        alert("Cannot Edit, Must select a record before edit!");
    }
    if(counter == 1)
    {
        document.getElementById("status_columnName").style.display = "block";
        document.getElementById("status_columnData").style.display = "block";
        document.getElementById("Add_Task").style.display = "none";

        let isReminder_yes = document.getElementById("isReminder_yes");
        let isReminder_no = document.getElementById("isReminder_no");
        let isPublic_yes = document.getElementById("isPublic_yes");
        let isPublic_no = document.getElementById("isPublic_no");
        let isReminder, isPublic;

        let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));

        let to_do_list = [];
        to_do_list = get_userData.todo;    

        for(key in to_do_list)
        {        
            if(to_do_list.hasOwnProperty(key) ){
            
                let data = [];
                data = Object.values(to_do_list[key]);

                if(data[9] == checkbox_id)
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
                    isReminder = data[5];
                    if(isReminder == "Yes")
                    {
                        isReminder_yes.checked = true;
                    }
                    else
                    {
                        isReminder_no.checked = true;
                    }
                    let isReminder_date = document.getElementById("isReminder_date");
                    isReminder_date.value = data[6];
                    isPublic = data[7];   
                    if(isPublic == "Yes")
                    {
                        isPublic_yes.checked = true;
                    }
                    else
                    {
                        isPublic_no.checked = true;
                    }            

                    alert("Selected Record is Displayed on the 'Add Task' tab!");
                    break;
                }
                
            }
        }
    }

}

function todo_Delete()
{
    let checkboxes = document.getElementsByName("checkbox");
    
    let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));
    let to_do_list = [];
    to_do_list = get_userData.todo;

    for (let i=checkboxes.length - 1; i>=0; i--) {       
        if (checkboxes[i].checked) {
            to_do_list.splice(i, 1);
            get_userData.todo = to_do_list;       
            localStorage.setItem(sessionStorage.getItem('activeUser'),JSON.stringify(get_userData));                 
        }
    }  
    location.reload();
}

function todo_Update()
{
    let checkboxes = document.getElementsByName("checkbox");
    let counter=0;
    let flag;
        
    for (let i=0; i<checkboxes.length; i++) {
           
        if (checkboxes[i].checked) {
            counter++;
            if(counter > 1)
            {
                alert("Cannot Update More than one record at a time!");
                break;
            }    
            checkbox_id = checkboxes[i].id;
        }
    }

    if(counter < 1)
    {
        alert("Cannot Update, Must select a record before Update!");
    }

    if(counter == 1)
    {

        let flag = reminder_validation();

        if(flag == 0)
        {
            let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));

            let to_do_list = [];
            to_do_list = get_userData.todo;

            let e = document.getElementById("category");
            let category = e.options[e.selectedIndex].value;

            let s = document.getElementById("status");
            let status = s.options[s.selectedIndex].value;

            let start_date = document.getElementById("start_date").value;
            let end_date = document.getElementById("end_date").value;
            let task = document.getElementById("task").value;
        
                let isReminder_yes = document.getElementById("isReminder_yes");
                let isReminder_no = document.getElementById("isReminder_no");
                let isReminder_date = document.getElementById("isReminder_date").value;
                let isPublic_yes = document.getElementById("isPublic_yes");
                let isPublic_no = document.getElementById("isPublic_no");
                let isReminder, isPublic;

                if(isReminder_yes.checked == true)
                {
                    isReminder = "Yes";
                }
                else
                {
                    isReminder = "No";
                }

                if(isPublic_yes.checked == true)
                {
                    isPublic = "Yes";
                }
                else
                {
                    isPublic = "No";
                }


            for(key in to_do_list)
            {        
                    let data = [];
                    data = Object.values(to_do_list[key]);
                    
                    if(data[9] == checkbox_id)
                    {
                        let confirm_update = confirm("Old Record : "+
                        data[0] + " " + data[1] + " " + data[2] + " " + data[3] + " " + data[4]
                        + "\nUpdated Record :  " + category + " " + task + " " + start_date + " " + end_date + " " + status
                        + "\nDo you want to Update");
                        if (confirm_update == true) {
                        data[0] = category;
                        data[1] = task;
                        data[2] = start_date;
                        data[3] = end_date;
                        data[4] = status;  
                        data[5] = isReminder;
                        data[6] = isReminder_date;
                        data[7] = isPublic;
                        to_do_list[key] = data;
                        alert('Data Updated');
                        }
                        break;
                    }
                    
                
            }
            get_userData.todo = to_do_list;

            localStorage.setItem(sessionStorage.getItem('activeUser'),JSON.stringify(get_userData));     
            cleanup();
            location.reload();
        }
    }
}

function table_data_appendChild(data)
{
    let td = document.createElement("TD");
    let td_data = document.createTextNode(data);
    td.appendChild(td_data);
    document.getElementById("table_data").appendChild(td);
}

function searchby_category(to_do_list,selected_data)
{
    let found = "false";
    for(key in to_do_list)
    {          
            let data = [];
            data = Object.values(to_do_list[key]);
            
            todoid = data[9]; 

                    if(data[0] === selected_data)
                    {    
                        found = "true";
                        for(let key2 in data)
                        {        
                            if (key2 > 7){
                                break; 
                            }else{
                                table_data_appendChild(data[key2]);
                            }
                        }
                        createButton(todoid,"table_data");                       
                    }                      
    }               
    NoRecordFound(found);
}

function searchby_startDate(to_do_list,selected_data)
{
    let found = "false";
    for(key in to_do_list)
    {          
            let data = [];
            data = Object.values(to_do_list[key]);
            
            todoid = data[9]; 

            if(data[2] === selected_data)
            {
                found = "true";
                for(let key2 in data)
                {        
                    if (key2 > 7){
                        break; 
                    }else{
                        table_data_appendChild(data[key2]);
                    }
                }
            createButton(todoid,"table_data");
            }                     
    }
    NoRecordFound(found);
}

function searchby_endDate(to_do_list,selected_data)
{
    let found = "false";
    for(key in to_do_list)
    {          
        let data = [];
        data = Object.values(to_do_list[key]);
            
        todoid = data[9]; 
            if(data[3] === selected_data)
            {
                found = "true";
                for(let key2 in data)
                {        
                    if (key2 > 7){
                        break; 
                    }else{
                        table_data_appendChild(data[key2]);
                    }
                }
                createButton(todoid,"table_data");
            } 
    }  
    NoRecordFound(found);
}

function searchby_status(to_do_list,selected_data)
{
    let found = "false";
    for(key in to_do_list)
    {          
        let data = [];
        data = Object.values(to_do_list[key]);
            
        todoid = data[9];
        if(data[4] === selected_data)
        {
            found = "true";
            for(let key2 in data)
            {        
                if (key2 > 7){
                    break; 
                }else{
                    table_data_appendChild(data[key2]);
                }
            }
            createButton(todoid,"table_data");
        }                      
    }
    NoRecordFound(found);
}


function searchby_taskDetails(to_do_list,selected_data)
{
    let found = "false";
    for(key in to_do_list)
    {          
        let data = [];
        data = Object.values(to_do_list[key]);
        todoid = data[9];
        
        if(data[1] === selected_data)
        {
            found = "true";
            for(let key2 in data)
            {        
                if (key2 > 7){
                    break; 
                }else{
                    table_data_appendChild(data[key2]);
                }
            }
            createButton(todoid,"table_data");
        }
    }
    NoRecordFound(found);
}

function NoRecordFound(found)
{
    if(found == "false")
    {
        let td = document.createElement("TR");
        let td_data = document.createTextNode("No Record Found");
        td.appendChild(td_data);
        document.getElementById("table_data").appendChild(td);
    }
}

function to_do_search()
{
    document.getElementById("todolist").style.display = "none";
    document.getElementById("search_list").style.display = "block";

    empty_table();

    let get_userData = JSON.parse(localStorage.getItem(sessionStorage.getItem('activeUser')));
    let to_do_list = [];
    to_do_list = get_userData.todo;
    let todoid;

    let searchby = document.getElementById("search_by").value;
    let selected_data;
    
    if(searchby === "Category")
    {
        selected_data = document.getElementById("category_search").value;
        searchby_category(to_do_list,selected_data);
    }
    if(searchby === "Start_date")
    {
        selected_data = document.getElementById("startdate_search").value;
        searchby_startDate(to_do_list,selected_data);
    }
    if(searchby === "End_date")
    {
        selected_data = document.getElementById("enddate_search").value;
        searchby_endDate(to_do_list,selected_data);
    }
    if(searchby === "Status")
    {
        selected_data = document.getElementById("status_search").value;
        searchby_status(to_do_list,selected_data);
    }
    if(searchby === "Task Details")
    {
        selected_data = document.getElementById("task_details").value;
        searchby_taskDetails(to_do_list,selected_data);
    }
    
    cleanup();
}


function empty_table()
{
    let Parent = document.getElementById("table_data");
    while(Parent.hasChildNodes())
    {
       Parent.removeChild(Parent.firstChild);
    }
}

function cleanup()
{
    document.getElementById("category_name").value = "";
    document.getElementById("end_date").value = "";
    document.getElementById("start_date").value = "";
    document.getElementById("isReminder_date").value = "";
    document.getElementById("task").value = "";
}

function date_validation()
{
    let startDate = document.getElementById("start_date").value;
    let endDate = document.getElementById("end_date").value;

    let d = new Date();

    let startDate_year =  startDate.slice(0,4);
    let startDate_month =  startDate.slice(5,7);
    let startDate_date =  startDate.slice(8,10);

    function clear()
    {
        document.getElementById("end_date").value = "";
        document.getElementById("start_date").value = "";
    }

    if(!(startDate_year >= d.getFullYear() && startDate_month >= (d.getMonth()+1) && startDate_date >= d.getDate() ))
    {
        alert("Selected Date must be greater than or equal to today");
        clear();
    }

    if ((Date.parse(startDate) >= Date.parse(endDate))) {
        alert("End date should be greater than Start date");
        clear();
    }

    

}

function reminder_validation()
{
    let start_date = document.getElementById("start_date").value;
    let end_date = document.getElementById("end_date").value;
    let flag = 0;
        
        let isReminder_yes = document.getElementById("isReminder_yes");
        let isReminder_date = document.getElementById("isReminder_date").value;
        let isReminder;

        if(isReminder_yes.checked)
        {
            isReminder = "Yes";
        }else
        {
            isReminder = "No";
        }

        if(start_date=="" || end_date=="")
        {
            flag = 1;
        }else if(isReminder_date < start_date && isReminder == "Yes"|| isReminder_date > end_date && isReminder == "Yes")
        {
             flag = 2;
        }else if(isReminder =="Yes" && isReminder_date =="")
        {
            flag = 3;
        }else if(isReminder =="No" && isReminder_date !="")
        {
            flag = 4;
        }else if(isReminder =="No" && isReminder_date =="")
        {
            flag = 0;
        }


    switch(flag) {
        case 1:
            alert("Cannot Add To-Do, Must have Start and End Date");
            break;
        case 2:
            alert("The Reminder Date must be between " + start_date + " and " + end_date);        
            document.getElementById("isReminder_date").value = "";              
            break;
        case 3:
            alert("Cannot Add To-Do, Must Set the Reminder Date!");
            break;
        case 4:
            alert("Cannot Set Reminder Date, isReminder is Not Selected");
            document.getElementById("isReminder_date").value = "";              
            break;
    }

    return flag;
}