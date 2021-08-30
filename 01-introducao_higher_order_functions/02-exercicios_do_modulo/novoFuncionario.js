const newEmployees = (gernarateEmail) => {
    const employees = {
      id1: gernarateEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: gernarateEmail('Luiza Drumont'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: gernarateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const gernarateEmail = (dadosFunc) => {
  const email = dadosFunc.toLowerCase().split(' ').join('_');
  return {nome: dadosFunc, email: `${email}@trybe.com`} 
}

console.log(newEmployees(gernarateEmail))
