import Image from "next/image";
import Section from "./Section";
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  return (
    <Section title="Creative & Professional Work" subtitle="Selected projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <figure key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/10]">
              <Image src={p.thumb} alt={p.title} fill className="object-cover group-hover:scale-105 transition" />
            </div>
            <figcaption className="p-4 flex items-center justify-between">
              <span className="font-medium">{p.title}</span>
              {p.tags && <span className="text-xs opacity-70">{p.tags.join(" · ")}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
