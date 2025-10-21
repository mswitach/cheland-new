import { Card, CardContent, CardHeader } from "@/components/ui/card";

const cases = [
  { title: "Retail moda (CABA)", kpi: "-38% errores de picking (60 días)", stack: "Tiendanube + Andreani" },
  { title: "3PL mediano (GBA)", kpi: "+24% productividad en packing", stack: "MELI + OCA" },
];

export default function CasesMini() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Resultados reales</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {cases.map((c) => (
          <Card key={c.title}>
            <CardHeader className="font-medium">{c.title}</CardHeader>
            <CardContent className="text-sm text-gray-600">
              <div>{c.kpi}</div>
              <div className="text-gray-500">{c.stack}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
