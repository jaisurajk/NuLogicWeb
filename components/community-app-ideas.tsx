"use client";

import Link from "next/link";
import { useState } from "react";

type TabKey = "book-sharing" | "clearroute";

const surveyHighlights = [
  { value: "14 / 15", label: "said yes to carpooling" },
  { value: "27 / 41", label: "can work from home sometimes" },
  { value: "53%", label: "reported morning schedule flexibility" },
  { value: "8 yes / 6 maybe", label: "were open to trying a new concept" },
];

const surveyStrategyBars = [
  { label: "Staggered departures", value: 10, color: "#1c6b67" },
  { label: "Rotating WFH", value: 10, color: "#2f8c87" },
  { label: "Neighborhood carpools", value: 8, color: "#b6552e" },
  { label: "Social nudges", value: 8, color: "#d1754f" },
  { label: "Corporate staggering", value: 7, color: "#e8a43d" },
  { label: "Shared vans", value: 4, color: "#8d5a2b" },
];

const bookSharingSlides = [
  {
    title: "Prototype Dashboard",
    text:
      "Book Sharing is presented here as a fully visual concept: shared shelves, neighborhood lending, reading circles, and host-driven pickup coordination.",
  },
  {
    title: "Pilot Data To Track",
    text:
      "The first release would measure requests, completed handoffs, return reliability, shelf density, repeat borrowers, and event RSVPs so the program can grow with evidence.",
  },
  {
    title: "Community Benefit",
    text:
      "The value is not only access to books. It is repeated trust-building inside schools, apartments, and employee communities that already share physical space.",
  },
];

const bookSharingMeasures = [
  { label: "Borrow requests", target: "Daily feed" },
  { label: "Successful handoffs", target: "Trust score" },
  { label: "Average return time", target: "Ops signal" },
  { label: "Reading circle RSVPs", target: "Community growth" },
];

const clearRouteTopStats = [
  { value: "90 → 25 min", label: "commute time restored when flow returns" },
  { value: "15%", label: "peak reduction needed to hit the tipping point" },
  { value: "$0", label: "new road infrastructure required" },
  { value: "160K", label: "vehicles per day across Altamont Pass" },
];

const clearRouteStrategies = [
  {
    title: "1. Staggered Departure Times",
    impact: "~5% reduction",
    detail:
      "Group commuters into twelve 15-minute waves across the 6:00-9:00am window so demand no longer piles into the same moment.",
  },
  {
    title: "2. Rotating Work-From-Home Days",
    impact: "~5% reduction",
    detail:
      "People who can work remotely commit to one coordinated WFH day per week, distributing opt-outs evenly across weekdays.",
  },
  {
    title: "3. Neighborhood Carpool Teams",
    impact: "~3% reduction",
    detail:
      "Teams of four neighbors rotate who drives so four vehicles can become one vehicle on any given day.",
  },
  {
    title: "4. Corporate Schedule Staggering",
    impact: "~5% reduction",
    detail:
      "Employers offset start times so corridor demand is naturally spread between early, standard, and late office windows.",
  },
  {
    title: "5. Shared Commuter Vans",
    impact: "~1-2% reduction",
    detail:
      "Small vans replace six to eight solo trips along high-demand stretches where carpool density is already present.",
  },
  {
    title: "6. Employer Shuttle Loops",
    impact: "~1-2% reduction",
    detail:
      "Multiple employers share shuttle routes, making the Google-style commute option accessible to smaller companies.",
  },
  {
    title: "7. Social Nudges & Live Feedback",
    impact: "Sustains change",
    detail:
      "The product shows commuters exactly how many people shifting by 15 minutes would improve corridor travel for everyone.",
  },
  {
    title: "8. Divert Pass-Through Traffic",
    impact: "~2-3% reduction",
    detail:
      "Signs and alerts encourage non-local traffic to reroute or travel outside the peak rush window.",
  },
];

const clearRoutePilotSteps = [
  "Pick the I-580 + I-680 to San Jose pilot corridor.",
  "Recruit 500-600 commuters through community outreach.",
  "Measure baseline traffic at key intersections and bottlenecks.",
  "Activate all 8 strategies on the same pilot day.",
  "Compare before-and-after counts using hard data.",
];

