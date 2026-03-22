"use client";

import { FinanzasProvider } from "./context/FinanzasContext";
import Link from "next/link";

export default function FinanzasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FinanzasProvider>

      <div className="flex min-h-screen">

        <aside className="w-64 bg-red-900 text-white p-6">

          <h2 className="text-xl font-bold mb-6">
            Finanzas
          </h2>

          <nav className="flex flex-col gap-3">

            <Link href="/finanzas/presupuesto" className="p-2 rounded hover:bg-red-800">
              Presupuesto
            </Link>

            <Link href="/finanzas/ajustes" className="p-2 rounded hover:bg-red-800">
              Ajustes de saldo
            </Link>

            <Link href="/finanzas/control" className="p-2 rounded hover:bg-red-800">
              Control financiero
            </Link>

            <Link href="/finanzas/bitacora" className="p-2 rounded hover:bg-red-800">
              Bitácora
            </Link>

          </nav>

        </aside>

        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>

      </div>

    </FinanzasProvider>
  );
}