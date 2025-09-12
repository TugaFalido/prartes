import Section from "./Section";
import { serviceBuckets } from "@/data/services";

export default function ServiceCards() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-6 md:grid-cols-3">
        {serviceBuckets.map((b) => (
          <article
            key={b.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold">{b.title}</h3>
            <ul className="mt-3 space-y-1 opacity-90 text-sm">
              {b.items.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
