import React from "react";

interface mensajeProps {
  mensajeA: string;
  mensajeB: string;
}

//* lo que se hizo fue descomponer las propiedades pero tambien se podia pasar de la siguiente manera:
//* export const QueMensaje = (props: mensajeProps) => {

export const QueMensaje = ({ mensajeA, mensajeB }: mensajeProps) => {
  const [mostrarMensajeA, setMostraraMensajeA] = React.useState(false);

  const cambiarMensajeA = () => {
    setMostraraMensajeA(true);
  };

  const cambiarMensajeB = () => {
    setMostraraMensajeA(false);
  };

  if (mostrarMensajeA) {
    return <h1 onClick={cambiarMensajeB}>{mensajeA}</h1>;
  }
  return <h1 onClick={cambiarMensajeA}>{mensajeB}</h1>;
};

//* Renderizacion condicional

export const QueMensaje2 = ({ mensajeA, mensajeB }: mensajeProps) => {
  const [mostrarMensajeA, setMostraraMensajeA] = React.useState(false);

  const cambiarMensajeA = () => setMostraraMensajeA((prev) => !prev);

  return (
    <h1 onClick={cambiarMensajeA}>{mostrarMensajeA ? mensajeA : mensajeB}</h1>
  );
};

//* Renderizacion condicional otra manera

interface mensajeProps2 {
  mensajeA2?: string;
  etiqueta?: string;
}

export const QueMensaje3 = ({ mensajeA2, etiqueta }: mensajeProps2) => {
  if (!mensajeA2) return null;
  switch (etiqueta) {
    case "h1": {
      return <h1> {mensajeA2}</h1>;
    }
    case "h2": {
      return <h2> {mensajeA2}</h2>;
    }
    case "h3": {
      return <h3> {mensajeA2}</h3>;
    }
    case "h4": {
      return <h4> {mensajeA2}</h4>;
    }
    default:
      return <span>{mensajeA2}</span>;
  }
};

//* Listas y claves

interface mensajeProps3 {
  mensajeA3: string[];
}

export const QueMensaje4 = ({ mensajeA3 }: mensajeProps3) => {
  return mensajeA3.map((mensajeA3) => <h1 key={mensajeA3}>{mensajeA3}</h1>);
};
