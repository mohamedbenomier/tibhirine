import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-white/30 bg-white/55 p-6 shadow-[0_10px_30px_rgba(11,42,74,0.08)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}