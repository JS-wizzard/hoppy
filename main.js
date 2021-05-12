function validateForm() {
    var x = document.forms["login"]["user"].value;
    var username = ['sahiljain1205'];
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }else{
        if(username.includes(x)){
            var  password = document.forms["login"]["password"].value;
            if (password == "") {
                alert("Password must be filled out");
                return false;
            }else{
                //sahil1205
                var correct_pass = 'c2FoaWwxMjA1';
                if (btoa(password) == correct_pass){
                    location.replace('sahil.html')
                }else{alert("Please check your password")}
            }
        }else{
            alert("Please check your Username.")
        }
    }

    
  }

  function showpassword() {
    var x = document.getElementById("password_entered");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }