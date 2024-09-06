import './styles/PrimerComponente.css';
import PropTypes from 'prop-types';


// Es bueno colocar las variables afuera del return para no renderizar cada vez que cambia el valor.
const string = "este es un string";
const numero = 10;
const array = [1, 2, 3, 4, 5];
const funcion = () => 1 + 1;
const objeto = {
  nombre: "Daniel",
  apellido: "Carranza",
};
const fecha = new Date();

const PrimerComponente = ({titulo, subtitulo = "Esto es un valor por defecto"}) => {
  console.log(titulo, subtitulo)

  return (
      <>
        <h1>Variables en JSX</h1>
        <h4>Variable string</h4> <p>{string}</p>
        <h4>Variable numero</h4> <p>{numero}</p>
        <h4>Variable array</h4> <p>{array}</p>
        <h4>Variable funcion</h4> <p>{funcion()}</p>
        <h4>Variable objeto</h4> <p>{JSON.stringify(objeto)}</p>
        <h4>Variable fecha</h4> <p>{JSON.stringify(fecha)}</p>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>

      </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
}  

// PrimerComponente.defaultProps = {
//   subtitulo: 0,
//   titulo: "Sin titulo"
// // }
// Esta es la manera vieja de definir valores por defecto

export default PrimerComponente;
