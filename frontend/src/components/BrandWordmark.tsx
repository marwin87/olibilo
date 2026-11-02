import { BRAND } from "@/lib/brand";

// First letter is a coin; each "i" is dotless with a colored dot (green = paid, blue = due).
export default function BrandWordmark() {
  let dots = 0;
  return (
    <span className="text-[#10231A] dark:text-slate-100">
      {[...BRAND.name].map((ch, i) => {
        if (i === 0) return <span key={i} className="brand-coin">{ch}</span>;
        if (ch === "i") return <span key={i} className={`brand-dot brand-dot-${dots++ % 2}`}>ı</span>;
        return ch;
      })}
    </span>
  );
}
