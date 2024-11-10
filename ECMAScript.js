/* const studentData = {
  firstName: "Ivan",
  lastName: "Ivanov",
  age: 21,
};

const addField = (object, key, value) => {
  
  return { ...object,
    [key]: value
}
};

const newStudentdata = addField (studentData, 'Учебное время', 145);

console.log(studentData);
console.log(newStudentdata); */

function factorial(params) {
  if (params === 1) {
    return 1;
  }
  return (params-1)*params;
}
console.log(factorial(3));