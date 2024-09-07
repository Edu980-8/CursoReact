import { useState } from "react";

const AgregarTarea = ({ agregarRaza }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    console.log(target);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault(); // para que no recargue la pagina
    agregarRaza(inputValue); 
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Escribe una Raza"
        value={inputValue}
        onChange={onInputChange} // se ejecuta cada vez que cambia el valor
      />
    </form>
  );
};

export default AgregarTarea;
