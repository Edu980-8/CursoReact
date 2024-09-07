import { useState } from "react";

const AgregarTarea = ({agregarTarea}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    console.log(target);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
      const envio = {
          name: inputValue,
          status: false
      }
      event.preventDefault();// para que no recargue la pagina
      agregarTarea(tareas => [...tareas, envio]);
  }
  return (
    <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={inputValue}
          onChange={onInputChange}// se ejecuta cada vez que cambia el valor
        />
    </form>
  );
};

export default AgregarTarea;
