import { useState } from "react";
import PropTypes from "prop-types";

const ContadorApp = ({ conteo = 0 }) => {
  const [result, setResult] = useState(conteo);
  return (
    <div>
      <h1>{result}</h1>
      <button onClick={() => setResult(result + 1)}>Incrementar</button>
      <button onClick={() => setResult(result - 1)}>Decrementar</button>
    </div>
  );
};
ContadorApp.propTypes = {
    conteo: PropTypes.number.isRequired
  }  

export default ContadorApp;
