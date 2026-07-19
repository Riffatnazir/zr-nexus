import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — ZR Nexus Services Ltd" }, { name: "description", content: "Terms and conditions for using ZR Nexus Services Ltd." }] }),
  component: () => (
    <LegalPage title="Terms & Conditions" updated="May 2026">
      <p>
        These terms govern your use of services provided by ZR Nexus Services Ltd, a
        company registered in England and Wales.
      </p>

      <h2>Acceptance of terms</h2>
      <p>By engaging our services or using our website you agree to be bound by these terms.</p>

      <h2>Services</h2>
      <p>
        We provide business support services including e-commerce, education
        consultancy, administrative and digital services. The scope of any
        engagement will be confirmed in writing.
      </p>

      <h2>Payment</h2>
      <p>
        Fees, payment schedules and invoicing arrangements will be agreed in
        writing before work commences.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this website, including text, graphics, logos and images, is
        the property of ZR Nexus Services Ltd unless otherwise stated.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, ZR Nexus Services Ltd shall not be
        liable for any indirect, incidental or consequential losses arising from
        the use of our services or website.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by and construed in accordance with the laws of
        England and Wales. Any disputes shall be subject to the exclusive
        jurisdiction of the English courts.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms? Email zrnexusservices@gmail.com.</p>
    </LegalPage>
  ),
});
