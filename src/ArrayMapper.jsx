import  { useState } from "react";
import AgregarRaza from "./components/AgregarTarea";

const Items = ({ name = "Item", item_status = false }) => {
  return (
    <li>
      {name}
      {item_status == true ? "✅" : "⛔"}
    </li>
  );
};



const ArrayMapper = () => {
  let sectionsList = [
    {id:1, name: "Husky Manto Arena", status: false },
    {id:2, name: "Husky Manto Blanco", status: false },
    {id:3, name: "Husky Manto Negro", status: true },
    {id:4, name: "Husky Manto Rojo", status: false },
    {id:5, name: "Husky Manto Gris", status: false },
  ];
  const [array, setArray] = useState(sectionsList);
  
  const onAddTask = (val) => {
    if (val<1) return
    const envio = {
        id: array.length + 1,
        name: val,
        status: false,
      }
      setArray([...array, envio])
  }
  
  return (
    <div>
      <ol>
        <AgregarRaza agregarRaza={onAddTask}></AgregarRaza>
        {array.map((item) => (
          <Items key={item.id} name={item.name} item_status={item.status}></Items>
        ))}
      </ol>
    </div>
  );
};

export default ArrayMapper;