const clearRouteEvidence = [
  "Peak demand is presented as 9,000 vehicles per hour against a 7,500 vehicle-per-hour road capacity.",
  "The site argues that free-flow roads carry about 2,000 vehicles per lane per hour versus roughly 600 in congested conditions.",
  "The combined strategy math targets a 15-18% reduction, enough to cross the tipping point back to free-flow conditions.",
  "Research references include Caltrans, MTC, FHWA, ACE Corridor Vision, Scoop, Stanford, Singapore INSINC, and staggered-hour pilots.",
];

const tabs = [
  {
    key: "book-sharing" as const,
    label: "Book Sharing",
    eyebrow: "Community App Idea 01",
    title: "A richer slide view for a neighborhood bookshelf network.",
    description:
      "This tab now reads like a mini pitch deck, with visual concept panels, a pilot tracking model, and community-first product framing.",
    accent:
      "linear-gradient(135deg, rgba(232, 164, 61, 0.24), rgba(182, 85, 46, 0.08))",
  },
  {
    key: "clearroute" as const,
    label: "ClearRoute",
    eyebrow: "Community App Idea 02",
    title: "The full commute case: charts, source-backed metrics, and the 8-strategy plan.",
    description:
      "This tab brings in the survey deck and the ClearRoute reference material so the user sees the argument, the chartable data, and the pilot mechanics in one place.",
    accent:
      "linear-gradient(135deg, rgba(28, 107, 103, 0.25), rgba(182, 85, 46, 0.08))",
  },
];

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.4rem] border border-[color:var(--line)] bg-white/78 p-4">
      <div className="text-2xl font-semibold text-[color:var(--teal)]">{value}</div>
      <div className="mt-1 text-sm leading-6 text-black/70">{label}</div>
    </div>
  );
}

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
                nulogic.app/community_app_ideas
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Two clickable tabs, now expanded into richer product slides.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
                Open <strong>Book Sharing</strong> for the community-library concept and{" "}
                <strong>ClearRoute</strong> for the survey-backed commute proposal. Each tab now
                includes visual panels, chart-style data blocks, and supporting descriptions.
              </p>
            </div>

            <div className="grid gap-3 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-4 sm:grid-cols-2">
              {surveyHighlights.map((item) => (
                <MetricCard key={item.label} value={item.value} label={item.label} />
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
          style={{ backgroundImage: active.accent }}
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
              <div className="mt-8 space-y-6">
                <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-4">
                    <img
                      src="/traffic-survey-cover.png"
                      alt="Traffic and Commute Survey cover"
                      className="w-full rounded-[1rem] object-contain"
                    />
                  </div>

                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--foreground)] p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                      Slide Narrative
                    </p>
                    <div className="mt-4 space-y-4">
                      {bookSharingSlides.map((slide) => (
                        <div
                          key={slide.title}
                          className="rounded-2xl border border-white/12 bg-white/8 p-4"
                        >
                          <div className="text-sm font-semibold">{slide.title}</div>
                          <div className="mt-2 text-sm leading-6 text-white/80">{slide.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 xl:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                      What The Pilot Would Collect
                    </p>
                    <div className="mt-4 space-y-4">
                      {bookSharingMeasures.map((item, index) => (
                        <div key={item.label}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-black/80">{item.label}</span>
                            <span className="text-black/50">{item.target}</span>
                          </div>
                          <div className="h-3 rounded-full bg-black/8">
                            <div
                              className="h-3 rounded-full"
                              style={{
                                width: `${68 + index * 8}%`,
                                background:
                                  index % 2 === 0 ? "var(--teal)" : "var(--brand)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-black/65">
                      These are blueprint metrics for a Book Sharing pilot, not reported live
                      production numbers.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                      Concept Image
                    </p>
                    <div className="mt-4 rounded-[1.3rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,#f5dfb6,#f7efe3)] p-5">
                      <div className="grid grid-cols-6 gap-2">
                        {["#355070", "#b56576", "#6d597a", "#eaac8b", "#006d77", "#e76f51"].map(
                          (color, index) => (
                            <div
                              key={`${color}-${index}`}
                              className="rounded-t-lg"
                              style={{
                                backgroundColor: color,
                                height: `${90 + (index % 3) * 24}px`,
                              }}
                            />
                          ),
                        )}
                      </div>
                      <div className="mt-5 rounded-2xl bg-white/78 p-4">
                        <p className="text-base font-semibold text-[color:var(--foreground)]">
                          Shared shelves, trusted hosts, and easy pickup windows.
                        </p>
                        <p className="mt-2 text-sm leading-6 text-black/65">
                          The visual direction is intentionally warm and physical so the app feels
                          like a community exchange, not a cold inventory system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 space-y-6">
                <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-4">
                    <img
                      src="/traffic-survey-cover.png"
                      alt="Traffic and Commute Survey cover"
                      className="w-full rounded-[1rem] object-contain"
                    />
                  </div>

                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--foreground)] p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                      Short Description Of Collected Data
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/82">
                      The local survey summarizes commute habits, schedule flexibility, openness to
                      carpooling, work-from-home availability, and preferred strategies for reducing
                      traffic impact. ClearRoute adds corridor-capacity math, travel-time deltas, and
                      research-backed intervention estimates on top of that survey signal.
                    </p>
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

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {clearRouteTopStats.map((item) => (
                    <MetricCard key={item.label} value={item.value} label={item.label} />
                  ))}
                </div>

                <div className="grid gap-5">
                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                      Survey Strategy Chart
                    </p>
                    <div className="mt-4 space-y-4">
                      {surveyStrategyBars.map((item) => (
                        <div key={item.label}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-black/80">{item.label}</span>
                            <span className="text-black/55">{item.value} selections</span>
                          </div>
                          <div className="h-3 rounded-full bg-black/8">
                            <div
                              className="h-3 rounded-full"
                              style={{ width: `${item.value * 10}%`, backgroundColor: item.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-black/65">
                      These bars are rebuilt from the PDF summary where staggered departures and
                      rotating WFH tie for the top preference at 10 selections each.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                      Corridor Image
                    </p>
                    <div className="mt-4 rounded-[1.3rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,#f4fbfb,#eef4ef)] p-5">
                      <div className="space-y-3">
                        {[
                          "I-580  Tracy / Livermore",
                          "Dublin Interchange",
                          "I-680  Danville / San Ramon",
                          "Sunol Grade",
                          "Warm Springs  I-880 merge",
                          "San Jose / Silicon Valley",
                        ].map((stop, index) => (
                          <div key={stop} className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-[color:var(--teal)]" />
                            <div className="h-[2px] flex-1 bg-[color:var(--line)]" />
                            <div
                              className={`rounded-full px-3 py-1 text-xs ${
                                index % 2 === 0
                                  ? "bg-[color:var(--foreground)] text-white"
                                  : "bg-white text-black/75"
                              }`}
                            >
                              {stop}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-5 text-sm leading-6 text-black/65">
                        A simplified corridor image based on the route chain described on the
                        ClearRoute reference site.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                    8 Strategies In One Slide
                  </p>
                  <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    {clearRouteStrategies.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-[color:var(--line)] bg-white/72 p-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="text-sm font-semibold text-black/85">{item.title}</div>
                          <div className="rounded-full bg-[color:var(--foreground)] px-3 py-1 text-xs text-white">
                            {item.impact}
                          </div>
                        </div>
                        <div className="mt-3 text-sm leading-6 text-black/68">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-5">
            {activeTab === "book-sharing" ? (
              <>
                <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                    Product Description
                  </p>
                  <p className="mt-4 text-base leading-7 text-black/72">
                    Book Sharing acts like a hyperlocal reading exchange. People discover nearby
                    books, reserve copies, coordinate pickup, and grow recurring circles around
                    genres, schools, or apartment communities.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                    Why Put It Next To ClearRoute
                  </p>
                  <p className="mt-4 text-base leading-7 text-black/72">
                    Both concepts focus on reducing daily friction through better coordination.
                    Book Sharing builds belonging and habit loops. ClearRoute applies that same
                    coordination mindset to commuting.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--foreground)] p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                    Honest Data Label
                  </p>
                  <p className="mt-4 text-base leading-7 text-white/82">
                    The Book Sharing tab uses a concept dashboard and pilot-measurement blueprint.
                    Unlike ClearRoute, it is not claiming pre-existing survey data.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                    Pilot Plan
                  </p>
                  <ol className="mt-4 space-y-3 text-sm leading-6 text-black/72">
                    {clearRoutePilotSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
                    Evidence Notes
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-black/72">
                    {clearRouteEvidence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--foreground)] p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">Source Blend</p>
                  <p className="mt-4 text-base leading-7 text-white/82">
                    This slide combines your local survey PDF with the published ClearRoute concept
                    site so the page shows both local appetite and corridor-scale intervention logic.
                  </p>
                </div>
              </>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
