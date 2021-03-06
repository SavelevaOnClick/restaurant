let departments = [
  {
    title: "first",
    id: 1,
    employees: [
      {
        id: 1,
        firstName: "John",
        secondName: "secondName1",
        position: 2,
        salary: 3000,
        status: false,
      },
      {
        id: 2,
        firstName: "John",
        secondName: "secondName2",
        position: 2,
        salary: 4000,
        status: true,
      },
      {
        id: 3,
        firstName: "John",
        secondName: "secondName3",
        position: 1,
        salary: 10000,
        status: false,
      },
      {
        id: 4,
        firstName: "Samanta",
        secondName: "secondName4",
        position: 3,
        salary: 100,
        status: false,
      },
      {
        id: 5,
        firstName: "John",
        secondName: "secondName5",
        position: 4,
        salary: 1000,
        status: true,
      },
    ],
  },
  {
    title: "second",
    id: 2,
    employees: [
      {
        id: 6,
        firstName: "John",
        secondName: "secondName6",
        position: 2,
        salary: 3000,
        status: true,
      },
      {
        id: 7,
        firstName: "Sandra",
        secondName: "secondName7",
        position: 4,
        salary: 10,
        status: true,
      },
      {
        id: 8,
        firstName: "John",
        secondName: "secondName8",
        position: 4,
        salary: 1000,
        status: true,
      },
      {
        id: 9,
        firstName: "Vik",
        secondName: "secondName9",
        position: 4,
        salary: 1000,
        status: true,
      },
      {
        id: 10,
        firstName: "John",
        secondName: "secondName10",
        position: 1,
        salary: 999,
        status: true,
      },
    ],
  },
  {
    title: "thrid",
    id: 3,
    employees: [
      {
        id: 11,
        firstName: "John",
        secondName: "secondName11",
        position: 2,
        salary: 5000,
        status: true,
      },
      {
        id: 12,
        firstName: "Kori",
        secondName: "secondName1",
        position: 4,
        salary: 2000,
        status: true,
      },
      {
        id: 13,
        firstName: "Koddy",
        secondName: "secondName1",
        position: 5,
        salary: 1599,
        status: true,
      },
      {
        id: 14,
        firstName: "Din",
        secondName: "secondName1",
        position: 2,
        salary: 3000,
        status: true,
      },
      {
        id: 15,
        firstName: "Samanta",
        secondName: "secondName1",
        position: 3,
        salary: 100,
        status: true,
      },
      {
        id: 16,
        firstName: "Sem",
        secondName: "secondName1",
        position: 4,
        salary: 1000,
        status: true,
      },
    ],
  },
];
let positions = [
  {
    title: "lider",
    id: 1,
  },
  {
    title: "cook",
    id: 2,
  },
  {
    title: "dishwasher",
    id: 3,
  },
  {
    title: "waiter",
    id: 4,
  },
  {
    title: "security",
    id: 5,
  },
];
class Restourant {
  constructor(arrayOfDepartmens, arrayOfPositions) {
    this.id = 16;
    this.departments = arrayOfDepartmens;
    this.positions = arrayOfPositions;
    this.root = document.getElementById("root");
    this.render();
  }

