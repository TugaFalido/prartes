import Section from "./Section";
import { events } from "../data/events";

export default function EventsList() {
  return (
    <Section title="Events" subtitle="Where to find me next">
      <ul className="space-y-4">
        {events.map((e) => (
          <li key={`${e.title}-${e.date}`} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-semibold">{e.title}</h3>
                <p className="text-sm opacity-80">
                  {new Date(e.date).toLocaleDateString()} {e.location ? `• ${e.location}` : ""}
                </p>
              </div>
              {e.link && (
                <a
                  href={e.link}
                  target="_blank"
                  className="text-sm underline underline-offset-4 opacity-90"
                >
                  Details
                </a>
              )}
            </div>
            {e.description && <p className="mt-2 text-sm opacity-90">{e.description}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
