"use client";

import ControlFinanciero from "../components/ControlFinanciero";
import { useFinanzas } from "../context/FinanzasContext";

export default function Page() {

  const {
    movimientos,
    setMovimientos,
    saldo,
    setSaldo,
    tope
  } = useFinanzas();

  return (
    <ControlFinanciero
      movimientos={movimientos}
      setMovimientos={setMovimientos}
      saldo={saldo}
      setSaldo={setSaldo}
      tope={tope}
    />
  );
}