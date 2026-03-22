"use client";

import AjusteSaldo from "../components/AjusteSaldo";
import { useFinanzas } from "../context/FinanzasContext";

export default function Page() {

  const { saldo, setSaldo } = useFinanzas();

  return (
    <AjusteSaldo
      saldo={saldo}
      setSaldo={setSaldo}
    />
  );
}