(function () {
    selected_searchItem();
    document.getElementById("status_section").style.display = "none";
    document.getElementById("search_list").style.display = "none";
})();

function selected_searchItem()
{
    let selected_item = document.getElementById("search_by").value;

    if(selected_item === "Category")
    {
        document.getElementById("searchby_StartDate").style.display = "none";
        document.getElementById("searchby_EndDate").style.display = "none";
        document.getElementById("searchby_status").style.display = "none";
        document.getElementById("searchby_category").style.display = "block";
    }
    else if(selected_item === "Start_date")
    {
    document.getElementById("searchby_category").style.display = "none";
    document.getElementById("searchby_EndDate").style.display = "none";
    document.getElementById("searchby_status").style.display = "none"; 
    document.getElementById("searchby_StartDate").style.display = "block";
    }
    else if(selected_item === "End_date")
    {
        document.getElementById("searchby_category").style.display = "none";
        document.getElementById("searchby_StartDate").style.display = "none";
        document.getElementById("searchby_status").style.display = "none"; 
        document.getElementById("searchby_EndDate").style.display = "block";
    }
    else if(selected_item === "Status")
    {
        document.getElementById("searchby_category").style.display = "none";
        document.getElementById("searchby_EndDate").style.display = "none";
        document.getElementById("searchby_StartDate").style.display = "none";
        document.getElementById("searchby_status").style.display = "block"; 
    }
}


var d = new Date();
var display_date = ''+ d.getDate() +'/'+ (d.getMonth()+1) + '/'+d.getFullYear();
document.getElementById("time_date").innerHTML = display_date;    

function add_category()
{
    let category_name = document.getElementById('category_name').value;
    let sel = document.getElementById('category');

    let opt = document.createElement('option');

    opt.appendChild( document.createTextNode(category_name) );
    opt.value = category_name; 
    sel.appendChild(opt); 
}
