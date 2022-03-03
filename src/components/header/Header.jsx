import React from "react";
import Link from "@mui/material/Link";

import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="contenedor">
        <div className="divLinks">
          <Link href="#" underline="none">
            <span className="botonesGris">Inicio</span>
          </Link>
          <span>/</span>
          <Link className="botonesGris" href="#" underline="none">
            <span className="botonesGris">Juguetes</span>
          </Link>
          <span>/</span>
          <Link href="#" underline="none">
            <span className="labelFunkoPop">Funko Pop</span>
          </Link>
        </div>
        <div className="divFiltrar">
        <img alt="filtrar" id="iconFiltrar" src="/iconFiltrar.svg"/>
          <button className="labelFiltrar">  <label id="labelfiltrar">Filtrar {""}</label></button>

          <img alt="filtrar" id="flechitaAbajoFiltrar" src="/flechitaAbajo.svg" />
        </div>
        <div className="divOrdenarPor">
          <select className="ordenarPor" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Ordenar por
            </option>
            <option value="1">Menor precio</option>
            <option value="2">Mrs</option>
            <option value="3">Ms</option>
            <option value="4">Miss</option>
            <option value="5">Dr</option>
          </select>
        </div>
        <div className="contenedor-portada">
          <img src="/portada.png" alt="portada" className="imgPortada" />
        </div>
      </div>
    </div>
  );
}
