const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

const verificaIdade = (arrayOfPeple) => {
    return arrayOfPeple.filter((filterAge) => filterAge.age < 18 );
};

console.log(verificaIdade(objPeople));