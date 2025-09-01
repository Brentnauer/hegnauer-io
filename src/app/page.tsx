import type { Metadata } from "next"
import { SplashPage } from "../../devlink/SplashPage"

export const metadata: Metadata = {
  title: "Hegnauer Interactive",
  description:
    "Experiments in code, games, and stories. Limited runs from a name you can’t spell.",
  openGraph: {
    title: "Hegnauer Interactive",
    description:
      "Experiments in code, games, and stories. Limited runs from a name you can’t spell.",
    url: "https://hegnauer.io",
    siteName: "Hegnauer Interactive",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hegnauer Interactive",
    description:
      "Experiments in code, games, and stories. Limited runs from a name you can’t spell.",
  },
}

export default function Home() {
  return (
    <>
    <SplashPage />
    </>
  );
}
