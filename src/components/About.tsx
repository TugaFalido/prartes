import Section from "./Section";

export default function About() {
  return (
    <Section title="About">
      <div className="grid gap-6 md:grid-cols-2">
        <p className="opacity-90 leading-relaxed">
          I’m a 3D artist working across VR/360º experiences, character & creature
          design, and real-time optimization for the web. I enjoy blending concept
          art with technical pipelines to ship interactive pieces.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <ul className="text-sm opacity-90 space-y-1">
            <li>• 360º Render & VR Platform builds</li>
            <li>• 3D Animation & WebGL optimization</li>
            <li>• Concept Art for games & animation</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
