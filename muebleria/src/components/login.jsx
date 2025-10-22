import { useState } from "react";
import "./login.css";

export const Login = ({ onLogin }) => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !password) {
      alert("Por favor ingresa tus credenciales.");
      return;
    }

    // 🔸 Simula inicio de sesión (sin backend)
    onLogin({ nombre: "Usuario", correo });
  };

  return (
    <section className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

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

        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
};
