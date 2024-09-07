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
    { name: "Husky Manto Arena", status: false },
    { name: "Husky Manto Blanco", status: false },
    { name: "Husky Manto Negro", status: true },
    { name: "Husky Manto Rojo", status: false },
    { name: "Husky Manto Gris", status: false },
  ];
  const [array, setArray] = useState(sectionsList);
  
  const onAddTask = (val) => {
    if (val<1) return
    const envio = {
        name: val,
        status: false,
      }
      setArray([...array, envio])
  }
  
  return (
    <div>
      <ol>
        <AgregarRaza agregarRaza={onAddTask}></AgregarRaza>
        {array.map((item,index) => (
          <Items key={index} name={item.name} item_status={item.status}></Items>
        ))}
      </ol>
    </div>
  );
};

export default ArrayMapper;
