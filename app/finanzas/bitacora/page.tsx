"use client";

import { useFinanzas } from "../context/FinanzasContext";

export default function Bitacora() {

  const { movimientos } = useFinanzas();

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Bitácora de Movimientos
      </h2>

      <div className="mt-4">

        {movimientos.length === 0 ? (
          <p className="text-gray-500">
            No hay movimientos registrados
          </p>
        ) : (
          movimientos.map((m, i) => (
            <div
              key={i}
              className="flex justify-between border-b p-2"
            >

              <span
                className={
                  m.tipo === "ingreso"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {m.tipo}
              </span>

              <span>${m.monto}</span>

              <span className="text-gray-500">
                {m.fecha}
              </span>

            </div>
          ))
        )}

      </div>
    </div>
  );
}