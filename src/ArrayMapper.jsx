import React, { useState } from "react";

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

  return (
    <div>
      <ol>
        {sectionsList.map((item) => (
          <Items name={item.name} item_status={item.status}></Items>
        ))}
      </ol>
    </div>
  );
};

export default ArrayMapper;
