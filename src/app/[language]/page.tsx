import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import { getTimeRemaining, LAUNCH_TARGET } from "@/lib/launch-countdown";
import { isLegalLanguage } from "@/lib/legal-copy";

export default async function LocalizedHomePage({
    params,
}: Readonly<{
    params: Promise<{ language: string }>;
}>) {
    const { language } = await params;

    if (!isLegalLanguage(language)) {
        notFound();
    }

    return (
        <MarketingPage
            initialTimeRemaining={getTimeRemaining(LAUNCH_TARGET, Date.now())}
        />
    );
}