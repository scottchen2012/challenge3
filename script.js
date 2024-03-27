// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
const employees = [];


const employee = {
  firstName:"",
  lastName:"",
  salary: 0

}
  employee.firstName = prompt("enter employee's first name");
  employee.lastName = prompt("enter employee's last name");
  employee.salary = prompt("enter employee's salary");

  if(isNaN(employee.salary)) {
    employee.salary = 0;
  } else {
    employee.salary = parseInt (employee.salary);
  }

employees.push(employee);

  while(confirm("do you want to add new employee?")) {
    const employees = {
      firstName: "",
      lastName:"",
      salary: 0

    }

    employee.firstName = prompt("enter employee's first name");
    employee.lastName = prompt("enter employee's last name");
    employee.salary = prompt("enter employee's salary");
  
    if(isNaN(employee.salary)) {
      employee.salary = 0;
    } else {
      employee.salary = parseInt (employee.salary);
    }
  
  employees.push(employee);
  }

  return employees;
};



// Display the average salary
const displayAverageSalary = function(employees) {
  // TODO: Calculate and display the average salary
  let allsalary = 0;
  // Calculate the total salary
  employees.forEach(employee => {
    allsalary += employee.salary;
});

// Calculate the average salary
const averageSalary = allsalary / employees.length;

// Log the average salary to the console
console.log(`The average employee salary between our employees is $${averageSalary.toFixed(2)}`);
};


// Select a random employee
const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee
  // Generate a random index within the array length
const randomIndex = Math.floor(Math.random() * employees.length);

// Get the element at the random index
const randomElement = employees[randomIndex];
const randomemployee = randomElement;

console.log(`Congratulations to ${randomemployee}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
