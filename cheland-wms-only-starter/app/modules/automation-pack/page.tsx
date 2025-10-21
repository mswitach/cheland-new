export default function AutomationPackPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Automation Pack (nativo)</h1>
      <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
        <li>Reabastecimiento por umbrales</li>
        <li>Alertas SLA de picking</li>
        <li>Anomalías en recepción</li>
        <li>Conciliación ventas/stock (básica)</li>
        <li>Slotting ABC (MVP)</li>
      </ul>
    </div>
  );
}
