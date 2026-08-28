import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    items: [
      {
        title: "Contact information",
        text: "When you contact DOTEX.TALK, we may receive information such as your name, phone number, email address, business details and other information you choose to provide.",
      },
      {
        title: "Project information",
        text: "We may collect information about your project, requirements, preferences, content and technical requirements when you request or engage our services.",
      },
      {
        title: "Referral information",
        text: "If you submit a referral through our Referral Program, we may collect your contact information and information about the person or business you are referring.",
      },
    ],
  },
  {
    number: "02",
    title: "How We Use Information",
    items: [
      {
        title: "Communication",
        text: "We use information you provide to respond to enquiries, discuss projects, provide quotations and communicate about services.",
      },
      {
        title: "Project delivery",
        text: "Information may be used to plan, develop, configure, maintain and deliver services requested by a client.",
      },
      {
        title: "Business operations",
        text: "Information may be used for legitimate business administration, invoicing, customer support, record keeping and service improvement.",
      },
    ],
  },
  {
    number: "03",
    title: "WhatsApp & Direct Communication",
    items: [
      {
        title: "Communication channels",
        text: "If you contact DOTEX.TALK through WhatsApp, email, phone or another communication channel, the information you provide through that channel may be retained as necessary to respond to your enquiry or provide services.",
      },
      {
        title: "Third-party platforms",
        text: "WhatsApp and other communication platforms operate under their own privacy policies and terms. DOTEX.TALK does not control how those platforms process information within their systems.",
      },
    ],
  },
  {
    number: "04",
    title: "Cookies & Analytics",
    items: [
      {
        title: "Website analytics",
        text: "DOTEX.TALK may use analytics tools such as Google Analytics to understand website traffic, visitor behaviour and general website performance.",
      },
      {
        title: "Cookies",
        text: "The website may use cookies or similar technologies for functionality, analytics, preferences or performance. You may be able to control cookies through your browser settings.",
      },
      {
        title: "Future services",
        text: "If additional analytics, advertising or tracking services are introduced, this policy may be updated to reflect their use.",
      },
    ],
  },
  {
    number: "05",
    title: "Payments",
    items: [
      {
        title: "Payment providers",
        text: "Where online payment services are used, payment information may be processed directly by the relevant payment provider.",
      },
      {
        title: "Payment details",
        text: "DOTEX.TALK does not need to retain complete card, banking or other sensitive payment credentials when those details are processed directly by an external payment provider.",
      },
      {
        title: "Third-party terms",
        text: "Payment providers may process information according to their own privacy policies, security practices and terms.",
      },
    ],
  },
  {
    number: "06",
    title: "Third-Party Services",
    items: [
      {
        title: "External platforms",
        text: "Our websites or services may use third-party platforms such as hosting providers, domain registrars, analytics services, payment providers, advertising platforms, plugins, APIs or other software services.",
      },
      {
        title: "Third-party privacy",
        text: "These services may process information according to their own privacy policies. Where appropriate, we recommend reviewing the privacy policy of the relevant third-party service.",
      },
    ],
  },
  {
    number: "07",
    title: "Data Retention",
    items: [
      {
        title: "Business records",
        text: "We may retain information for as long as reasonably necessary to provide services, maintain business records, resolve disputes, comply with legal obligations or protect legitimate business interests.",
      },
      {
        title: "Deletion requests",
        text: "You may contact DOTEX.TALK to request deletion of personal information where applicable. Certain information may need to be retained where required by law or for legitimate business purposes.",
      },
    ],
  },
  {
    number: "08",
    title: "Data Security",
    items: [
      {
        title: "Reasonable safeguards",
        text: "DOTEX.TALK takes reasonable measures to protect information against unauthorised access, loss, misuse or disclosure.",
      },
      {
        title: "No absolute guarantee",
        text: "No internet transmission, storage system or digital service can be guaranteed to be completely secure. We therefore cannot guarantee absolute security of information transmitted over the internet.",
      },
    ],
  },
  {
    number: "09",
    title: "Your Choices & Rights",
    items: [
      {
        title: "Access & correction",
        text: "You may contact us to request access to or correction of personal information that you have provided, subject to applicable law.",
      },
      {
        title: "Communication preferences",
        text: "You may request that we stop using your contact information for certain non-essential communications.",
      },
      {
        title: "Applicable rights",
        text: "Your privacy rights may vary depending on applicable law and your location.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute right-[-100px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute left-[25%] top-[45%] h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-28 lg:pt-44">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-4">

              <span className="text-sm font-semibold tracking-[0.3em] text-blue-500">
                PRIVACY POLICY
              </span>

              <span className="h-px w-12 bg-blue-500/60" />

            </div>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">

              Your information.

              <span className="block text-blue-500">
                Your privacy.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

              This Privacy Policy explains how DOTEX.TALK may collect, use
              and protect information provided through this website and our
              digital services.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="flex flex-col gap-6 border-l-2 border-blue-500 pl-6 lg:flex-row lg:items-center lg:justify-between">

            <p className="max-w-3xl text-base leading-7 text-zinc-400">

              We aim to collect only information that is reasonably needed
              to communicate with you, understand your requirements and
              deliver our services.

            </p>

            <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Privacy matters
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          POLICY SECTIONS
      ===================================================== */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="space-y-24">

            {sections.map((section) => (

              <section
                key={section.number}
                className="grid gap-10 lg:grid-cols-[280px_1fr]"
              >

                {/* SECTION TITLE */}

                <div>

                  <span className="text-sm font-semibold text-blue-500">
                    {section.number}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                    {section.title}
                  </h2>

                </div>


                {/* SECTION CONTENT */}

                <div className="border-t border-white/10">

                  {section.items.map((item) => (

                    <div
                      key={item.title}
                      className="grid gap-3 border-b border-white/10 py-7 md:grid-cols-[190px_1fr]"
                    >

                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="leading-7 text-zinc-500">
                        {item.text}
                      </p>

                    </div>

                  ))}

                </div>

              </section>

            ))}


            {/* =================================================
                REFERRAL PROGRAM PRIVACY
            ================================================= */}

            <section
              id="referral"
              className="scroll-mt-24"
            >

              <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

                <div>

                  <span className="text-sm font-semibold text-blue-500">
                    10
                  </span>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                    Referral Program
                  </h2>

                </div>


                <div className="border-t border-white/10">

                  <div className="flex gap-4 border-b border-white/10 py-7">

                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-blue-500"
                    />

                    <p className="leading-7 text-zinc-500">
                      Information submitted through the Referral Program may
                      be used to register the referral, verify eligibility,
                      communicate with the referred person or business and
                      process any applicable referral commission.
                    </p>

                  </div>


                  <div className="flex gap-4 border-b border-white/10 py-7">

                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-blue-500"
                    />

                    <p className="leading-7 text-zinc-500">
                      Referrers should only provide information that they have
                      a reasonable basis to share. Where appropriate, the
                      referred person or business may be contacted to discuss
                      the proposed project.
                    </p>

                  </div>


                  <div className="flex gap-4 border-b border-white/10 py-7">

                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-blue-500"
                    />

                    <p className="leading-7 text-zinc-500">
                      Referral information will be handled in accordance with
                      this Privacy Policy and the applicable Referral Program
                      Terms.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                POLICY CHANGES
            ================================================= */}

            <section className="grid gap-10 lg:grid-cols-[280px_1fr]">

              <div>

                <span className="text-sm font-semibold text-blue-500">
                  11
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Changes to This Policy
                </h2>

              </div>

              <div className="border-t border-white/10">

                <div className="border-b border-white/10 py-7">

                  <p className="leading-7 text-zinc-500">

                    DOTEX.TALK may update this Privacy Policy from time to
                    time to reflect changes in services, technology, legal
                    requirements or business practices.

                  </p>

                </div>

                <div className="border-b border-white/10 py-7">

                  <p className="leading-7 text-zinc-500">

                    The updated version will be published on this page.
                    Continued use of the website after an update may be
                    subject to the revised policy.

                  </p>

                </div>

              </div>

            </section>


            {/* =================================================
                CONTACT
            ================================================= */}

            <section className="grid gap-10 lg:grid-cols-[280px_1fr]">

              <div>

                <span className="text-sm font-semibold text-blue-500">
                  12
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Privacy questions?
                </h2>

              </div>

              <div>

                <p className="max-w-2xl text-lg leading-8 text-zinc-400">

                  If you have a question about how your information is
                  handled, please contact DOTEX.TALK.

                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Contact DOTEX.TALK
                  <ArrowUpRight size={17} />
                </Link>

              </div>

            </section>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <p className="text-xs leading-6 text-zinc-600">

            This Privacy Policy is provided as a general website privacy
            document and should be reviewed and adapted to your actual
            services, technologies, data practices and applicable legal
            requirements.

          </p>

        </div>

      </section>

    </main>
  );
}