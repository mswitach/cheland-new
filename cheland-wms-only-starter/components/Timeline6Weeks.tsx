import { Card, CardContent, CardHeader } from "@/components/ui/card";

const steps = [
  ["Semana 1", "Relevamiento, layout y datos maestros"],
  ["Semana 2", "Configuración base y roles"],
  ["Semana 3", "Integraciones y carriers"],
  ["Semana 4", "Pruebas de punta a punta"],
  ["Semana 5", "Capacitación operativa"],
  ["Semana 6", "Go‑live asistido"],
];

export default function Timeline6Weeks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Implementación en 6 semanas</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {steps.map(([title, desc], i) => (
          <Card key={i}>
            <CardHeader className="font-medium">{title}</CardHeader>
            <CardContent className="text-sm text-gray-600">{desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
