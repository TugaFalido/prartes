export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10">
      <div className="container-px py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-black tracking-[0.25em]">PRARTES</div>
        <div className="text-sm opacity-70">
          © {new Date().getFullYear()} PRARTES. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
