const listaDePessoasAprovadas = [
    'fulano@gmail.com',
    'ciclano@gmail.com',
    'beltrano@gmail.com',
    'zezinho@gmail.com',
    'betinho@gmail.com',
]

const enviaEmail = (objEmails) => {
  console.log(`Email para ${objEmails.email} com a nota ${objEmails.nota} enviado com sucesso.`);
};

let novoObj = listaDePessoasAprovadas.map((email) => {
    return {email: email, nota: 10}
});

novoObj.forEach((pessoaAprovada) => enviaEmail(pessoaAprovada));


