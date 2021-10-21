let departments = [
  {
    title: "first",
    id: 1,
    employees: [
      {
        firstName: "John",
        secondName: "secondName1",
        position: 2,
        salary: 3000,
        status: false,
      },
      {
        firstName: "John",
        secondName: "secondName1",
        position: 2,
        salary: 4000,
        status: true,
      },
      {
        firstName: "John",
        secondName: "secondName1",
        position: 1,
        salary: 10000,
        status: false,
      },
      {
        firstName: "Samanta",
        secondName: "secondName1",
        position: 3,
        salary: 100,
        status: false,
      },
      {
        firstName: "John",
        secondName: "secondName1",
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
        firstName: "John",
        secondName: "secondName1",
        position: 2,
        salary: 3000,
        status: true,
      },
      {
        firstName: "Sandra",
        secondName: "secondName1",
        position: 4,
        salary: 10,
        status: true,
      },
      {
        firstName: "John",
        secondName: "secondName1",
        position: 4,
        salary: 1000,
        status: true,
      },
      {
        firstName: "Vik",
        secondName: "secondName1",
        position: 4,
        salary: 1000,
        status: true,
      },
      {
        firstName: "John",
        secondName: "secondName1",
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
        firstName: "John",
        secondName: "secondName1",
        position: 2,
        salary: 5000,
        status: true,
      },
      {
        firstName: "Kori",
        secondName: "secondName1",
        position: 4,
        salary: 2000,
        status: true,
      },
      {
        firstName: "Koddy",
        secondName: "secondName1",
        position: 5,
        salary: 1599,
        status: true,
      },
      {
        firstName: "Din",
        secondName: "secondName1",
        position: 2,
        salary: 3000,
        status: true,
      },
      {
        firstName: "Samanta",
        secondName: "secondName1",
        position: 3,
        salary: 100,
        status: true,
      },
      {
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
    this.departments = arrayOfDepartmens;
    this.positions = arrayOfPositions;
  }

  get getDepartments() {
    return this.departments;
  }
  addNewDepartment(data) {
    this.departments.push(data);
  }
  addNewPosition(data) {
    this.positions.push(data);
  }
  getSumSalaryOfDepartments(value) {
    return this.departments.reduce((acumulator, department) => {
      acumulator[department.id] = this.getSumSalaryOfDepartment(
        department,
        value
      );
      return acumulator;
    }, {});
  }

  getMeanSumOfDepartments(value) {
    return this.departments.reduce((acumulator, department) => {
      acumulator[department.id] = this.getMeanSumOfDepartment(
        department,
        value
      );
      return acumulator;
    }, {});
  }

  getExtremumSalaryOfDepartments(extremum) {
    if (extremum !== "min" && extremum !== "max") {
      return null;
    }
    return this.departments.reduce((acum, department) => {
      acum[department.id] = this.getExtremumSalaryOfDepartment(
        department,
        extremum
      );
      return acum;
    }, {});
  }

  getExtremumSalaryOfPositionOfDepartments(extremum, position) {
    return this.departments.reduce((acumulator, department) => {
      if (extremum === "max") {
        acumulator = this.getMax(
          acumulator,
          this.getExtremumSalaryOfPositionOfDepartment(
            department,
            extremum,
            position
          )
        );
      } else {
        acumulator = this.getMin(
          acumulator,
          this.getExtremumSalaryOfPositionOfDepartment(
            department,
            extremum,
            position
          )
        );
      }
      return acumulator;
    }, 0);
  }

  getDepartmentsWithoutPosition(position) {
    let idPosition = this.getId(position);
    return this.departments.reduce((acumulator, department) => {
      !this.isPosition(department, idPosition) &&
        acumulator.push(department.id);
      return acumulator;
    }, []);
  }

  getAmountEployeesDepartments(value) {
    return this.departments.reduce((acumulator, department) => {
      acumulator += this.getAmountEployeesDepartment(department, value);
      return acumulator;
    }, 0);
  }

  getExtremumSalaryOfDepartment(department, extremum) {
    return department.employees
      .reduce((acum, employee) => {
        acum.push(employee.salary);
        return acum;
      }, [])
      .sort(extremum === "min" ? this.sortMin : this.sortMax)[0];
  }

  sortMin(elementFirst, elementSecond) {
    return elementFirst - elementSecond;
  }

  sortMax(elementFirst, elementSecond) {
    return elementSecond - elementFirst;
  }

  getSumSalaryOfDepartment(department, value) {
    let sum = 0;
    if (value === undefined) {
      for (let employee of department.employees) {
        sum += employee.salary;
      }
      return sum;
    } else {
      for (let employee of department.employees) {
        if (employee.status === value) {
          sum += employee.salary;
        }
      }
      return sum;
    }
  }

  getAmountEployeesDepartment(department, value) {
    if (value === undefined) {
      return department.employees.reduce((acumulator, employee) => {
        acumulator++;
        return acumulator;
      }, 0);
    } else {
      return department.employees.reduce((acumulator, employee) => {
        if (employee.status === value) {
          acumulator++;
        }
        return acumulator;
      }, 0);
    }
  }

  getMeanSumOfDepartment(department, value) {
    if (value === undefined) {
      return department.employees.length
        ? this.getSumSalaryOfDepartment(department, value) /
            department.employees.length
        : null;
    }
    return this.getAmountEployeesDepartment(department, value)
      ? this.getSumSalaryOfDepartment(department, value) /
          this.getAmountEployeesDepartment(department, value)
      : null;
  }

  getExtremumSalaryOfPositions(extremum) {
    if (extremum !== "min" && extremum !== "max") {
      return null;
    }

    return this.positions.reduce((acumulator, position) => {
      acumulator[
        position.title
      ] = this.getExtremumSalaryOfPositionOfDepartments(extremum, position.id);
      return acumulator;
    }, {});
  }

  getExtremumSalaryOfPositionOfDepartment(department, extremum, position) {
    let extrem = 0;
    for (let employee of department.employees) {
      if (employee.position === position) {
        if (!extrem) {
          extrem = employee.salary;
        }

        if (employee.salary === extrem) {
          continue;
        }

        if (extremum === "max") {
          extrem = this.getMax(extrem, employee.salary);
        } else {
          extrem = this.getMin(extrem, employee.salary);
        }
      }
    }
    return extrem;
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

  getId(title) {
    for (let position of this.positions) {
      if (position.title === title) {
        return position.id;
      }
    }
    return null;
  }

  isPosition(department, position) {
    let counter = 0;
    return department.employees.reduce((acumulator, employee) => {
      employee.position === position && employee.status && counter++;
      acumulator = counter > 0;
      return acumulator;
    }, false);
  }
}
let restourant = new Restourant(departments, positions);
console.log(restourant.getDepartments);
