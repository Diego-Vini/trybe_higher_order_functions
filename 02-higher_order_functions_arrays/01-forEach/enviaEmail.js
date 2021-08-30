const listaDePessoasAprovadas = [
    'fulano@gmail.com',
    'ciclano@gmail.com',
    'beltrano@gmail.com',
    'zezinho@gmail.com',
    'betinho@gmail.com',
]

const enviarEmail = (email) => {
  console.log(`Email para ${email}, foi enviado com sucesso`);
};

listaDePessoasAprovadas.forEach((item) => {
  enviarEmail(item);
});