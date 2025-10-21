import { Card, CardContent, CardHeader } from "@/components/ui/card";

const items = [
  "Mercado Libre", "Tiendanube", "Shopify", "Tango", "Odoo", "SAP", "AFIP",
  "Andreani", "OCA", "WhatsApp Cloud API", "Resend", "Openpay"
];

export default function IntegrationsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Integraciones</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-4">
        {items.map((it) => (
          <Card key={it}><CardContent className="text-sm text-gray-700">{it}</CardContent></Card>
        ))}
      </div>
    </section>
  );
}
