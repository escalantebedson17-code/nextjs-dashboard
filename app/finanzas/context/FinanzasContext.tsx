"use client";

import { createContext, useContext, useState } from "react";

type Movimiento = {
  tipo: string;
  monto: number;
  fecha: string;
};

type FinanzasContextType = {
  saldo: number;
  setSaldo: (n: number) => void;
  tope: number;
  setTope: (n: number) => void;
  movimientos: Movimiento[];
  setMovimientos: (m: Movimiento[]) => void;
};

const FinanzasContext = createContext<FinanzasContextType | null>(null);

export function FinanzasProvider({ children }: any) {

  const [saldo, setSaldo] = useState(0);
  const [tope, setTope] = useState(0);
  const [movimientos, setMovimientos] = useState<Movimiento[]>([]);

  return (
    <FinanzasContext.Provider
      value={{
        saldo,
        setSaldo,
        tope,
        setTope,
        movimientos,
        setMovimientos
      }}
    >
      {children}
    </FinanzasContext.Provider>
  );
}

export function useFinanzas() {
  return useContext(FinanzasContext)!;
}