  render() {
    this.wrapperMainContent = this.root.appendChild(
      document.createElement("div")
    );
    this.wrapperMainContent.classList.add("wrapperMainContent");
    this.wrapperSideBar = this.root.appendChild(document.createElement("div"));
    this.wrapperSideBar.classList.add("wrapperSideBar");

    // total salarys
    this.wrapperDepartmentsSalarys = this.wrapperSideBar.appendChild(
      document.createElement("div")
    );
    this.titleDepartmentsSalarys = this.wrapperDepartmentsSalarys.appendChild(
      document.createElement("h3")
    );
    this.titleDepartmentsSalarys.innerText =
      "???????????????? ?????????? ?????????? ?????????????? ???? ??????????????";
    this.buttonDepartmentsSalarys = this.wrapperDepartmentsSalarys.appendChild(
      document.createElement("button")
    );
    this.buttonDepartmentsSalarys.innerText = "??????????????????";
    this.buttonDepartmentsSalarys.classList.add("button");
    this.buttonDepartmentsSalarys.onclick = this.outputSalarys.bind(this);
    this.selectEmploeesStatus = this.wrapperDepartmentsSalarys.appendChild(
      this.createSelect(
        this.createStatusList("??????????????????", "????????????????????", "????????")
      )
    );

    // extremum salary department
    this.wrapperDepartmentsExtremumSalary = this.wrapperSideBar.appendChild(
      document.createElement("div")
    );
    this.titleDepartmentsExtremumSalary = this.wrapperDepartmentsExtremumSalary.appendChild(
      document.createElement("h3")
    );
    this.titleDepartmentsExtremumSalary.innerText =
      "???????????????? ???????????????? ???? ??????????????";
    this.buttonDepartmentsExtremumSalary = this.wrapperDepartmentsExtremumSalary.appendChild(
      document.createElement("button")
    );
    this.buttonDepartmentsExtremumSalary.innerText = "??????????????????";
    this.buttonDepartmentsExtremumSalary.classList.add("button");
    this.buttonDepartmentsExtremumSalary.onclick = this.outputDepartmentsExtremumSalary.bind(
      this
    );
    this.selectSalaryExtremum = this.wrapperDepartmentsExtremumSalary.appendChild(
      this.createSelect(this.createExtremumList("??????????????", "????????????????"))
    );

    // salary extremum position

    this.wrapperPositionsSalary = this.wrapperSideBar.appendChild(
      document.createElement("div")
    );
    this.titlePositionsSalary = this.wrapperPositionsSalary.appendChild(
      document.createElement("h3")
    );
    this.titlePositionsSalary.innerText = "???????????????? ???????????????? ???? ????????????????";
    this.buttonPositionsSalary = this.wrapperPositionsSalary.appendChild(
      document.createElement("button")
    );
    this.buttonPositionsSalary.innerText = "??????????????????";
    this.buttonPositionsSalary.classList.add("button");
    this.buttonPositionsSalary.onclick = this.outputPositionsExtremumSalary.bind(
      this
    );
    this.selectPositionsSalaryExtremum = this.wrapperPositionsSalary.appendChild(
      this.createSelect(this.createExtremumList("??????????????", "????????????????"))
    );

    // mean salary block

    this.wrapperMeanSalary = this.wrapperSideBar.appendChild(
      document.createElement("div")
    );
    this.titleMeanSalary = this.wrapperMeanSalary.appendChild(
      document.createElement("h3")
    );
    this.titleMeanSalary.innerText = "?????????????? ???????????????? ???? ??????????????";
    this.buttonMeanSalary = this.wrapperMeanSalary.appendChild(
      document.createElement("button")
    );
    this.buttonMeanSalary.innerText = "??????????????????";
    this.buttonMeanSalary.classList.add("button");
    this.buttonMeanSalary.onclick = this.outputMeanSalary.bind(this);
    this.selectMeanSalaryStatusEmployee = this.wrapperMeanSalary.appendChild(
      this.createSelect(
        this.createStatusList("??????????????????", "????????????????????", "????????")
      )
    );

    // amount employees block

    this.wrapperAmountEmployees = this.wrapperSideBar.appendChild(
      document.createElement("div")
    );
    this.titleAmountEmployees = this.wrapperAmountEmployees.appendChild(
      document.createElement("h3")
    );
    this.titleAmountEmployees.innerText = "???????????????????? ??????????????????????";
    this.buttonAmountEmployees = this.wrapperAmountEmployees.appendChild(
      document.createElement("button")
    );
    this.buttonAmountEmployees.innerText = "??????????????????";
    this.buttonAmountEmployees.classList.add("button");
    this.buttonAmountEmployees.onclick = this.outputAmountEmployees.bind(this);
    this.selectAmountEmployeesStatus = this.wrapperAmountEmployees.appendChild(
      this.createSelect(
        this.createStatusList("??????????????????", "????????????????????", "????????")
      )
    );
    // without position block

    this.wrapperWithoutPosition = this.wrapperSideBar.appendChild(
      document.createElement("div")
    );
    this.titleWithoutPosition = this.wrapperWithoutPosition.appendChild(
      document.createElement("h3")
    );
    this.titleWithoutPosition.innerText = "?????????? ?????????????????? ?????? ??????????????";
    this.buttonWithoutPosition = this.wrapperWithoutPosition.appendChild(
      document.createElement("button")
    );
    this.buttonWithoutPosition.innerText = "??????????????????";
    this.buttonWithoutPosition.classList.add("button");
    this.buttonWithoutPosition.onclick = this.outputDepartmentsWithoutPosition.bind(
      this
    );
    this.selectWithoutPosition = this.wrapperWithoutPosition.appendChild(
      this.createSelect(this.createPositionsList())
    );

    // output block
    this.outputBlock = this.wrapperSideBar.appendChild(
      document.createElement("span")
    );
    this.outputBlock.classList.add("output");

    // add employee
    this.wrapperAddEmployee = this.wrapperMainContent.appendChild(
      document.createElement("div")
    );
    this.titleAddEmployee = this.wrapperAddEmployee.appendChild(
      document.createElement("h3")
    );
    this.titleAddEmployee.innerText = "???????????????? ????????????????????";
    this.createForm(this.wrapperAddEmployee);
    const buttonAddEmployee = this.wrapperAddEmployee.appendChild(
      document.createElement("button")
    );
    buttonAddEmployee.innerText = "????????????????";
    buttonAddEmployee.onclick = this.addEmployee.bind(this);

    // remove
    this.wrapperRemoveEmployee = this.wrapperMainContent.appendChild(
      document.createElement("div")
    );
    this.titleRemoveEmployee = this.wrapperAddEmployee.appendChild(
      document.createElement("h3")
    );
    this.titleRemoveEmployee.innerText = "?????????????? ????????????????????";
    this.listEmployees = this.wrapperAddEmployee.appendChild(
      document.createElement("ul")
    );
    this.listEmployees.addEventListener("click", this.handleClick.bind(this));
    this.listEmployees.classList.add("listEmployees");
    this.createList(this.listEmployees);
  }

