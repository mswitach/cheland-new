import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingDual() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Precios orientativos</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <Card>
          <CardHeader className="font-medium">WMS</CardHeader>
          <CardContent className="text-sm text-gray-600">
            <ul className="list-disc pl-5 space-y-1">
              <li>Base / Pro / 3PL</li>
              <li>Go‑live en 6 semanas</li>
              <li>Integraciones locales</li>
            </ul>
          </CardContent>
          <CardFooter><Button>Solicitar propuesta</Button></CardFooter>
        </Card>
        <Card>
          <CardHeader className="font-medium">Módulos</CardHeader>
          <CardContent className="text-sm text-gray-600">
            <ul className="list-disc pl-5 space-y-1">
              <li>Automation Pack</li>
              <li>Etiquetas & Carriers</li>
              <li>3PL · TMS Add‑on</li>
            </ul>
          </CardContent>
          <CardFooter><Button variant="secondary">Agendar demo</Button></CardFooter>
        </Card>
      </div>
    </section>
  );
}
