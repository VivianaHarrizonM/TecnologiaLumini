import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Registro } from "./components/Registro";
import { UserGreeting } from "./components/UserGreeting";
import "./index.css";

function App() {
  const [view, setView] = useState("inicio"); // "inicio" | "login" | "registro"
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setView("inicio");
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setView("inicio");
  };

  const handleLogout = () => {
    setUser(null);
    setView("inicio");
  };

  return (
    <>
      <Header setView={setView} user={user} handleLogout={handleLogout} />

      {/* ✅ Mostrar contenido principal si estamos en "inicio" */}
      {view === "inicio" && (
        <>
          {user && <UserGreeting user={user} />}
          <section id="inicio">
            <Hero />
          </section>
          <section id="servicios">
            <Stats setView={setView}/>
          </section>
          <section id="planes">
            <Features />
          </section>
          <section id="contacto">
            <CallToAction />
          </section>
        </>
      )}

      {/* ✅ Mostrar login o registro según la vista */}
      {view === "login" && (
        <div className="overlay">
          <Login onLogin={handleLogin} />
        </div>
      )}

      {view === "registro" && (
        <div className="overlay">
          <Registro onRegister={handleRegister} />
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
