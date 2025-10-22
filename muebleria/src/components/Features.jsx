
const features = [
  { img: "/assets/estrella.png", title: "Transferencias seguras", desc: "Utilizamos servidores con servicios de seguridad de alto nivel" },
  { img: "/assets/diamont.png", title: "Privacidad", desc: "Tus datos siempre estaran seguros gracias a la encriptación" },
  { img: "/assets/E.png", title: "Estándares", desc: "Tecnologías basadas en estándares que se actualizan continuamente" },
  { img: "/assets/cono.png", title: "Atencion personalizada", desc: "Te ofrecemos una atención totalmente personal" },
];

export const Features = () => {
  return (
    <section className="three-section">
      <div className="section-information">
        <h2 className="subtitulos">Utilizamos las últimas tecnologías</h2>
        <p className="more-information">MÁS SOBRE LA TECNOLOGÍA</p>
      </div>
      <div>
        {features.map((feature, index) => (
          <article key={index} className="information">
            <img src={feature.img} alt={feature.title} />
            <div>
              <h3 className="server">{feature.title}</h3>
              <p className="text-page">{feature.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
