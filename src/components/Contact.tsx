import Section from "./Section";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact" title="Get in contact">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="opacity-90">
          Email: <a className="underline underline-offset-4" href="mailto:prartes177@gmail.com">prartes177@gmail.com</a>
        </p>
        <div className="mt-4 flex items-center gap-4">
          <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube" className="opacity-90 hover:opacity-100">
            <FaYoutube size={22} />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" aria-label="TikTok" className="opacity-90 hover:opacity-100">
            <FaTiktok size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className="opacity-90 hover:opacity-100">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </Section>
  );
}