  // assets

  cleanContainer(container) {
    container.innerHTML = "";
  }

  getSelectValue(select) {
    let index = select.options.selectedIndex;
    return select[index].value;
  }

  sortMin(elementFirst, elementSecond) {
    return elementFirst - elementSecond;
  }

  sortMax(elementFirst, elementSecond) {
    return elementSecond - elementFirst;
  }

  findDepartmentId(idDepartment) {
    return this.departments.findIndex(
      (department) => department.id === idDepartment
    );
  }

  findEmployeeId(department, idEmployee) {
    return department.employees.findIndex(
      (employee) => employee.id === idEmployee
    );
  }

  createSelect(options) {
    const select = document.createElement("select");
    for (let option of Object.keys(options)) {
      select.options[select.options.length] = new Option(
        options[option],
        option
      );
    }
    return select;
  }

  createPositionsList() {
    return this.positions.reduce((acum, position) => {
      acum[position.id] = position.title;
      return acum;
    }, {});
  }

  createStatusList(...status) {
    return [0, 1, 2].reduce((acum, key, index) => {
      acum[key] = arguments[index];
      return acum;
    }, {});
  }

  createExtremumList(...extremum) {
    return ["min", "max"].reduce((acum, key, index) => {
      acum[key] = arguments[index];
      return acum;
    }, {});
  }

  createDepartmentsList() {
    return this.departments.reduce((acum, department) => {
      acum[department.id] = department.title;
      return acum;
    }, {});
  }

  get getDepartments() {
    return this.departments;
  }

  // salarys
  outputSalarys(event) {
    this.cleanContainer(this.outputBlock);
    let employeeStatus = this.getSelectValue(this.selectEmploeesStatus);
    let departmentsSalarys = this.getDepartmentsSalarys(employeeStatus);
    Object.keys(departmentsSalarys).forEach((department) => {
      this.outputBlock.innerText += `${[department]}??????????: ${
        departmentsSalarys[department]
      }\n`;
    });
  }

