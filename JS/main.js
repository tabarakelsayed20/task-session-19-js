
// validation

function validateData(){

    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.setAttribute("class alert alert-danger text-center about")


    if(user =="" && email =="" && pass =="" && confirm ==""){
        result.innerHTML = "Enter Data In Form";
        return false;
    }else if(user.length<5 || user.length>15){
        result.innerHTML = "Enter 5==>15 characcter In Name";
        return false;
    }else if(email.indexOf("@",3) == -1 || email.indexOf(".com",5) == -1 ){
        result.innerHTML = "Enter Vaild Email";
        return false;
    }else if(pass.length<8){
        result.innerHTML = "Your password is week";
        return false;
    }else if(pass != confirm){
        result.innerHTML = "Enter confirm password ";
        return false;
    }else{
        return true;
    }
}
