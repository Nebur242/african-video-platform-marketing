import { cn } from "@/lib/utils";

export function SectionTitle({
    eyebrow,
    title,
    description,
    align = "left",
}: {
    eyebrow: string;
    title: string;
    description: string;
    align?: "left" | "center";
}) {
    return (
        <div className={cn("space-y-4", align === "center" && "text-center")}>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-primary sm:text-sm sm:tracking-[0.28em]">
                {eyebrow}
            </p>
            <h2 className="max-w-3xl text-balance font-display text-[2rem] leading-tight sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {description}
            </p>
        </div>
    );
}