  getDepartmentsSalarys(statusEmployee) {
    return this.departments.reduce((acumulator, department) => {
      acumulator[department.id] = this.getDepartmentSalary(
        department,
        statusEmployee
      );
      return acumulator;
    }, {});
  }

  getDepartmentSalary(department, statusEmployee) {
    let sum = 0;
    if (statusEmployee === "2") {
      for (let employee of department.employees) {
        sum += employee.salary;
      }
      return sum;
    } else {
      for (let employee of department.employees) {
        if (employee.status === !!+statusEmployee) {
          sum += employee.salary;
        }
      }
      return sum;
    }
  }

  // salary
  outputDepartmentsExtremumSalary(event) {
    this.cleanContainer(this.outputBlock);
    let extremum = this.getSelectValue(this.selectSalaryExtremum);
    let departmentsExtremumSalarys = this.getDepartmentsExtremumSalarys(
      extremum
    );
    Object.keys(departmentsExtremumSalarys).forEach((department) => {
      this.outputBlock.innerText += `${[department]}??????????: ${
        departmentsExtremumSalarys[department]
      }\n`;
    });
  }

  getDepartmentsExtremumSalarys(extremum) {
    if (extremum !== "min" && extremum !== "max") {
      throw new Error("Not correct data");
    }
    return this.departments.reduce((acum, department) => {
      acum[department.id] = this.getDepartmentExtremumSalary(
        department,
        extremum
      );
      return acum;
    }, {});
  }

  getDepartmentExtremumSalary(department, extremum) {
    if (department.employees.length === 0) {
      return 0;
    }
    if (extremum !== "min" && extremum !== "max") {
      throw new Error("Not correct data");
    }
    return department.employees
      .reduce((acum, employee) => {
        acum.push(employee.salary);
        return acum;
      }, [])
      .sort(extremum === "min" ? this.sortMin : this.sortMax)[0];
  }

  // positions extremum salary

  outputPositionsExtremumSalary(event) {
    this.cleanContainer(this.outputBlock);
    let positionsSalary = this.getPositionsExtremumSalary(
      this.getSelectValue(this.selectPositionsSalaryExtremum)
    );
    Object.keys(positionsSalary).forEach((position) => {
      this.outputBlock.innerText += `${[position]}: ${
        positionsSalary[position]
      }\n`;
    });
  }

  getPositionsExtremumSalary(extremum) {
    if (extremum !== "min" && extremum !== "max") {
      throw new Error("Not correct data");
    }

    return this.positions.reduce((acumulator, position) => {
      acumulator[position.title] = this.getPositionExtremumSalaryDepartments(
        extremum,
        position.id
      );
      return acumulator;
    }, {});
  }

  getPositionExtremumSalaryDepartments(extremum, position) {
    return this.departments.reduce((acumulator, department) => {
      if (extremum === "max") {
        acumulator = this.getMax(
          acumulator,
          this.getPositionExtremumSalaryDepartment(
            department,
            extremum,
            position
          )
        );
      } else {
        acumulator = this.getMin(
          acumulator,
          this.getPositionExtremumSalaryDepartment(
            department,
            extremum,
            position
          )
        );
      }
      return acumulator;
    }, 0);
  }

  getPositionExtremumSalaryDepartment(department, extremum, position) {
    let extremumSalary = 0;
    for (let employee of department.employees) {
      if (employee.position === position) {
        if (!extremumSalary) {
          extremumSalary = employee.salary;
          continue;
        }

        if (employee.salary === extremumSalary) {
          continue;
        }
        extremumSalary =
          extremum === "max"
            ? this.getMax(extremumSalary, employee.salary)
            : this.getMin(extremumSalary, employee.salary);
      }
    }
    return extremumSalary;
  }

  // mean salarys

  outputMeanSalary(event) {
    this.cleanContainer(this.outputBlock);
    let meanSalarysDepartments = this.getMeanSalarysDepartments(
      this.getSelectValue(this.selectMeanSalaryStatusEmployee)
    );
    Object.keys(meanSalarysDepartments).forEach((department) => {
      this.outputBlock.innerText += `${[
        department,
      ]} ??????????: ${meanSalarysDepartments[department].toFixed(2)}\n`;
    });
  }

