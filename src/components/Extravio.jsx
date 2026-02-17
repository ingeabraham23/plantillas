// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./Extravio.css";
import html2canvas from "html2canvas";

function Extravio() {
  const [imagenUsuario, setImagenUsuario] = useState(null);

  const tablaRef = useRef(null);

  const [inputs, setInputs] = useState({
    objeto: "",
    lugar: "",
    fecha: "",
    hora: "",
    abordaje: "",
    telefono: "231 258 5892",
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
    html2canvas(tabla, {scale: 6}).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `extravio.png`;
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
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => setImagenUsuario(ev.target.result);
                reader.readAsDataURL(file);
              }
            }}
          />
        </label>


        <button type="submit">Agregar</button>
      </form>
      <hr></hr>
      <table className="tabla" ref={tablaRef}>
        <thead>
          <tr>
            <td className="encabezado-extravio">SERVICIO SOCIAL</td>
          </tr>
          <tr>
            <td className="encabezado-extravio"></td>
          </tr>
          <tr>
            <td className="encabezado-extravio"></td>
          </tr>
          <tr>
            <td className="encabezado-extravio"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fecha-extravio">{inputs.fecha}</td>
          </tr>
          <tr>
            <td className="hora-extravio">{inputs.hora}</td>
          </tr>
          <tr>
            <td className="separador">〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰</td>
          </tr>
          <tr>
            <td className="se-extravio">se extravio:</td>
          </tr>
          <tr></tr>
          <tr>
            <td className="objeto-extravio">{inputs.objeto}</td>
          </tr>
          <tr>
            <td className="separador-extravio">〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰</td>
          </tr>
          <tr>
            <td className="lugar-extravio">{inputs.lugar}</td>
          </tr>
          <tr>
            <td className="separador-extravio">〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰</td>
          </tr>
          <tr>
            <td className="abordaje-extravio">{inputs.abordaje}</td>
          </tr>
          <tr>
            <td className="separador">〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰</td>
          </tr>
          <tr>
            <td className="comunicate-extravio">
                Si tienes alguna información comunicate al:
            </td>
          </tr>
          <tr>
            <td className="telefono-extravio">{inputs.telefono}</td>
          </tr>
          <tr>
            <td className="separador-extravio">〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰</td>
          </tr>
          <tr>
            <td className="entrega-extravio">
                Si lo(a) encontraste puedes entregarlo(a) en la base de Urbanos Rojos con el Checador.
            </td>
          </tr>
          <tr>
            <td className="separador-extravio">〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰</td>
          </tr>
          <tr>
            <td style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src="./buscando.png"
                  alt="Buscando"
                  style={{ width: "30%", height: "auto" }}
                />

                {imagenUsuario && (
                  <img
                    src={imagenUsuario}
                    alt="Subida"
                    style={{ width: "30%", height: "auto" }}
                  />
                )}
              </div>
            </td>
          </tr>

        </tbody>
        <tfoot>
          <tr>
            <td className="copyright-extravio">@el.joyboy.de.chignautla</td>
          </tr>
        </tfoot>
      </table>
      <button className="boton-capturar" onClick={() => capturarTabla(tablaRef.current)}>
        Capturar
      </button>
    </div>
  );
}

export default Extravio;
