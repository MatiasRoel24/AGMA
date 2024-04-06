"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/moving-border";

export function ButtonMoving() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Simula un retraso de 2 segundos antes de mostrar el botón
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 100);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      {showButton && (<Button
        borderRadius="1.75rem"
        className="
        
        dark:bg-neutral-200 
        text-white 
        dark:text-black 
        border-cyan-400 
        dark:border-neutral-200 
        border-2
        "
      >
        Agendar reunion
      </Button>
      )}
    </div>
  );
}
