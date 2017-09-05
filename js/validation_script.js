formCreation();

function formCreation(){
  var formEl = document.createElement("form");
  formEl.setAttribute('name', 'login');
  formEl.setAttribute('method', 'post');
  var input_age = document.createElement("input");
  input_age.setAttribute('type', 'text');
  input_age.setAttribute('name', 'age');
  input_age.setAttribute('value', 'age');
  var input_username = document.createElement("input");
  input_username.setAttribute('type', 'text');
  input_username.setAttribute('name', 'username');
  input_username.setAttribute('value', 'username');
  var input_date = document.createElement("input");
  input_date.setAttribute('type', 'text');
  input_date.setAttribute('name', 'date');
  input_date.setAttribute('value', 'dd/mm/yyyy');
  var input_submit = document.createElement("input");
  input_submit.setAttribute('type', 'submit');
  input_submit.setAttribute('value', 'Validate Me');
  formEl.appendChild(input_age);
  formEl.appendChild(input_username);
  formEl.appendChild(input_date);
  formEl.appendChild(input_submit);
  document.body.appendChild(formEl);
  var h3_El = document.createElement("h3");
  h3_El.setAttribute('id', 'form_validation');
  document.body.appendChild(h3_El);
}

document.forms["login"].onsubmit = function(){
    console.log("form validation");
    var valid_message="";
    // Checking Age
    var age = document.forms["login"]["age"].value;
    var re_number = /^\d+$/;
    if (re_number.test(age)){
      valid_message = age + " - correct age number. ";
    } else {
      valid_message = "Incorrect age number. ";
    }
    //  Checking Username
    var username = document.forms["login"]["username"].value;
    var re_username = /^[*]*user_/;
    if (re_username.test(username)){
      valid_message += username + " - correct username. ";
    } else {
      valid_message +="Incorrect username. ";
    }
    //  Checking Date};
    var date = document.forms["login"]["date"].value;
    var current_date = new Date;
    var current_day = ("0" + current_date.getDate()).slice(-2);
    var current_month = ("0" + (current_date.getMonth() + 1)).slice(-2);
    var current_year = current_date.getFullYear();
    var re_date = current_day + '/' + current_month + '/' +current_year;
    if (date === re_date){
      valid_message += date + " - correct date. ";
    } else {
      valid_message +="Incorrect date, enter today's date";
    }
    alert(valid_message);
    //document.getElementById("form_validation").innerHTML = valid_message; ERROR: ONLY WORKS ON CLICK, BUT DOESNT STAY
    
}
