"use client";
import { useState } from "react";

export default function ControlFinanciero({
  movimientos,
  setMovimientos,
  saldo,
  setSaldo
}) {

  const [monto, setMonto] = useState(0);
  const [tipo, setTipo] = useState("ingreso");

  const agregarMovimiento = () => {

    if (monto === 0) return;

    const nuevo = {
      tipo,
      monto,
      fecha: new Date().toLocaleString()
    };

    setMovimientos([...movimientos, nuevo]);

    if (tipo === "ingreso") {
      setSaldo(saldo + monto);
    } else {
      setSaldo(saldo - monto);
    }

    setMonto(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">

      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Control Financiero
      </h2>

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="border border-gray-300 p-2 mt-4 w-full rounded"
      >
        <option value="ingreso">Ingreso</option>
        <option value="gasto">Gasto</option>
      </select>

      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(Number(e.target.value))}
        className="border border-gray-300 p-2 mt-2 w-full rounded"
      />

      <button
        onClick={agregarMovimiento}
        className="bg-red-800 text-white px-4 py-2 mt-3 rounded hover:bg-red-900 w-full"
      >
        Agregar Movimiento
      </button>

      <p className="mt-4 text-gray-700">
        Saldo: <span className="font-bold">${saldo}</span>
      </p>

    </div>
  );
}