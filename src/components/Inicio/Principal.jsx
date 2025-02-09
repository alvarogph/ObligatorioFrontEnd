import Login from "./Login"; 
import Registro from "./Registro";
import React, { useState } from 'react';

function Principal() {

  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const ClickRegistro = () => {
    setMostrarRegistro(true);
  };

  const ClickLogin = () => {
    setMostrarRegistro(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenido a Movetracker</h1>
      <div>
      {mostrarRegistro ? (
        <div>
          <Registro />
          <p>¿Ya tienes cuenta? <button onClick={ClickLogin}>Inicia sesión</button></p>
        </div>
      ) : (
        <div>
          <Login />
          <p>¿No tienes cuenta? <button onClick={ClickRegistro}>Regístrate</button></p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Principal;