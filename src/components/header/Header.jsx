import React from "react";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="contenedor">
        <div className="botones">
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
        <div>
          <label className="labelFiltrar">Filtrar</label>
        </div>
        <div>
          <select name="select">
            <option value="value1">Value 1</option>
            <option value="value2" selected>
              Value 2
            </option>
            <option value="value3">Value 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}
