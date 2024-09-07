import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PrimerComponente from "./PrimerComponente";
import Contador from "./ContadorApp";
import Lista from "./Listas_Ternario";
import Lector from "./LecturaApi";
import ArrayMapper from "./ArrayMapper";

import './styles.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimerComponente titulo="Este es mi primer Componente" subtitulo = "Este es mi subtitulo de verdad"/>
    <Contador conteo={2}/>
    <Lista />
    <Lector />
    <ArrayMapper />
  </StrictMode>
);
