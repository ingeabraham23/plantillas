// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./Esquela.css";
import html2canvas from "html2canvas";

function Esquela() {
  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    nombre: "",
    estado: "",
    parentesco: "",
    compañero: "",
    fechaVelacion: "",
    horaVelacion: "",
    domicilio: "",
    fechaMisa: "",
    horaMisa: "",
    lugarMisa: "",
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
      downloadLink.download = `esquela.png`;
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
            placeholder="Nombre de la persona que fallecio:"
            value={inputs.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="estado"
            placeholder="Señora, señor, joven, etc:"
            value={inputs.estado}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="parentesco"
            placeholder="Parentesco:"
            value={inputs.parentesco}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="compañero"
            placeholder="compañero:"
            value={inputs.compañero}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="fechaVelacion"
            placeholder="Fecha de la Velacion:"
            value={inputs.fechaVelacion}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="horaVelacion"
            placeholder="Hora de la Velacion:"
            value={inputs.horaVelacion}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="domicilio"
            placeholder="Domicilio de la Velacion:"
            value={inputs.domicilio}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="fechaMisa"
            placeholder="Fecha de la Misa:"
            value={inputs.fechaMisa}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="horaMisa"
            placeholder="Hora de la Misa:"
            value={inputs.horaMisa}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="lugarMisa"
            placeholder="Lugar de la Misa:"
            value={inputs.lugarMisa}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table className="tabla" ref={tablaRef}>
        <thead>
          <tr>
            <th>
            <img
                style={{ width: "20%", height: "auto" }}
                src="./moñoluto.png"
                alt="flores"
              />
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="luto">con profunda pena les informamos el sensible fallecimiento de</td>
          </tr>
          <tr>
            <td className="luto">{inputs.estado}</td>
          </tr>
          <tr>
            <td className="difunto">{inputs.nombre}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="luto">
              {inputs.parentesco} de nuestro querido amigo y compañero
            </td>
          </tr>
          <tr>
            <td className="difunto">{inputs.compañero}</td>
          </tr>
          <tr>
            <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="luto">
              Su cuerpo sera velado:
            </td>
          </tr>
          <tr>
            <td className="difunto">{inputs.fechaVelacion}</td>
          </tr>
          <tr>
            <td className="difunto" >{inputs.horaVelacion}</td>
          </tr>
          <tr>
            <td className="difunto">{inputs.domicilio}</td>
          </tr>
          <tr>
          <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="luto">La misa se llevara a cabo</td>
          </tr>
          <tr>
            <td className="difunto">{inputs.fechaMisa}</td>
          </tr>
          <tr>
            <td className="difunto">{inputs.horaMisa}</td>
          </tr>
          <tr>
            <td className="difunto">{inputs.lugarMisa}</td>
          </tr>
          <tr>
          <td className="separador">__________</td>
          </tr>
          <tr>
            <td className="luto">
              Desde aquí, nuestro mas sincero pésame a sus hijos, hermanos, nietos
              y demás familiares.
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px", textAlign: "center" }}>
              <img
                style={{ width: "20%", height: "auto" }}
                src="./floresluto.png"
                alt="flores"
              />
              
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="descanse">
              Descanse en paz.
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        className="boton-capturar"
        onClick={() => capturarTabla(tablaRef.current)}
      >
        Capturar
      </button>
    </div>
  );
}

export default Esquela;
