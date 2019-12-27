
function logout()
{
    // need to destroy username and password
        sessionStorage.clear();
        alert("Logout Success");
        location.replace("homepage.html");
    
}