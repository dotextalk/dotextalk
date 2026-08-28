import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "General Terms",
    items: [
      {
        title: "Agreement",
        text: "By engaging DOTEX.TALK for a service or project, the client agrees to the applicable terms described on this page together with the agreed quotation, proposal or project scope.",
      },
      {
        title: "Project scope",
        text: "Each project is delivered according to the scope, features, deliverables and commercial terms agreed before work begins. Requests outside the agreed scope may be treated as additional work.",
      },
      {
        title: "Project acceptance",
        text: "DOTEX.TALK reserves the right to accept or decline a project based on requirements, availability, technical feasibility and other relevant considerations.",
      },
    ],
  },
  {
    number: "02",
    title: "Project & Service Terms",
    items: [
      {
        title: "Requirements",
        text: "The client is responsible for providing accurate content, information, credentials, approvals and other materials reasonably required to complete the project.",
      },
      {
        title: "Client delays",
        text: "Delays in receiving content, approvals, access or other required information may affect the agreed delivery timeline.",
      },
      {
        title: "Revisions",
        text: "Revisions are handled according to the revision limits or terms specified in the project quotation. Requests beyond the agreed scope may result in additional charges.",
      },
      {
        title: "Additional work",
        text: "New features, pages, integrations, design changes or other requirements not included in the original scope may be quoted separately.",
      },
    ],
  },
  {
    number: "03",
    title: "Payment Terms",
    items: [
      {
        title: "Quotation",
        text: "Project pricing is based on the agreed scope at the time of quotation. Significant changes to requirements may require a revised quotation.",
      },
      {
        title: "Payment schedule",
        text: "Any advance, milestone or final payment requirements will be communicated in the project quotation or agreement.",
      },
      {
        title: "Final payment",
        text: "Where applicable, final deliverables, launch or transfer of project assets may be subject to receipt of the agreed final payment.",
      },
      {
        title: "Late payment",
        text: "Work, delivery, support or access to certain project services may be paused where agreed payments remain outstanding.",
      },
    ],
  },
  {
    number: "04",
    title: "Domain & Hosting",
    items: [
      {
        title: "Domain registration",
        text: "Domain registration and related charges are separate third-party or infrastructure costs unless explicitly included in a project quotation.",
      },
      {
        title: "Hosting",
        text: "Hosting fees and hosting renewals are separate costs unless specifically included in the agreed service package.",
      },
      {
        title: "Renewals",
        text: "Clients are responsible for maintaining active domain and hosting services where those services are registered or maintained on their behalf.",
      },
    ],
  },
  {
    number: "05",
    title: "Third-Party Services",
    items: [
      {
        title: "Third-party costs",
        text: "Payments for third-party services such as hosting, domains, premium plugins, themes, APIs, payment providers, advertising platforms, software subscriptions or other external services are generally separate from DOTEX.TALK service fees unless explicitly stated otherwise.",
      },
      {
        title: "Third-party availability",
        text: "DOTEX.TALK is not responsible for outages, policy changes, pricing changes, suspension or technical limitations caused by third-party platforms.",
      },
    ],
  },
  {
    number: "06",
    title: "Cancellation & Refunds",
    items: [
      {
        title: "Project cancellation",
        text: "Project cancellation terms may depend on the stage of work, payments already made and resources committed to the project.",
      },
      {
        title: "Completed work",
        text: "Fees relating to work already completed or services already delivered may not be refundable.",
      },
      {
        title: "Third-party charges",
        text: "Third-party payments, subscriptions, domain registrations, hosting charges or other external costs may not be refundable where the relevant provider does not provide a refund.",
      },
    ],
  },
  {
    number: "07",
    title: "Intellectual Property",
    items: [
      {
        title: "Client materials",
        text: "The client remains responsible for ensuring that content, images, logos, documents and other materials supplied to DOTEX.TALK can legally be used for the project.",
      },
      {
        title: "Project deliverables",
        text: "Ownership or usage rights for project deliverables will follow the terms agreed in the relevant quotation or project agreement.",
      },
      {
        title: "Third-party assets",
        text: "Third-party themes, plugins, fonts, stock assets, libraries and software remain subject to their respective licences and terms.",
      },
    ],
  },
  {
    number: "08",
    title: "Portfolio & Publicity",
    items: [
      {
        title: "Portfolio use",
        text: "Unless otherwise agreed, DOTEX.TALK may display completed client work as part of its portfolio, case studies or professional presentation.",
      },
      {
        title: "Confidential projects",
        text: "If a project is subject to confidentiality or a specific non-disclosure arrangement, those agreed terms will take precedence.",
      },
    ],
  },
];

