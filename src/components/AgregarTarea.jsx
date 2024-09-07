import { useState } from "react";

const AgregarTarea = ({ agregarRaza }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    console.log(target);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    const envio = {
      name: inputValue,
      status: false,
    };
    event.preventDefault(); // para que no recargue la pagina
    agregarRaza((razas) => [...razas, envio]); // la funcion agregarTarea permite recibir el usestate del padre y usarlo en el hijo para modificar una lista de tareas.
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
