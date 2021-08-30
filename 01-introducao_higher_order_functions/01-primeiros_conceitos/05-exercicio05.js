// const strAcordando = () => {
//   console.log('Acordando!!')
// };

// const strCafe = () => {
//   console.log('Bora tomar café!!')
// };

// const strDormir = () => {
//   console.log('Partiu dormir!!')
// };

// const fazendoCoisas = (f) => {return f};

// fazendoCoisas(strAcordando());
// fazendoCoisas(strCafe());
// fazendoCoisas(strDormir());

const strAcordando = () => 'Acordando!!';

const strCafe = () =>  'Bora tomar café!!'; 
 
const strDormir = () =>  'Partiu dormir!!' ;
  
const fazendoCoisas = (callback) => {
  const result = callback();
  console.log(result)
};
  
fazendoCoisas(strAcordando);
fazendoCoisas(strCafe);
fazendoCoisas(strDormir);