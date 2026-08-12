"use client";

import { useState } from "react";
import type { FormEvent } from "react";

/**
 * Split intake paths per the upgrade brief: owner / intermediary /
 * investor+other. Delivery is honest: submitting composes an email in the
 * visitor's own mail client addressed to the firm; nothing is sent behind
 * the scenes and no fake success state is shown. When a form provider is
 * chosen, the mailto handoff swaps for a tested server submission.
 */
const EMAIL = "david@waxhawcapital.com";

type PathKey = "owner" | "intermediary" | "investor";

const paths: { key: PathKey; label: string; title: string; blurb: string }[] = [
  {
    key: "owner",
    label: "Business owner",
    title: "I own a business and I'm exploring options",
    blurb: "Confidential conversation, no obligation. We sign an NDA before you share anything.",
  },
  {
    key: "intermediary",
    label: "Intermediary",
    title: "I'm an intermediary with an opportunity",
    blurb: "Brokers, advisors, CPAs, and attorneys: send the profile and we'll respond with a clear fit / no-fit.",
  },
  {
    key: "investor",
    label: "Investor / other",
    title: "I'm an investor, or something else",
    blurb: "Exploring a partnership, or a question that doesn't fit a category.",
  },
];

const field =
  "w-full border-b-[1.5px] border-line-strong bg-transparent px-0.5 pb-3 pt-2 text-[1rem] text-tx outline-none transition-colors focus:border-gold rounded-none";
const label = "mb-1.5 mt-6 block font-label text-[0.7rem] uppercase tracking-[0.2em] text-tx-faint";

function mailto(subject: string, body: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function openEmail(e: FormEvent<HTMLFormElement>, build: (data: FormData) => [string, string]) {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.reportValidity()) return;
  const [subject, body] = build(new FormData(form));
  window.location.href = mailto(subject, body);
}

export function ContactPaths() {
  const [active, setActive] = useState<PathKey>("owner");
  const current = paths.find((p) => p.key === active)!;

  return (
    <div>
      {/* path selector */}
      <div role="tablist" aria-label="Who are you?" className="grid gap-3 sm:grid-cols-3">
        {paths.map((p) => (
          <button
            key={p.key}
            role="tab"
            id={`tab-${p.key}`}
            aria-selected={active === p.key}
            aria-controls={`panel-${p.key}`}
            onClick={() => setActive(p.key)}
            className={`rounded-[3px] border p-5 text-left transition-colors ${
              active === p.key
                ? "border-gold bg-gold/10"
                : "border-line-strong hover:border-gold/50"
            }`}
          >
            <span className={`font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${active === p.key ? "text-gold" : "text-tx-faint"}`}>
              {p.label}
            </span>
            <span className="mt-2 block font-display text-[1.02rem] leading-[1.35] text-tx">
              {p.title}
            </span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="mt-8 rounded-[3px] border border-line-strong bg-white/[0.015] p-[clamp(24px,3.5vw,44px)]"
      >
        <p className="font-display text-[1.15rem] italic text-tx">{current.blurb}</p>

        {active === "owner" ? (
          <form
            noValidate
            onSubmit={(e) =>
              openEmail(e, (d) => [
                "Confidential: owner conversation",
                `${d.get("message")}\n\nBusiness (optional): ${d.get("company") || "-"}\n\n—\n${d.get("name")}\n${d.get("email")}`,
              ])
            }
          >
            <label className={label} htmlFor="o-name">Your name</label>
            <input className={field} id="o-name" name="name" type="text" autoComplete="name" required />
            <label className={label} htmlFor="o-email">Email address</label>
            <input className={field} id="o-email" name="email" type="email" autoComplete="email" required />
            <label className={label} htmlFor="o-company">Business name <span className="normal-case tracking-normal">(optional — feel free to leave blank)</span></label>
            <input className={field} id="o-company" name="company" type="text" autoComplete="organization" />
            <label className={label} htmlFor="o-msg">What's on your mind?</label>
            <textarea className={`${field} min-h-[110px] resize-y`} id="o-msg" name="message" required />
            <SubmitRow note="This opens an email addressed to us in your own mail app. Nothing is sent until you press send." />
          </form>
        ) : null}

        {active === "intermediary" ? (
          <form
            noValidate
            onSubmit={(e) =>
              openEmail(e, (d) => [
                `Opportunity: ${d.get("industry") || "unspecified industry"}`,
                `Industry: ${d.get("industry")}\nLocation: ${d.get("location")}\nRevenue: ${d.get("revenue") || "-"}\nEBITDA: ${d.get("ebitda")}\nTimeline: ${d.get("timeline") || "-"}\n\n${d.get("message") || ""}\n\nPlease attach the teaser or CIM to this email before sending.\n\n—\n${d.get("name")}, ${d.get("firm") || "-"}\n${d.get("email")}`,
              ])
            }
          >
            <div className="grid gap-x-8 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="i-name">Your name</label>
                <input className={field} id="i-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div>
                <label className={label} htmlFor="i-firm">Firm</label>
                <input className={field} id="i-firm" name="firm" type="text" autoComplete="organization" />
              </div>
              <div>
                <label className={label} htmlFor="i-email">Email address</label>
                <input className={field} id="i-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div>
                <label className={label} htmlFor="i-industry">Industry</label>
                <input className={field} id="i-industry" name="industry" type="text" required />
              </div>
              <div>
                <label className={label} htmlFor="i-location">Location</label>
                <input className={field} id="i-location" name="location" type="text" required />
              </div>
              <div>
                <label className={label} htmlFor="i-revenue">Revenue</label>
                <input className={field} id="i-revenue" name="revenue" type="text" inputMode="decimal" />
              </div>
              <div>
                <label className={label} htmlFor="i-ebitda">EBITDA</label>
                <input className={field} id="i-ebitda" name="ebitda" type="text" inputMode="decimal" required />
              </div>
              <div>
                <label className={label} htmlFor="i-timeline">Timeline</label>
                <input className={field} id="i-timeline" name="timeline" type="text" />
              </div>
            </div>
            <label className={label} htmlFor="i-msg">Anything else</label>
            <textarea className={`${field} min-h-[90px] resize-y`} id="i-msg" name="message" />
            <SubmitRow note="This opens a pre-structured email in your mail app. Attach the teaser or CIM there before sending." />
          </form>
        ) : null}

        {active === "investor" ? (
          <form
            noValidate
            onSubmit={(e) =>
              openEmail(e, (d) => [
                "Partnership inquiry",
                `${d.get("message")}\n\n—\n${d.get("name")}\n${d.get("email")}`,
              ])
            }
          >
            <label className={label} htmlFor="v-name">Your name</label>
            <input className={field} id="v-name" name="name" type="text" autoComplete="name" required />
            <label className={label} htmlFor="v-email">Email address</label>
            <input className={field} id="v-email" name="email" type="email" autoComplete="email" required />
            <label className={label} htmlFor="v-msg">Message</label>
            <textarea className={`${field} min-h-[110px] resize-y`} id="v-msg" name="message" required />
            <SubmitRow note="This opens an email addressed to us in your own mail app. Nothing is sent until you press send." />
          </form>
        ) : null}
      </div>
    </div>
  );
}

function SubmitRow({ note }: { note: string }) {
  return (
    <>
      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-[2px] border border-gold bg-gold px-8 py-[16px] font-label text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold-soft hover:bg-gold-soft"
      >
        Compose email <span aria-hidden="true">→</span>
      </button>
      <p className="mt-4 text-[0.82rem] leading-6 text-tx-faint">{note}</p>
    </>
  );
}
