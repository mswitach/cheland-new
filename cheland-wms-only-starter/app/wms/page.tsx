import ChelandRoiCalculator from "@/components/ChelandRoiCalculator";

export default function WmsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Cheland WMS</h1>
      <p className="mt-2 text-gray-600">
        Inventario por lote/serie/LPN, ubicaciones ZR/ZD/ZP, conteos cíclicos, picking por olas/zona, packing y etiquetas locales.
        KPIs en tiempo real y evolución hacia 3PL.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-4">
          <h2 className="font-medium">Carriers y etiquetas</h2>
          <p className="text-sm text-gray-600">Andreani/OCA: tarifas, etiquetas, tracking y POD.</p>
        </div>
        <div className="rounded-2xl border p-4">
          <h2 className="font-medium">3PL (multi‑cliente)</h2>
          <p className="text-sm text-gray-600">Cuentas por cliente, tarifas, SLAs y portal.</p>
        </div>
      </div>
      <ChelandRoiCalculator />
    </div>
  );
}