  getMeanSalarysDepartments(statusEmployee) {
    return this.departments.reduce((acumulator, department) => {
      acumulator[department.id] = this.getMeanSalaryDepartment(
        department,
        statusEmployee
      );
      return acumulator;
    }, {});
  }

  getMeanSalaryDepartment(department, statusEmployee) {
    return this.getAmountEployeesDepartment(department, statusEmployee)
      ? this.getDepartmentSalary(department, statusEmployee) /
          this.getAmountEployeesDepartment(department, statusEmployee)
      : 0;
  }

  getAmountEployeesDepartment(department, statusEmployee) {
    if (statusEmployee === "2") {
      return department.employees.reduce((acumulator, employee) => {
        acumulator++;
        return acumulator;
      }, 0);
    } else {
      return department.employees.reduce((acumulator, employee) => {
        if (employee.status === !!+statusEmployee) {
          acumulator++;
        }
        return acumulator;
      }, 0);
    }
  }

  // amount employees

  outputAmountEmployees(event) {
    this.cleanContainer(this.outputBlock);
    this.outputBlock.innerText = this.getAmountEployeesDepartments(
      this.getSelectValue(this.selectAmountEmployeesStatus)
    );
  }

  getAmountEployeesDepartments(statusEmployee) {
    return this.departments.reduce((acumulator, department) => {
      acumulator += this.getAmountEployeesDepartment(
        department,
        statusEmployee
      );
      return acumulator;
    }, 0);
  }
  // without position

  outputDepartmentsWithoutPosition(event) {
    this.cleanContainer(this.outputBlock);
    this.getDepartmentsWithoutPosition(
      +this.getSelectValue(this.selectWithoutPosition)
    ).forEach((department) => {
      this.outputBlock.innerText += `${department}\n`;
    });
  }

  getDepartmentsWithoutPosition(position) {
    return this.departments.reduce((acumulator, department) => {
      !this.isPosition(department, position) &&
        acumulator.push(department.title);
      return acumulator;
    }, []);
  }

  isPosition(department, position) {
    let counter = 0;
    return department.employees.reduce((acumulator, employee) => {
      employee.position === position && employee.status && counter++;
      acumulator = counter > 0;
      return acumulator;
    }, false);
  }

  //add employee

  createForm(container, dataValue) {
    dataValue = dataValue ?? 0;
    let formUpdate = container.appendChild(document.createElement("form"));
    const inputFirstName = formUpdate.appendChild(
      document.createElement("input")
    );
    inputFirstName.placeholder = "??????";
    inputFirstName.type = "text";
    inputFirstName.setAttribute("name", "firstName");
    inputFirstName.value = dataValue.firstName || "";
    const inputSecondName = formUpdate.appendChild(
      document.createElement("input")
    );
    inputSecondName.placeholder = "??????????????";
    inputSecondName.type = "text";
    inputSecondName.setAttribute("name", "secondName");
    inputSecondName.value = dataValue.secondName || "";
    const inputSalary = formUpdate.appendChild(document.createElement("input"));
    inputSalary.placeholder = "0";
    inputSalary.setAttribute("name", "salary");
    inputSalary.type = "number";
    inputSalary.value = dataValue.salary || 0;
    const selectPosition = formUpdate.appendChild(
      this.createSelect(this.createPositionsList())
    );
    selectPosition.setAttribute("name", "position");
    let selectDepartment = formUpdate.appendChild(
      this.createSelect(this.createDepartmentsList())
    );
    selectPosition.options[dataValue.position - 1 || 0].selected = true;
    selectDepartment.setAttribute("name", "department");

    selectDepartment.options[dataValue.department - 1 || 0].selected = true;
  }

  addEmployee(event) {
    let departmentIndex = +this.getSelectValue(
      this.wrapperAddEmployee.querySelector("select[name=department]")
    );
    this.departments.forEach((department) => {
      if (department.id === departmentIndex) {
        let dataEmployee = this.getDataFormEmployee(
          this.wrapperAddEmployee.querySelector("form")
        );
        dataEmployee["id"] = ++this.id;
        dataEmployee["status"] = true;
        department.employees.push(dataEmployee);
      }
    });
    this.cleanContainer(this.listEmployees);
    this.createList(this.listEmployees);
  }

