// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./Extravio.css";
import html2canvas from "html2canvas";

function Extravio() {
  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    objeto: "",
    lugar: "",
    fecha: "",
    hora: "",
    abordaje: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para guardar los datos, si es necesario
  };

  function capturarTabla(tabla) {
    html2canvas(tabla).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `apoyo.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="objeto"
            placeholder="Objeto que se extravio:"
            value={inputs.objeto}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="lugar"
            placeholder="Lugar donde se extravio:"
            value={inputs.lugar}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="fecha"
            placeholder="Fecha:"
            value={inputs.fecha}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="hora"
            placeholder="Hora:"
            value={inputs.hora}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="abordaje"
            placeholder="Abordaje y descenso:"
            value={inputs.abordaje}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="telefono"
            placeholder="felefono:"
            value={inputs.telefono}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table className="tabla" ref={tablaRef}>
        <thead>
          <tr>
            <th className="encabezado">SERVICIO SOCIAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="extravio">se extravio</td>
          </tr>
          <tr></tr>
          <tr>
            <td className="objeto">{inputs.objeto}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="lugar">{inputs.lugar}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="fecha">{inputs.fecha}</td>
          </tr>
          <tr>
            <td className="hora">{inputs.hora}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="abordaje">{inputs.abordaje}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="comunicate">
                Si tienes alguna información comunicate al:
            </td>
          </tr>
          <tr>
            <td className="al-compañero">{inputs.telefono}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="comunicate">
                Si lo(a) encontraste puedes entregarlo(a) en la base de Urbanos Rojos con el Checador.
            </td>
          </tr>
          <tr>
            <td style={{ width: '100px', textAlign: 'center' }} ><img style={{ width: '30%', height: 'auto' }} src="./buscando.png" alt="Buscando" /></td>
          </tr>
        </tbody>
      </table>
      <button className="boton-capturar" onClick={() => capturarTabla(tablaRef.current)}>
        Capturar
      </button>
    </div>
  );
}

export default Extravio;
