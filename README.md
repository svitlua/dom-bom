# dom-bom
DOM and BOM practice for Cursor Education

# [CURSOR Education](http://cursor.education/) | DOM & BOM homework

1. (task "validation") Implement validation for form below
  ```html
  <form name="login" action="google.com">
     <input type="text" name="age">
     <input type="text" name="username">
     <input type="text" name="date">
     <input type="submit" value="Validate Me">
  </form>
  ```
  - using JS create this form (by ```document.createElement```) and append to ```body```
  - on form submit you need validate below fields
    - ```age``` should contains only numbers
      - (pass) "123"
      - (pass) "0"
      - (pass) "008946798576948567948576948756984756"
      - (failed) "test"
      - (failed) "-1"
      - (failed) " 0"
      - (failed) "10e5"
    - ```username``` should start from "user_"
      - (pass) **user_**test
      - (pass) **user_**213kjasd
      - (pass) **user_**@gmail.com
      - (failed) john
      - (failed) _user_test
      - (failed) testuser_test
    - field ```date``` should contain current date (format ```dd/mm/yyyy```)
    - if data is not valid, alert message ```your data is invalid```
  - submit to github's gh-pages

2. (task "parallax") fix parallax
  - the broken version is https://jsfiddle.net/g2wkha1u/2/
  - made the same as on http://materializecss.com/parallax-demo.html

3. (task "os message") show message per user's system 
  - https://jsfiddle.net/snsyLb3a/

4. (task "localization") create multi-local app
  - https://jsfiddle.net/c97cd2fo/6/
  - using location.hash, or cookie, or localStorage

5. (task "stop & prevent events") what is difference between event.stopPropagation and event.preventDefault
  - https://jsfiddle.net/hkL7380z/2/

## Additional tasks

1. (task "player navigation") Fix the player navigation
  - https://jsfiddle.net/5038a10a/7/
  - Implement moving up & down (by pressing up/down keys)
  - Implement the "fire" action (by pressing the "space" or "enter" keys)

2. (task "list of users") Create the dynamic list of employees on the factory
  - project consists of `css/styles.css`, `js/app.js` and `index.html`
  - the `index.html` consists of
      ```
       <ul class="employeeList">
         <li>
           <span class="employeeFirstName">John</span>
           <span class="employeeLastName">Doe</span>
           <span class="employeeSalary">$ 1000</span>
           <span class="employeePosition">Manager</span>
         </li>
       </ul>
       <button class="addEmployee">Add New emplyee</button>
      ```
  
  - requirements
    - 1) Every List Item Should Contain first name, last name, salary and position
    - 2) Write the function That adds  a new employee to the list (using Prompt or html input elements on your own)
    - 3) Create the field that will indicate number of employees, and average salary after each entry of new row
    - 4) Limit number of employees to 10
    - 5) Add possibility to set the limit of employees
    - 6) Disallow adding new employees when avg. salary reaches $ 2000
    - 7) When Adding Employee, check existing employees first name/last name, disallow duplicates
