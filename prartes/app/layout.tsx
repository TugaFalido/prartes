import "./globals.css";

export const metadata = {
  title: "PRARTES",
  description: "Daydreaming Today, Shaping Art Tomorrow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="m-0 bg-black text-white antialiased">{children}</body>
    </html>
  );
}
