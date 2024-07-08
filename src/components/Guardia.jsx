// eslint-disable-next-line no-unused-vars
import React, { useState, useRef} from "react";
import "./ViaCerrada.css";
import html2canvas from "html2canvas";

function Guardia() {
  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    viaCerrada: "",
    altura:"",
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

  function capturarTabla(tabla) {
    html2canvas(tabla).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `accidente.png`;
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
            name="nota"
            placeholder="nota:"
            value={inputs.nota}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="altura"
            placeholder="Ubicacion:"
            value={inputs.altura}
            onChange={handleChange}
          />
        </label>
        
        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table className="tabla" ref={tablaRef}>
        <thead>
        <tr>
            <th style={{ width: '100px', textAlign: 'center' }} ><img style={{ width: '80%', height: 'auto' }} src="./guardia.jpg" alt="Guardia Nacional" /></th>
          </tr>
          <tr>
            <th className="encabezado">guardia nacional</th>
          </tr>
          <tr>
            <th className="fechayhora">{fechaHoraActual}</th>
          </tr>
          <tr>
            <th className="separador">___________________________________________</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr>
            <td className="via-cerrada">{inputs.nota}</td>
          </tr>
          <tr>
            <td className="separador">___________________________________________</td>
          </tr>
          <tr>
            <td className="calle">Ubicacion:</td>
          </tr>
          <tr>
            <td className="altura">{inputs.altura}</td>
          </tr>
          <tr>
          <td className="separador">___________________________________________</td>
          </tr>
          <tr>
            <td className="calle">Apliquen negativos❗</td>
          </tr>
          <tr></tr>
          <tr>
            <td className="alterna1">Actualicen la informacion al pasar por el punto mencionado</td>
          </tr>
          <tr>
            <td className="alterna1">Si es posible, tomen foto y compartan</td>
          </tr>
          <tr>
          <td className="separador">___________________________________________</td>
          </tr>
          
          
          
        </tbody>
        <tfoot>
          <tr>
            <td className="tips">☝ Favor de informar a los grupos que estan revisando (papeles, pasajeros, estado de la unidad, llantas, etc...), en caso de que los revisen.</td>
          </tr>
          <tr>
            <td className="tips">☝ Favor de informar a los grupos cual es el estado del operativo.</td>
          </tr>
        </tfoot>
      </table>
      <button className="boton-capturar" onClick={() => capturarTabla(tablaRef.current)}>
        Capturar
      </button>
    </div>
  );
}

export default Guardia;
