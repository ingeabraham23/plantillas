// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./Recaudacion.css";
import html2canvas from "html2canvas";

function Recaudacion() {
  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    nombre: "",
    motivo: "",
    recaudador: "",
    fecha: "",
    hora: "",
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
            name="nombre"
            placeholder="Nombre de la persona que se apoyará:"
            value={inputs.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="motivo"
            placeholder="Motivo:"
            value={inputs.motivo}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="recaudador"
            placeholder="Recaudador:"
            value={inputs.recaudador}
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
        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table className="tabla" ref={tablaRef}>
        <thead>
          <tr>
            <th className="encabezado">APOYO VOLUNTARIO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="apoya">Apoya al compañero:</td>
          </tr>
          <tr></tr>
          <tr>
            <td className="al-compañero">{inputs.nombre}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="lamentable">Ya que lamentablemente</td>
          </tr>
          <tr></tr>
          <tr>
            <td className="motivo">{inputs.motivo}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="apoya">La recaudación la realizara el compañero</td>
          </tr>
          <tr>
            <td className="al-compañero">{inputs.recaudador}</td>
          </tr>
          <tr>
            <td className="fecha">{inputs.fecha}</td>
          </tr>
          <tr>
            <td className="hora">{inputs.hora}</td>
          </tr>
          <tr>
            <td style={{ width: '100px', textAlign: 'center' }} ><img style={{ width: '50%', height: 'auto' }} src="./recaudacion.png" alt="Donar" /></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="tips">☝ Todas las donaciones son de forma voluntaria y sin fines de lucro.</td>
          </tr>
          <tr>
            <td className="tips">☝ Es importante recordar que el recaudador está dedicando parte de su tiempo y esfuerzo para llevar a cabo esta noble labor. Así que no te pueden esperar a la vuelta o al otro día. Ponte en su lugar.</td>
          </tr>
        </tfoot>
      </table>
      <button className="boton-capturar" onClick={() => capturarTabla(tablaRef.current)}>
        Capturar
      </button>
    </div>
  );
}

export default Recaudacion;
