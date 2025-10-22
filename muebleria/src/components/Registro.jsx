import { useState } from "react";
import "./registro.css";

export const Registro = ({ onRegister }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const nuevoUsuario = { nombre, correo };
    onRegister(nuevoUsuario);
  };

  return (
    <section className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h2>Crear cuenta</h2>

        <label>Nombre</label>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Registrarme</button>
      </form>
    </section>
  );
};
