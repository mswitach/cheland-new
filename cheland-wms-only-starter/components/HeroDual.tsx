'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroDual() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Cheland WMS con <span className="underline decoration-2">Automation Pack</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ordená tu depósito, acelerá el picking y eliminá el trabajo manual.
            Go‑live en 6 semanas. 3PL listo.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/wms"><Button>Ver demo WMS</Button></a>
            <a href="/pricing"><Button variant="secondary">Checklist 6 semanas</Button></a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border p-6 bg-gradient-to-br from-neutral-50 to-white"
        >
          <ul className="space-y-3 text-sm">
            <li>• Picking sin papel y KPIs en vivo</li>
            <li>• Etiquetas Andreani/OCA + tracking</li>
            <li>• 3PL: multi‑cliente, tarifas y SLAs</li>
            <li>• Automation Pack: reabastecimiento, alertas, conciliación</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
