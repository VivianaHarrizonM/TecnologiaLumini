//import "./userGreeting.css";

export const UserGreeting = ({ user }) => {
  return (
    <section className="user-greeting">
      <h2>¡Hola, {user.nombre}! 👋</h2>
      <p>Gracias por formar parte de nuestra comunidad.</p>
    </section>
  );
};
