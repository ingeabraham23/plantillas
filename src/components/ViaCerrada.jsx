// eslint-disable-next-line no-unused-vars
import React, { useState, useRef} from "react";
import "./ViaCerrada.css";
import html2canvas from "html2canvas";

function ViaCerrada() {
  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    viaCerrada: "",
    altura:"",
    alterna1: "",
    alterna2: "",
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
      downloadLink.download = `viacerrada.png`;
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
            name="viaCerrada"
            placeholder="Via cerrada:"
            value={inputs.viaCerrada}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="altura"
            placeholder="A que altura:"
            value={inputs.altura}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="alterna1"
            placeholder="Via alterna 1:"
            value={inputs.alterna1}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="alterna2"
            placeholder="Via alterna 2:"
            value={inputs.alterna2}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table className="tabla" ref={tablaRef}>
        <thead>
        <tr>
            <td style={{ width: '100px', textAlign: 'center' }} ><img style={{ width: '50%', height: 'auto' }} src="./viaCerrada.png" alt="ViaCerrada" /></td>
          </tr>
          <tr>
            <th className="encabezado">VIALIDAD CERRADA</th>
          </tr>
          <tr>
            <th className="fechayhora">{fechaHoraActual}</th>
          </tr>
          <tr>
            <td className="separador">___________________________________________</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="calle">la calle:</td>
          </tr>
          <tr></tr>
          <tr>
            <td className="via-cerrada">{inputs.viaCerrada}</td>
          </tr>
          <tr>
            <td className="cerrada">Se encuentra cerrada</td>
          </tr>
          <tr>
            <td className="separador">___________________________________________</td>
          </tr>
          <tr>
            <td className="calle">A la altura de:</td>
          </tr>
          <tr>
            <td className="altura">{inputs.altura}</td>
          </tr>
          <tr>
          <td className="separador">___________________________________________</td>
          </tr>
          <tr>
            <td className="calle">Usar vias alternas:</td>
          </tr>
          <tr></tr>
          <tr>
            <td className="alterna1">{inputs.alterna1}</td>
          </tr>
          <tr>
            <td className="alterna1">{inputs.alterna2}</td>
          </tr>
          <tr>
          <td className="separador">___________________________________________</td>
          </tr>
          
          
          
        </tbody>
        <tfoot>
          <tr>
            <td className="tips">☝ Favor de informar a los grupos si la vialidad continua cerrada o ya hay paso.</td>
          </tr>
          <tr>
            <td className="tips">☝ Favor de informar a los grupos cual es el estado de las vías alternas ya que a veces esta muy complicado transitar por las vías alternas.</td>
          </tr>
        </tfoot>
      </table>
      <button className="boton-capturar" onClick={() => capturarTabla(tablaRef.current)}>
        Capturar
      </button>
    </div>
  );
}

export default ViaCerrada;
