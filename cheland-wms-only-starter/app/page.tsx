import HeroDual from "@/components/HeroDual";
import IntegrationsGrid from "@/components/IntegrationsGrid";
import Timeline6Weeks from "@/components/Timeline6Weeks";
import CasesMini from "@/components/CasesMini";
import PricingDual from "@/components/PricingDual";

export default function Home() {
  return (
    <div>
      <HeroDual />
      <IntegrationsGrid />
      <Timeline6Weeks />
      <CasesMini />
      <PricingDual />
      <section id="cta" className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border p-6 text-center">
          <h3 className="text-xl font-medium">¿Listo para ordenar tu depósito?</h3>
          <p className="text-gray-600 mt-2">Agendá una demo o escribinos por WhatsApp.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a className="rounded-xl bg-black text-white px-4 py-2" href="https://calendly.com/">Agendar demo</a>
            <a className="rounded-xl border px-4 py-2" href="https://wa.me/">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
