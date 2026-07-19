import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — ZR Nexus Services Ltd" }, { name: "description", content: "Our UK GDPR compliant privacy policy." }] }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        ZR Nexus Services Ltd ("we", "us", "our") is committed to protecting your
        personal data in accordance with the UK General Data Protection Regulation
        (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Identity data such as your name and job title.</li>
        <li>Contact data including email address, phone number and postal address.</li>
        <li>Communication data when you contact us via our website or email.</li>
        <li>Technical data such as IP address and browser type for security and analytics.</li>
      </ul>

      <h2>How we use your data</h2>
      <ul>
        <li>To respond to enquiries and provide the services you request.</li>
        <li>To manage our relationship with you and improve our services.</li>
        <li>To comply with legal and regulatory obligations.</li>
      </ul>

      <h2>Lawful basis</h2>
      <p>
        We process your personal data on the basis of legitimate interest, contract
        performance, consent, or legal obligation, depending on the context.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain your personal data only for as long as necessary to fulfil the
        purposes for which it was collected, including any legal, accounting or
        reporting requirements.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK GDPR you have the right to access, correct, erase, restrict or
        object to our processing of your personal data, and to data portability.
        To exercise any of these rights, contact us at zrnexusservices@gmail.com.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website may use essential cookies to operate correctly. We do not use
        cookies to track you across other websites without your consent.
      </p>

      <h2>Contact</h2>
      <p>
        For any privacy questions please email <strong>zrnexusservices@gmail.com</strong> or
        write to us at 56 Bondfield Road, London, E6 5TS, United Kingdom.
      </p>
    </LegalPage>
  ),
});
