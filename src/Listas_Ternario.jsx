
const Listas_Ternario = () => {
  const Items = ({ name = "Item", item_status = false }) => {
    return (
      <li>
        {name}
        {item_status == true ? "✅" : "⛔"}
      </li>
    );
  };
  return (
    <div>
      <ol>
        <Items name={"Husky Cafe"} item_status={true}></Items>
        <Items name={"Husky Manto Arena"} item_status={false}></Items>
        <Items name={"Husky Manto Gris"} item_status={false}></Items>
        <Items name={"Husky Manto Blanco"} item_status={false}></Items>
        <Items name={"Husky Manto Rojo"} item_status={false}></Items>
        <Items name={"Husky Manto Negro"} item_status={true}></Items>
      </ol>
    </div>
  );
};


export default Listas_Ternario;
