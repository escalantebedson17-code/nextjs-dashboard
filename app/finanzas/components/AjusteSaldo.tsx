"use client";

import { useState } from "react";

type Props = {
  saldo: number;
  setSaldo: (valor: number) => void;
};

export default function AjusteSaldo({ saldo, setSaldo }: Props) {

  const [monto, setMonto] = useState(0);

  const aplicarAjuste = (tipo: string) => {

    if (monto === 0) return;

    if (tipo === "sumar") {
      setSaldo(saldo + monto);
    } else {
      setSaldo(saldo - monto);
    }

    setMonto(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">

      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Ajuste de Saldo
      </h2>

      <p className="mt-4 text-gray-700">
        Saldo actual: <span className="font-bold">${saldo}</span>
      </p>

      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(Number(e.target.value))}
        className="border border-gray-300 p-2 mt-4 w-full rounded"
      />

      <div className="mt-4 flex gap-2">

        <button
          onClick={() => aplicarAjuste("sumar")}
          className="bg-red-800 text-white px-4 py-2 rounded w-full"
        >
          Sumar
        </button>

        <button
          onClick={() => aplicarAjuste("restar")}
          className="bg-gray-700 text-white px-4 py-2 rounded w-full"
        >
          Restar
        </button>

      </div>

    </div>
  );
}