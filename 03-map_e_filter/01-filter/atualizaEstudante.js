const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudent = (name, listStudents) => {
  return listStudents.filter((nameStudents) => nameStudents != name);
}

const newStudents = removeStudent('Ricardo', arrayMyStudents);

console.log(newStudents);