const referralRules = [
  "Minimum eligible work value is ₹5,000.",
  "Commission is 5% of the total eligible work amount actually received from the referred client.",
  "The maximum referral commission is ₹5,000 per referred client.",
  "Multiple eligible services purchased by the same referred client may be combined when calculating the commission.",
  "Domain registration and renewal are not eligible for referral commission.",
  "Hosting purchase and renewal are not eligible for referral commission.",
  "Third-party charges and pass-through costs are not eligible for referral commission.",
  "Self-referrals and referrals involving businesses owned or controlled by the referrer are not eligible.",
  "Existing clients or prospects already in active discussion with DOTEX.TALK for the same requirement are not eligible as new referrals.",
  "Only one referrer can receive commission for a particular referred client.",
  "Where multiple referrals are submitted, referral credit will normally be assigned to the first valid registered and verified referral.",
  "The referral must be registered before the prospective client contacts DOTEX.TALK regarding the same requirement.",
  "Eligible work must be purchased within 12 months from the date the referral is registered.",
  "Commission becomes payable only after the eligible work is completed and the final eligible payment has been received.",
  "Refunded, reversed, charged-back, cancelled or unpaid amounts do not qualify for commission.",
  "The commission is calculated on genuine eligible work actually agreed with and paid for by the client.",
  "The ₹5,000 maximum applies to the entire referral relationship for the applicable referral period, not separately to each service or invoice.",
  "Submission of a referral does not guarantee project acceptance, pricing, engagement or commission.",
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-100px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-28 lg:pt-44">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-4">

              <span className="text-sm font-semibold tracking-[0.3em] text-blue-500">
                TERMS & POLICIES
              </span>

              <span className="h-px w-12 bg-blue-500/60" />

            </div>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Clear terms.
              <span className="block text-blue-500">
                Better projects.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              These terms explain how DOTEX.TALK approaches projects,
              payments, third-party services, intellectual property and the
              Referral Program.
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
              These terms are intended to establish clear expectations
              between DOTEX.TALK, its clients and participants in the
              Referral Program.
            </p>

            <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Please read before engaging
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN TERMS
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
                REFERRAL PROGRAM
            ================================================= */}

            <section
              id="referral"
              className="scroll-mt-24"
            >

              <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

                {/* TITLE */}

                <div>

                  <span className="text-sm font-semibold text-blue-500">
                    09
                  </span>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                    Referral Program
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-zinc-600">
                    Refer a client. Earn up to ₹5,000.
                  </p>

                </div>


                {/* REFERRAL CONTENT */}

                <div>

                  {/* SUMMARY CARD */}

                  <div className="border border-blue-500/20 bg-blue-500/5 p-7 sm:p-9">

                    <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
                      Commission
                    </p>

                    <div className="mt-4 flex flex-wrap items-baseline gap-3">

                      <span className="text-5xl font-bold">
                        5%
                      </span>

                      <span className="text-zinc-500">
                        of total eligible work
                      </span>

                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">

                      <div className="border border-white/10 bg-black/30 p-5">

                        <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                          Minimum work
                        </p>

                        <p className="mt-2 text-xl font-semibold">
                          ₹5,000
                        </p>

                      </div>

                      <div className="border border-white/10 bg-black/30 p-5">

                        <p className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                          Maximum commission
                        </p>

                        <p className="mt-2 text-xl font-semibold">
                          ₹5,000
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* RULES */}

                  <div className="mt-10 border-t border-white/10">

                    {referralRules.map((rule, index) => (

                      <div
                        key={index}
                        className="flex gap-4 border-b border-white/10 py-5"
                      >

                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-blue-500"
                          strokeWidth={1.7}
                        />

                        <p className="leading-7 text-zinc-500">
                          {rule}
                        </p>

                      </div>

                    ))}

                  </div>


                  {/* FORMULA */}

                  <div className="mt-10 border border-white/10 bg-zinc-950 p-7 sm:p-9">

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      Commission formula
                    </p>

                    <p className="mt-5 text-xl font-semibold">
                      Total eligible work actually received × 5%
                    </p>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      Subject to the ₹5,000 maximum commission per referred
                      client.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                PROGRAM CHANGES
            ================================================= */}

            <section className="grid gap-10 lg:grid-cols-[280px_1fr]">

              <div>

                <span className="text-sm font-semibold text-blue-500">
                  10
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Changes to These Terms
                </h2>

              </div>

              <div className="border-t border-white/10">

                <div className="border-b border-white/10 py-7">

                  <p className="leading-7 text-zinc-500">
                    DOTEX.TALK may modify, suspend or discontinue services,
                    policies or the Referral Program for future engagements
                    or referrals. Where appropriate, updated terms will be
                    published on this page.
                  </p>

                </div>

                <div className="border-b border-white/10 py-7">

                  <p className="leading-7 text-zinc-500">
                    Referrals already validly registered before a change
                    will normally be handled according to the terms
                    applicable at the time of registration, subject to
                    applicable law and the specific circumstances of the
                    referral.
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
                  11
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Questions?
                </h2>

              </div>

              <div>

                <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                  If you have questions about a quotation, project,
                  payment or referral, please contact DOTEX.TALK before
                  proceeding.
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
            These website terms are provided for general business use and
            should be reviewed and adapted as necessary for your specific
            business, contracts and applicable legal requirements.
          </p>

        </div>

      </section>

    </main>
  );
}