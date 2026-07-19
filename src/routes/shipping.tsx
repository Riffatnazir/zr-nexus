import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/shipping")({
  head: () => ({ meta: [{ title: "Shipping Policy — ZR Nexus Services Ltd" }, { name: "description", content: "UK shipping policy for ZR Nexus Services Ltd." }] }),
  component: () => (
    <LegalPage title="Shipping Policy" updated="May 2026">
      <h2>Where we ship</h2>
      <p>We currently ship to addresses within the United Kingdom only.</p>

      <h2>Dispatch times</h2>
      <p>
        Orders are dispatched within <strong>1 working day</strong> of payment
        confirmation. Orders placed on weekends or UK public holidays will be
        dispatched on the next working day.
      </p>

      <h2>Delivery</h2>
      <p>
        All orders are sent via a tracked delivery service. You will receive a
        tracking number by email once your order has been dispatched.
      </p>
      <p>
        Estimated delivery time after dispatch is 2–4 working days, depending on
        your location and the carrier.
      </p>

      <h2>Shipping costs</h2>
      <p>Shipping costs (if any) are displayed at checkout before payment.</p>

      <h2>Lost or delayed parcels</h2>
      <p>
        If your parcel has not arrived within the expected timeframe, contact us at
        zrnexusservices@gmail.com with your order number and we will investigate with the
        carrier.
      </p>
    </LegalPage>
  ),
});
