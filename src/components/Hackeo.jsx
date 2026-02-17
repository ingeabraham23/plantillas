// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./Hackeo.css";
import html2canvas from "html2canvas";

function Hackeo() {
    const tablaRef = useRef(null);

    const [inputs, setInputs] = useState({
        nombre: "",
        numero: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    function capturarTabla(tabla) {
        html2canvas(tabla, { scale: 6 }).then((canvas) => {
            const pngUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = pngUrl;
            link.download = "alerta-whatsapp.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre del compañero afectado"
                    value={inputs.nombre}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="numero"
                    placeholder="Número de WhatsApp hackeado"
                    value={inputs.numero}
                    onChange={handleChange}
                />
            </form>

            <hr />

            <table className="tabla" ref={tablaRef}>
                <thead>
                    
                </thead>
                <tbody>
                    <tr>
                        <td className="encabezado-hackeo">ALERTA DE FRAUDE</td>
                    </tr>
                    <tr>
                        <td className="encabezado-hackeo"></td>
                    </tr><br></br>
                    <tr>
                        <td className="elwhatsapp-hackeo">
                            El WhatsApp del compañero:
                        </td>
                    </tr>
                    <tr>
                        <td className="nombre-hackeo">{inputs.nombre}</td>
                    </tr>
                    <tr>
                        <td className="elwhatsapp-hackeo">
                            ha sido hackeado.
                        </td>
                    </tr>
                    <tr>
                        <td className="separador">
                            〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
                        </td>
                    </tr>
                    <tr>
                        <td className="numero-hackeo-titulo">Número afectado:</td>
                    </tr>
                    <tr>
                        <td className="numero-hackeo">{inputs.numero}</td>
                    </tr>
                    <tr>
                        <td className="separador">
                            〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
                        </td>
                    </tr>
                    <tr>
                        <td className="consejo-hackeo">
                            NO depositen dinero si les pide préstamos o les ofrece
                            electrodomésticos u otros artículos.
                        </td>
                    </tr>
                    <tr>
                        <td className="separador">
                            〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
                        </td>
                    </tr>
                    <tr>
                        <td className="consejo-hackeo">
                            Cualquier persona que tenga un grupo en común con este
                            compañero está en riesgo de ser contactada para este fraude.
                        </td>
                    </tr>

                    <tr>
                        <td className="separador">
                            〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
                        </td>
                    </tr>

                    <tr>
                        <td className="recomendacion-titulo-hackeo">
                            Recomendación de seguridad:
                        </td>
                    </tr>

                    <tr>
                        <td className="recomendacion-hackeo">
                            Activen la <strong>verificación en dos pasos</strong> en WhatsApp
                            para evitar que vuelvan a clonar cuentas.
                        </td>
                    </tr>

                    <tr>
                        <td style={{ textAlign: "center", padding: "10px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "10px",
                                }}
                            >
                                <img
                                    src="./01.png"
                                    alt="Alerta 1"
                                    style={{ width: "90px" }}
                                />
                                <img
                                    src="./02.png"
                                    alt="Alerta 2"
                                    style={{ width: "90px" }}
                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot><br></br>
                    <tr>
                        <td className="copyright-hackeo">@el joyboy de chignautla</td>
                    </tr>
                </tfoot>
            </table>

            <button
                className="boton-capturar"
                onClick={() => capturarTabla(tablaRef.current)}
            >
                Capturar alerta
            </button>
        </div>
    );
}

export default Hackeo;
