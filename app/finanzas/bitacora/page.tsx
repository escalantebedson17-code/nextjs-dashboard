"use client";

import { useFinanzas } from "../context/FinanzasContext";

export default function Bitacora() {

  const { movimientos } = useFinanzas();

  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-lg font-semibold">
        Bitácora de Movimientos
      </h2>

      <div className="mt-4">

        {movimientos.map((m, i) => (
          <div key={i} className="border-b p-2">

            {m.tipo} - ${m.monto} - {m.fecha}

          </div>
        ))}

      </div>
    </div>
  );
}