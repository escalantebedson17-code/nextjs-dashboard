"use client";

import Presupuesto from "../components/Presupuesto";
import { useFinanzas } from "../context/FinanzasContext";

export default function Page() {

  const { tope, setTope, movimientos } = useFinanzas();

  return (
    <Presupuesto
      tope={tope}
      setTope={setTope}
      movimientos={movimientos}
    />
  );
}