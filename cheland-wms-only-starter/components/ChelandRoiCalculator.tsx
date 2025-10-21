'use client';
import React, { useMemo, useState } from "react";

export default function ChelandRoiCalculator() {
  // WMS inputs
  const [ordersPerMonth, setOrdersPerMonth] = useState(1000);
  const [errorRateBefore, setErrorRateBefore] = useState(3); // %
  const [errorRateAfter, setErrorRateAfter] = useState(1); // %
  const [costPerError, setCostPerError] = useState(4000);
  const [pickMinutesPerOrder, setPickMinutesPerOrder] = useState(6);
  const [pickReductionPct, setPickReductionPct] = useState(25); // %
  const [laborCostPerHour, setLaborCostPerHour] = useState(4000);
  const [areaM2, setAreaM2] = useState(200);
  const [areaCostPerMonth, setAreaCostPerMonth] = useState(1500);
  const [spaceReductionPct, setSpaceReductionPct] = useState(5); // %

  // Automations inputs
  const [tasksPerMonth, setTasksPerMonth] = useState(3000);
  const [minsSavedPerTask, setMinsSavedPerTask] = useState(1);
  const [officeLaborCostPerHour, setOfficeLaborCostPerHour] = useState(5000);
  const [autoErrorRateBefore, setAutoErrorRateBefore] = useState(1.5); // %
  const [autoErrorRateAfter, setAutoErrorRateAfter] = useState(0.5); // %
  const [autoCostPerError, setAutoCostPerError] = useState(3000);

  // Costs
  const [wmsSetup, setWmsSetup] = useState(0);
  const [wmsMonthly, setWmsMonthly] = useState(0);
  const [autoSetup, setAutoSetup] = useState(0);
  const [autoMonthly, setAutoMonthly] = useState(0);

  // WMS savings
  const { wmsErrorSavings, wmsPickingSavingsMoney, wmsSpaceSavings, wmsSavingsTotal } = useMemo(() => {
    const errorsBefore = (ordersPerMonth * errorRateBefore) / 100;
    const errorsAfter = (ordersPerMonth * errorRateAfter) / 100;
    const wmsErrorSavings = Math.max(0, errorsBefore - errorsAfter) * costPerError;

    const pickHoursBefore = (ordersPerMonth * pickMinutesPerOrder) / 60;
    const pickHoursAfter = pickHoursBefore * (1 - pickReductionPct / 100);
    const pickHoursSaved = Math.max(0, pickHoursBefore - pickHoursAfter);
    const wmsPickingSavingsMoney = pickHoursSaved * laborCostPerHour;

    const spaceSavings = (areaM2 * areaCostPerMonth) * (spaceReductionPct / 100);
    const total = wmsErrorSavings + wmsPickingSavingsMoney + spaceSavings;

    return { wmsErrorSavings, wmsPickingSavingsMoney, wmsSpaceSavings: spaceSavings, wmsSavingsTotal: total };
  }, [ordersPerMonth, errorRateBefore, errorRateAfter, costPerError, pickMinutesPerOrder, pickReductionPct, laborCostPerHour, areaM2, areaCostPerMonth, spaceReductionPct]);

  // Automations savings
  const { autoTimeSavingsMoney, autoErrorSavings, autoSavingsTotal } = useMemo(() => {
    const timeSavedHours = (tasksPerMonth * Math.max(0, minsSavedPerTask)) / 60;
    const timeSavedMoney = timeSavedHours * officeLaborCostPerHour;
    const errorsBefore = (tasksPerMonth * autoErrorRateBefore) / 100;
    const errorsAfter = (tasksPerMonth * autoErrorRateAfter) / 100;
    const errorSavings = Math.max(0, errorsBefore - errorsAfter) * autoCostPerError;
    return { autoTimeSavingsMoney: timeSavedMoney, autoErrorSavings: errorSavings, autoSavingsTotal: timeSavedMoney + errorSavings };
  }, [tasksPerMonth, minsSavedPerTask, officeLaborCostPerHour, autoErrorRateBefore, autoErrorRateAfter, autoCostPerError]);

  // Combined & ROI
  const { monthlySavingsTotal, monthlyCostsTotal, netMonthlyBenefit, totalSetup, paybackMonths } = useMemo(() => {
    const monthlySavingsTotal = wmsSavingsTotal + autoSavingsTotal;
    const monthlyCostsTotal = wmsMonthly + autoMonthly;
    const netMonthlyBenefit = monthlySavingsTotal - monthlyCostsTotal;
    const totalSetup = wmsSetup + autoSetup;
    const paybackMonths = netMonthlyBenefit > 0 ? totalSetup / netMonthlyBenefit : Infinity;
    return { monthlySavingsTotal, monthlyCostsTotal, netMonthlyBenefit, totalSetup, paybackMonths };
  }, [wmsSavingsTotal, autoSavingsTotal, wmsMonthly, autoMonthly, wmsSetup, autoSetup]);

  const currency = (n: number) => isFinite(n) ? new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n) : "—";
  const number = (n: number) => new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(n);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-xl font-semibold">Cheland ROI Calculator</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="rounded-2xl border p-4">
          <h3 className="font-medium mb-2">WMS — Supuestos</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <label className="flex flex-col">Órdenes/mes<input type="number" className="border p-2 rounded" value={ordersPerMonth} onChange={e=>setOrdersPerMonth(+e.target.value)} /></label>
            <label className="flex flex-col">% error antes<input type="number" className="border p-2 rounded" value={errorRateBefore} onChange={e=>setErrorRateBefore(+e.target.value)} /></label>
            <label className="flex flex-col">% error después<input type="number" className="border p-2 rounded" value={errorRateAfter} onChange={e=>setErrorRateAfter(+e.target.value)} /></label>
            <label className="flex flex-col">Costo por error<input type="number" className="border p-2 rounded" value={costPerError} onChange={e=>setCostPerError(+e.target.value)} /></label>
            <label className="flex flex-col">Min. picking/orden<input type="number" className="border p-2 rounded" value={pickMinutesPerOrder} onChange={e=>setPickMinutesPerOrder(+e.target.value)} /></label>
            <label className="flex flex-col">Reducción picking (%)<input type="number" className="border p-2 rounded" value={pickReductionPct} onChange={e=>setPickReductionPct(+e.target.value)} /></label>
            <label className="flex flex-col">Costo hora operativo<input type="number" className="border p-2 rounded" value={laborCostPerHour} onChange={e=>setLaborCostPerHour(+e.target.value)} /></label>
            <label className="flex flex-col">Área (m²)<input type="number" className="border p-2 rounded" value={areaM2} onChange={e=>setAreaM2(+e.target.value)} /></label>
            <label className="flex flex-col">Costo/m²/mes<input type="number" className="border p-2 rounded" value={areaCostPerMonth} onChange={e=>setAreaCostPerMonth(+e.target.value)} /></label>
            <label className="flex flex-col">Reducción espacio (%)<input type="number" className="border p-2 rounded" value={spaceReductionPct} onChange={e=>setSpaceReductionPct(+e.target.value)} /></label>
          </div>
        </div>
        <div className="rounded-2xl border p-4">
          <h3 className="font-medium mb-2">WMS — Ahorros</h3>
          <ul className="text-sm space-y-2">
            <li>Errores: <strong>{currency(wmsErrorSavings)}</strong></li>
            <li>Picking (horas → $): <strong>{currency(wmsPickingSavingsMoney)}</strong></li>
            <li>Espacio: <strong>{currency(wmsSpaceSavings)}</strong></li>
            <li className="border-t pt-2">Total WMS: <strong>{currency(wmsSavingsTotal)}</strong></li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="rounded-2xl border p-4">
          <h3 className="font-medium mb-2">Automation Pack — Supuestos</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <label className="flex flex-col">Tareas/mes<input type="number" className="border p-2 rounded" value={tasksPerMonth} onChange={e=>setTasksPerMonth(+e.target.value)} /></label>
            <label className="flex flex-col">Min. ahorrados/tarea<input type="number" className="border p-2 rounded" value={minsSavedPerTask} onChange={e=>setMinsSavedPerTask(+e.target.value)} /></label>
            <label className="flex flex-col">Costo hora backoffice<input type="number" className="border p-2 rounded" value={officeLaborCostPerHour} onChange={e=>setOfficeLaborCostPerHour(+e.target.value)} /></label>
            <label className="flex flex-col">% error antes<input type="number" className="border p-2 rounded" value={autoErrorRateBefore} onChange={e=>setAutoErrorRateBefore(+e.target.value)} /></label>
            <label className="flex flex-col">% error después<input type="number" className="border p-2 rounded" value={autoErrorRateAfter} onChange={e=>setAutoErrorRateAfter(+e.target.value)} /></label>
            <label className="flex flex-col">Costo por error<input type="number" className="border p-2 rounded" value={autoCostPerError} onChange={e=>setAutoCostPerError(+e.target.value)} /></label>
          </div>
        </div>
        <div className="rounded-2xl border p-4">
          <h3 className="font-medium mb-2">Automation Pack — Ahorros</h3>
          <ul className="text-sm space-y-2">
            <li>Tiempo (horas → $): <strong>{currency(autoTimeSavingsMoney)}</strong></li>
            <li>Errores: <strong>{currency(autoErrorSavings)}</strong></li>
            <li className="border-t pt-2">Total Automation Pack: <strong>{currency(autoSavingsTotal)}</strong></li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="rounded-2xl border p-4">
          <h3 className="font-medium mb-2">Costos</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <label className="flex flex-col">Setup WMS<input type="number" className="border p-2 rounded" value={wmsSetup} onChange={e=>setWmsSetup(+e.target.value)} /></label>
            <label className="flex flex-col">Mensual WMS<input type="number" className="border p-2 rounded" value={wmsMonthly} onChange={e=>setWmsMonthly(+e.target.value)} /></label>
            <label className="flex flex-col">Setup Automation<input type="number" className="border p-2 rounded" value={autoSetup} onChange={e=>setAutoSetup(+e.target.value)} /></label>
            <label className="flex flex-col">Mensual Automation<input type="number" className="border p-2 rounded" value={autoMonthly} onChange={e=>setAutoMonthly(+e.target.value)} /></label>
          </div>
        </div>
        <div className="rounded-2xl border p-4">
          <h3 className="font-medium mb-2">Resumen ROI</h3>
          <ul className="text-sm space-y-2">
            <li>Ahorro mensual total: <strong>{currency(monthlySavingsTotal)}</strong></li>
            <li>Costos mensuales: <strong>{currency(monthlyCostsTotal)}</strong></li>
            <li>Beneficio neto mensual: <strong>{currency(netMonthlyBenefit)}</strong></li>
            <li>Setup total: <strong>{currency(totalSetup)}</strong></li>
            <li>Payback (meses): <strong>{isFinite(paybackMonths) ? number(paybackMonths) : "—"}</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
