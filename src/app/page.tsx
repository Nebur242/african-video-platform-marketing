import { MarketingPage } from "@/components/marketing-page";
import { getTimeRemaining, LAUNCH_TARGET } from "@/lib/launch-countdown";

export default function Home() {
  return (
    <MarketingPage
      initialTimeRemaining={getTimeRemaining(LAUNCH_TARGET, Date.now())}
    />
  );
}
