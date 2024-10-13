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
