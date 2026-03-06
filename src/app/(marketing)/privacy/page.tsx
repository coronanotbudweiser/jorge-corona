export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-page max-w-3xl">
        <h1 className="text-h1 mb-10">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <p>
            <strong>Last updated:</strong> January 1, 2025
          </p>

          <h2 className="font-heading text-xl font-bold text-dark">
            1. Information We Collect
          </h2>
          <p>
            When you contact us or use our services, we may collect personal
            information such as your name, email address, phone number, business
            name, and any other information you provide voluntarily.
          </p>

          <h2 className="font-heading text-xl font-bold text-dark">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect to: respond to inquiries and
            communicate with you; provide, maintain, and improve our services;
            send relevant updates about our services (with your consent); and
            comply with legal obligations.
          </p>

          <h2 className="font-heading text-xl font-bold text-dark">
            3. Information Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information. We may
            share your information with trusted service providers who assist us
            in operating our business, subject to confidentiality obligations,
            or when required by law.
          </p>

          <h2 className="font-heading text-xl font-bold text-dark">
            4. Cookies and Analytics
          </h2>
          <p>
            Our website may use cookies and similar technologies to analyze
            traffic and improve user experience. You can control cookie settings
            through your browser preferences.
          </p>

          <h2 className="font-heading text-xl font-bold text-dark">
            5. Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission or storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-heading text-xl font-bold text-dark">
            6. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. To exercise these rights, please contact us at the
            email below. We will respond to your request within 30 days.
          </p>

          <h2 className="font-heading text-xl font-bold text-dark">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2 className="font-heading text-xl font-bold text-dark">
            8. Contact
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at{" "}
            <a
              href="mailto:hello@anaroc.com"
              className="text-brand-green-600 hover:text-brand-green-700 underline"
            >
              hello@anaroc.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
