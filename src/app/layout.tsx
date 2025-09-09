import "./globals.css";

export const metadata = {
  title: "PRARTES | 3D Artist",
  description: "Daydreaming Today, Shaping Art Tomorrow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0e17] text-white">{children}</body>
    </html>
  );
}
