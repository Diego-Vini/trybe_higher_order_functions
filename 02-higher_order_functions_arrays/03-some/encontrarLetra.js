const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const search = (letra, arrayNames) => arrayNames.some((name) => name[0] === letra)

console.log(search('J', listNames));
console.log(search('x', listNames));