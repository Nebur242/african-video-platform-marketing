import type { Metadata } from "next";
import { PaymentSuccessContent } from "./payment-success-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Payment Successful | Senflix",
  description:
    "Payment confirmation page with a direct button back to the Senflix app.",
};

export default function PaymentSuccessPage() {
  return <PaymentSuccessContent />;
}