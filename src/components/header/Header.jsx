import React from "react";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="contenedor">
        <div className="divLinks">
          <Link href="#" underline="none">
            Inicio
          </Link>
          <span>/</span>
          <Link href="#" underline="none">
            Juguetes
          </Link>
          <span>/</span>
          <Link href="#" underline="none">
            Funko Pop
          </Link>
        </div>
        <div className="divFiltrar">
          <label className="labelFiltrar">Filtrar</label>
        </div>
        <div className="divOrdenarPor">
        <select className="ordenarPor" defaultValue={'DEFAULT'} >
        <option value="DEFAULT" disabled>Ordenar por</option>
        <option value="1">Mr</option>
        <option value="2">Mrs</option>
        <option value="3">Ms</option>
        <option value="4">Miss</option>
        <option value="5">Dr</option>
      </select>
        </div>
        <div clasName="contenedor-portada">
          <img src="/portada.png" alt="portada" className="imgPortada"/>
        </div>
      </div>
    </div>
  );
}
