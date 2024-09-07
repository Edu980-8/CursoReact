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
  const set_Array = () => {
    setArray([...array, { name: "New Wolf", status: false }]);//spread operator
  };
  return (
    <div>
      <ol>
        <AgregarRaza agregarRaza={setArray}></AgregarRaza>
        {array.map((item,index) => (
          <Items key={index} name={item.name} item_status={item.status}></Items>
        ))}
      </ol>
      <button onClick={set_Array}>Add Wolf</button>
    </div>
  );
};

export default ArrayMapper;
