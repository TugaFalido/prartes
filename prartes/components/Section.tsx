import { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-16">
      <div className="container-px">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="opacity-80 mt-1">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
