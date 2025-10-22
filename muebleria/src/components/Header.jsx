import "./header.css";

export const Header = ({ setView, user, handleLogout }) => {
  const goToSection = (e, id) => {
    e.preventDefault();
    setView("inicio");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header>
      <figure id="logo">
        <img src="/assets/logo.png" alt="logo" />
      </figure>

      <nav className="menu">
        <a href="#inicio" onClick={(e) => goToSection(e, "inicio")}>INICIO</a>
        <a href="#servicios" onClick={(e) => goToSection(e, "servicios")}>SERVICIOS</a>
        <a href="#planes" onClick={(e) => goToSection(e, "planes")}>PLANES</a>
        <a href="#contacto" onClick={(e) => goToSection(e, "contacto")}>CONTACTO</a>
      </nav>

      <nav className="login">
        {!user ? (
          <>
            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                setView("login");
              }}
            >
              INICIAR SESIÓN
            </a>
            <button
              id="registro"
              onClick={(e) => {
                e.preventDefault();
                setView("registro");
              }}
            >
              REGISTRO
            </button>
          </>
        ) : (
          <button id="registro" onClick={handleLogout}>
            CERRAR SESIÓN
          </button>
        )}
      </nav>
    </header>
  );
};
