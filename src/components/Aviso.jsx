// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./ViaCerrada.css";
import html2canvas from "html2canvas";

function Aviso() {
  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    parrafo1: "",
    parrafo2: "",
    parrafo3: "",
    parrafo4: "",
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
      downloadLink.download = `aviso.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  const now = new Date();
  const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  
  const diaSemana = diasSemana[now.getDay()];
  const dia = now.getDate();
  const mes = meses[now.getMonth()];
  const año = now.getFullYear();
  const horas = now.getHours();
  const minutos = now.getMinutes().toString().padStart(2, '0');
  const periodo = horas >= 12 ? 'pm' : 'am';
  const horasFormato12 = horas % 12 === 0 ? 12 : horas % 12;

  const fechaHoraActual = `${diaSemana} ${dia} de ${mes} de ${año}, ${horasFormato12}:${minutos} ${periodo}`;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="parrafo1"
            placeholder="Parrafo 1:"
            value={inputs.parrafo1}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="parrafo2"
            placeholder="Parrafo 2:"
            value={inputs.parrafo2}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="parrafo3"
            placeholder="Parrafo 3:"
            value={inputs.parrafo3}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="parrafo4"
            placeholder="Parrafo 4:"
            value={inputs.parrafo4}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table className="tabla" ref={tablaRef}>
        <thead>
          <tr>
            <th className="encabezado">aviso importante</th>
          </tr>
          <tr>
            <th className="fechayhora">{fechaHoraActual}</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr>
            <td className="apoya">{inputs.parrafo1}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="al-compañero">{inputs.parrafo2}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="lamentable">{inputs.parrafo3}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="motivo">{inputs.parrafo4}</td>
          </tr>
          <tr>
            <td style={{ width: '100px', textAlign: 'center' }} ><img style={{ width: '50%', height: 'auto' }} src="./aviso.png" alt="aviso" /></td>
          </tr>
        </tbody>
      </table>
      <button className="boton-capturar" onClick={() => capturarTabla(tablaRef.current)}>
        Capturar
      </button>
    </div>
  );
}

export default Aviso;
