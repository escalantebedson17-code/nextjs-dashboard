"use client";

type Movimiento = {
  monto: number;
  tipo: string;
};

type Props = {
  tope: number;
  setTope: (valor: number) => void;
  movimientos: Movimiento[];
};

export default function Presupuesto({ tope, setTope, movimientos }: Props) {

  const gastoTotal = movimientos
    .filter(m => m.tipo === "gasto")
    .reduce((acc, m) => acc + m.monto, 0);

  const restante = tope - gastoTotal;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">

      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Tope Presupuestal
      </h2>

      <input
        type="number"
        placeholder="Definir presupuesto"
        value={tope}
        onChange={(e) => setTope(Number(e.target.value))}
        className="border border-gray-300 p-2 mt-4 w-full rounded"
      />

      <div className="mt-4 space-y-2">

        <p className="text-gray-700">
          Presupuesto: <span className="font-bold">${tope}</span>
        </p>

        <p className="text-gray-700">
          Gasto total: <span className="font-bold">${gastoTotal}</span>
        </p>

        <p className="text-gray-700">
          Restante: 
          <span className={`font-bold ${restante < 0 ? "text-red-600" : "text-green-600"}`}>
            ${restante}
          </span>
        </p>

        {restante < 0 && (
          <p className="text-red-600 font-semibold">
            ⚠ Has superado el presupuesto
          </p>
        )}

      </div>

    </div>
  );
}