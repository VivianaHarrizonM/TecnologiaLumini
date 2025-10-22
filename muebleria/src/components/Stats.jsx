import React, { useState, useEffect } from "react";

const StatsCard = ({ value, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / 100;
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="target">
      <h2 className="subtitulos">{count}</h2>
      <p className="text-page">{description}</p>
    </div>
  );
};

export const Stats = ({ setView }) => {
  const data = [
    { value: 152, description: "Lorem ipsum dolor sit amet..." },
    { value: 25000, description: "Maiores nisi dolores..." },
    { value: 1256, description: "Hic sit dolorem..." },
  ];

  return (
    <section id="two-section">
      <div id="contend-target">
        {data.map((item, index) => (
          <StatsCard
            key={index}
            value={item.value}
            description={item.description}
          />
        ))}
      </div>
      <div id="div-boton">
        <button
          className="boton botn"
          onClick={() => setView("registro")}
        >
          REGÍSTRATE AHORA
        </button>
      </div>
    </section>
  );
};
