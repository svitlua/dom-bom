/*Requirements
1) + Every List Item Should Contain first name, last name, salary and position
2) + Write the function That adds a new employee to the list (using Prompt or html input elements on your own)
3) + Create the field that will indicate number of employees, and average salary after each entry of new row
5) + Add possibility to set the limit of employees
6) + Disallow adding new employees when avg. salary reaches $ 2000
7) + When Adding Employee, check existing employees first name/last name, disallow duplicates*/
var maxEmployeeNumber;
var employeeArr = [];
var first;
var last;
var salary;
var position;

document.getElementById('maxBtn').onclick = function (){
  maxEmployeeNumber = parseInt(document.forms["maxEmployeeNumber"]["max"].value);
  if (maxEmployeeNumber>0){
    document.getElementById('addEmployeeBtn').style.visibility="visible";
    document.forms["maxEmployeeNumber"].style.display="none";
    //classList.remove('visible')
    var max_text = "Max number: " + maxEmployeeNumber;
    document.getElementById('max_number').innerHTML = max_text;
    document.getElementById('max_number').style.visibility="visible";
    document.getElementById('employeeList').style.visibility = "visible";
  } else{
    alert("Enter correct max number of employees!");
  }
}

document.getElementById('addEmployeeBtn').onclick = function (){
  if(maxEmployeeNumber > employeeArr.length){
    var average = averageSalary();
    if(average<=2000){
      formClear();
      document.getElementById('addEmployeeForm').style.visibility="visible"
    }else {
      alert("Maximum salary reached $2000");
    }
  }else{
    alert("Exceeded max number of employees!");
  }
}

/*
document.getElementById('clearBtn').onclick = function (){
  maxEmployeeNumber = 0;
  employeeArr = [];
  document.forms["maxEmployeeNumber"].elements.namedItem("max").value="";
  document.forms["maxEmployeeNumber"].style.display="block";
  document.getElementById('max_number').style.visibility="hidden";
  document.getElementById('addEmployeeBtn').style.visibility="hidden";
  document.getElementById('addEmployeeForm').style.visibility = "hidden";
  document.getElementById('employeeList').style.visibility = "hidden";
  document.getElementById('stats').style.visibility = "hidden";
}
*/

document.getElementById('addBtn').onclick = function (){
  if (formValidation()){
    document.getElementById('addEmployeeForm').style.visibility = "hidden";
    var newEmployee = new employee(first, last, salary, position);
    employeeArr.push(newEmployee);

    // Adding New Employee to employeeList <UL>
    var $li = document.createElement("li");
    $li.setAttribute("class", "employee_li");
    var $span_first = document.createElement("span");
    $span_first.setAttribute('class', 'employeeFirstName');
    var content = document.createTextNode(first);
    $span_first.appendChild(content);
    console.log($span_first);
    var $span_last = document.createElement("span");
    $span_last.setAttribute('class', 'employeeLastName');
    content = document.createTextNode(last);
    $span_last.appendChild(content);
    var $span_salary = document.createElement("span");
    $span_salary.setAttribute('class', 'employeeSalary');
    content = document.createTextNode(salary);
    $span_salary.appendChild(content);
    var $span_position = document.createElement("span");
    $span_position.setAttribute('class', 'employeePosition');
    content = document.createTextNode(position);
    $span_position.appendChild(content);
    $li.appendChild($span_first);
    $li.appendChild($span_last);
    $li.appendChild($span_salary);
    $li.appendChild($span_position);
    document.getElementById("employeeList").appendChild($li);

    //Adding number of employees and average salary
    var average = averageSalary();
    var num_text = "Number of Employees: " + employeeArr.length;
    var average_text = "Average Salary: $" + average;
    document.getElementById("employeeNum").innerHTML = num_text;
    document.getElementById("averageSalary").innerHTML = average_text;
  }
}

function formValidation(){
  first = document.forms["addEmployeeForm"]["firstname"].value;
  last = document.forms["addEmployeeForm"]["lastname"].value;
  salary = document.forms["addEmployeeForm"]["salary"].value;
  position = document.forms["addEmployeeForm"]["position"].value;

  //Validating form data: Every List Item Should Contain first name, last name, salary and position
  if (/\S/.test(first)){ //Contains symbols, which is not only space
    if (/\S/.test(last)){
      if(parseFloat(salary)>0){
        if(/\S/.test(position)){
          //Checking for duplicates in employee firstname and lastname
          for(var i=0; i<employeeArr.length; i++){
            console.log("Checking names");
            if (first === employeeArr[i]["firstname"] && last === employeeArr[i]["lastname"]){
              alert("Employee with such firstname and lastname already exhists in the list");
              return false;
            }
          }
        }else{
          alert("Enter correct position");
          return false;
        }
      }else{
        alert("Enter corect salary");
        return false;
      }
    }else{
      alert("Enter correct lastname");
      return false;
    }
  }else{
    alert("Enter correct firstname");
    return false;
  }

  return true;
}

function formClear(){
  document.forms["addEmployeeForm"]["firstname"].value = "";
  document.forms["addEmployeeForm"]["lastname"].value = "";
  document.forms["addEmployeeForm"]["salary"].value = "";
  document.forms["addEmployeeForm"]["position"].value = "";
}

function averageSalary(){
  if(employeeArr.length>0){
    var totalSalary = 0;
    for(var i=0; i<employeeArr.length; i++){
      totalSalary += parseFloat(employeeArr[i]["salary"]);
    }
    var average = (totalSalary/(employeeArr.length)).toFixed(2);
    return average;
  }else {return 0;}
}

function employee(first, last, salary, position) {
    this.firstname = first;
    this.lastname = last;
    this.salary = salary;
    this.position = position;
}
