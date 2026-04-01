"use client";

import Link from "next/link";
import { useState } from "react";

type TabKey = "book-sharing" | "clearroute";

type AccentTheme = {
  backgroundImage: string;
};

const surveyHighlights = [
  { value: "14 / 15", label: "said yes to carpooling" },
  { value: "27 / 41", label: "can work from home sometimes" },
  { value: "53%", label: "reported morning schedule flexibility" },
  { value: "10", label: "top votes each for staggered times and rotating WFH" },
];

const tabs: Array<{
  key: TabKey;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: AccentTheme;
}> = [
  {
    key: "book-sharing",
    label: "Book Sharing",
    eyebrow: "Community App Idea 01",
    title: "A neighborhood bookshelf that makes borrowing feel local again.",
    description:
      "Book Sharing turns apartment communities, schools, and local groups into a lightweight exchange network for books, recommendations, waitlists, and pickup coordination.",
    accent: {
      backgroundImage:
        "linear-gradient(135deg, rgba(232, 164, 61, 0.24), rgba(182, 85, 46, 0.08))",
    },
  },
  {
    key: "clearroute",
    label: "ClearRoute",
    eyebrow: "Community App Idea 02",
    title: "A coordination-first commute app built around timing, flexibility, and community action.",
    description:
      "ClearRoute reframes traffic as a coordination problem. It helps commuters shift departure windows, join shared options, and see how small changes improve corridor-wide flow.",
    accent: {
      backgroundImage:
        "linear-gradient(135deg, rgba(28, 107, 103, 0.25), rgba(182, 85, 46, 0.08))",
    },
  },
];

const clearRouteStrategies = [
  "Staggered departure waves across the morning peak",
  "Rotating work-from-home days for distributed opt-outs",
  "Neighborhood carpools and commuter van matching",
  "Live corridor nudges showing when a 15-minute shift helps everyone",
];

const bookSharingFeatures = [
  "Browse nearby shelves by genre, age group, and language",
  "Reserve a title and coordinate porch, lobby, or locker pickup",
  "Track community reading circles, swaps, and recommendation threads",
  "Reward reliable lenders and active hosts with trust signals",
];

export function CommunityAppIdeas() {
  const [activeTab, setActiveTab] = useState<TabKey>("book-sharing");

  const active = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

  return (
    <main className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[32rem]"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(255, 255, 255, 0.9), transparent 62%)",
        }}
      />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-10 sm:px-10 lg:px-12">
        <div className="mb-12 flex flex-col gap-8 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--card)] p-6 shadow-[var(--shadow)] backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[color:var(--brand-deep)]">
                nulogic.io/community_app_ideas
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Two community app ideas, one launchpad for better local coordination.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
                This concept site introduces <strong>Book Sharing</strong> and{" "}
                <strong>ClearRoute</strong> as human-centered apps designed to help communities
                exchange resources and reduce friction in everyday life.
              </p>
            </div>

            <div className="grid gap-3 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-4 sm:grid-cols-2">
              {surveyHighlights.map((item) => (
                <div key={item.label} className="min-w-36">
                  <div className="text-2xl font-semibold text-[color:var(--teal)]">{item.value}</div>
                  <div className="text-sm leading-6 text-black/65">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                    isActive
                      ? "border-transparent bg-[color:var(--foreground)] text-white shadow-lg"
                      : "border-[color:var(--line)] bg-white/70 text-black/70 hover:border-[color:var(--brand)] hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="ideas-shell grid gap-8 rounded-[2rem] border border-[color:var(--line)] p-6 shadow-[var(--shadow)] md:p-8"
          style={active.accent}
        >
          <div className="rounded-[1.75rem] border border-white/60 bg-white/80 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--brand-deep)]">
              {active.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              {active.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/72 sm:text-lg">
              {active.description}
            </p>

            {activeTab === "book-sharing" ? (
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                    Core Experience
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-black/75">
                    {bookSharingFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--foreground)] p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">Why It Matters</p>
                  <p className="mt-4 text-sm leading-7 text-white/82">
                    Book Sharing is the softer, culture-building companion to a civic tool like
                    ClearRoute. It builds trust, repeat engagement, and neighborhood identity in a
                    format that feels welcoming from day one.
                  </p>
                  <div className="mt-6 rounded-2xl border border-white/15 bg-white/8 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/55">Launch Angle</p>
                    <p className="mt-2 text-sm leading-6 text-white/82">
                      Start with schools, apartment complexes, and employee communities that already
                      have shared spaces and repeated interaction.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                    Survey-Aligned Signals
                  </p>
                  <div className="mt-4 grid gap-3">
                    {surveyHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[color:var(--line)] bg-white/70 p-4"
                      >
                        <div className="text-lg font-semibold text-[color:var(--teal)]">
                          {item.value}
                        </div>
                        <div className="text-sm leading-6 text-black/72">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--foreground)] p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                    Adapted from ClearRoute
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/82">
                    {clearRouteStrategies.map((strategy) => (
                      <li key={strategy}>{strategy}</li>
                    ))}
                  </ul>
                  <Link
                    href="https://traffic-two-sigma.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/18"
                  >
                    Visit the ClearRoute reference site
                  </Link>
                </div>
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-5">
            <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                Idea Framing
              </p>
              <p className="mt-4 text-base leading-7 text-black/72">
                The site positions each concept as a community product, not just a utility.
                Book Sharing focuses on neighborhood generosity; ClearRoute focuses on commuter
                coordination supported by survey-backed flexibility.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                Built From The PDF
              </p>
              <p className="mt-4 text-base leading-7 text-black/72">
                The commute survey highlighted strong openness to carpooling, meaningful remote-work
                availability, and enthusiasm for staggered schedules. Those signals shape how the
                ClearRoute tab is presented here.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--foreground)] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Suggested Next Step</p>
              <p className="mt-4 text-base leading-7 text-white/82">
                If you want, we can add richer routes next: a dedicated detail page for each idea, a
                PDF download section, or an intake form for pilot participants.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