  getDataFormEmployee(form) {
    const employee = {};
    const formData = new FormData(form);
    formData.forEach((value, name) => {
      if (name !== "department") {
        value = value.trim();
        name === "salary" &&
          Object.assign(formData, { [name]: value.replace(/^0+/, "") });
        if (name === "salary" || name === "position") {
          value = +value;
        }
        Object.assign(employee, { [name]: value });
      }
    });
    form.reset();
    return employee;
  }
  //

  handleClick(event) {
    if (event.target.tagName.toLowerCase() === "button") {
      let idDepartment = +event.target
        .closest("li")
        .getAttribute("data-department");
      let idEmployee = +event.target.closest("li").getAttribute("data-id");
      let indexDepartment = this.findDepartmentId(idDepartment);
      let indexEmployee = this.findEmployeeId(
        this.departments[indexDepartment],
        idEmployee
      );
      event.target.getAttribute("data-action") === "delete"
        ? this.removeEmploee(indexDepartment, idEmployee, indexEmployee)
        : this.updateEmploee(
            idDepartment,
            indexDepartment,
            idEmployee,
            indexEmployee
          );
    }
  }

  removeEmploee(indexDepartment, idEmployee, indexEmployee) {
    this.departments[indexDepartment].employees.splice(indexEmployee, 1);
    event.target.closest("li").remove();
  }

  updateEmploee(idDepartment, indexDepartment, idEmployee, indexEmployee) {
    if (event.target.closest("li").querySelector("form")) {
      let updatedIdDepartment = +this.getSelectValue(
        event.target.closest("li").querySelector("select[name=department]")
      );
      let updatedDataEmployee = this.getDataFormEmployee(
        event.target.closest("li").querySelector("form")
      );
      updatedDataEmployee["id"] = idEmployee;
      updatedDataEmployee["status"] = true;
      if (updatedIdDepartment === idDepartment) {
        this.departments[indexDepartment].employees.splice(
          indexEmployee,
          1,
          updatedDataEmployee
        );
      } else {
        this.departments[indexDepartment].employees.splice(indexEmployee, 1);
        indexDepartment = this.findDepartmentId(updatedIdDepartment);
        this.departments[indexDepartment].employees.push(updatedDataEmployee);
      }

      event.target.closest("li").querySelector("form").remove();
      this.cleanContainer(this.listEmployees);
      this.createList(this.listEmployees);
    } else {
      let container = event.target
        .closest("li")
        .appendChild(document.createElement("div"));
      container.classList.add("updateBlock");
      this.createForm(
        container,
        Object.assign(
          {},
          departments[indexDepartment].employees[indexEmployee],
          { department: idDepartment }
        )
      );
    }
  }

  createList(container) {
    this.departments.forEach((department, index) => {
      department.employees.forEach((employee, ind) => {
        let listItem = container.appendChild(document.createElement("li"));
        listItem.setAttribute("data-id", employee.id);
        listItem.setAttribute("data-department", department.id);

        let contentItem = listItem.appendChild(document.createElement("p"));
        contentItem.innerText = `${employee.firstName} ${employee.secondName}`;

        let wrapperButton = listItem.appendChild(document.createElement("div"));

        let deleteItem = wrapperButton.appendChild(
          document.createElement("button")
        );
        deleteItem.innerText = "X";
        deleteItem.setAttribute("data-action", "delete");

        let updateItem = wrapperButton.appendChild(
          document.createElement("button")
        );
        updateItem.setAttribute("data-action", "update");
        updateItem.innerText = "Update";
      });
    });
  }

  getMax(currentValue, value) {
    if (!currentValue && value) {
      return value;
    }

    if (!value && currentValue) {
      return currentValue;
    }

    return value > currentValue ? value : currentValue;
  }

  getMin(currentValue, value) {
    if (!currentValue && value) {
      return value;
    }

    if (!value && currentValue) {
      return currentValue;
    }

    return value > currentValue ? currentValue : value;
  }
}
let restourant = new Restourant(departments, positions);
console.log(restourant.getDepartment);
