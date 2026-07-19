import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/returns")({
  head: () => ({ meta: [{ title: "Returns Policy — ZR Nexus Services Ltd" }, { name: "description", content: "Returns and refunds policy for ZR Nexus Services Ltd." }] }),
  component: () => (
    <LegalPage title="Returns Policy" updated="May 2026">
      <h2>30-day returns</h2>
      <p>
        We accept returns within <strong>30 days</strong> of delivery. Items must be
        returned in their <strong>original condition</strong>, unused and with all
        original packaging.
      </p>

      <h2>How to return</h2>
      <ol>
        <li>Email us at zrnexusservices@gmail.com with your order number.</li>
        <li>We will provide a return address and instructions.</li>
        <li>Pack the item securely and post it back via a tracked service.</li>
      </ol>

      <h2>Return postage</h2>
      <p>
        The buyer is responsible for return postage costs <strong>unless the item
        is faulty</strong> or was sent in error. In those cases we will cover the
        return cost.
      </p>

      <h2>Refunds</h2>
      <p>
        Once we receive and inspect the returned item, we will issue a refund to
        your original payment method within 5–10 working days.
      </p>

      <h2>Non-returnable items</h2>
      <p>
        Items that are damaged through misuse, missing parts, or not in their
        original condition are not eligible for refund.
      </p>

      <h2>Contact</h2>
      <p>For any return-related questions, email zrnexusservices@gmail.com.</p>
    </LegalPage>
  ),
});
