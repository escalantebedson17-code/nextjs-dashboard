"use client";

type Props = {
  saldo: number;
  setSaldo: (valor: number) => void;
};

export default function AjusteSaldo({ saldo, setSaldo }: Props) {

  const aplicarAjuste = (valor: number) => {
    setSaldo(saldo + valor);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
        Ajuste de Saldo
      </h2>

      <p className="mt-4 text-gray-700">
        Saldo actual: <span className="font-bold">${saldo}</span>
      </p>

      <div className="mt-4 flex gap-2">

        <button
          onClick={() => aplicarAjuste(100)}
          className="bg-red-800 text-white px-4 py-2 rounded"
        >
          +100
        </button>

        <button
          onClick={() => aplicarAjuste(-100)}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          -100
        </button>

      </div>
    </div>
  );
}