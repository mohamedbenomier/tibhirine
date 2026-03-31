import type { Dictionary } from "@/types";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/20 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600 md:px-6">
        {dict.footer.text}
      </div>
    </footer>
  );
}