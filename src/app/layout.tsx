// layout.tsx
import { Open_Sans } from "next/font/google"
import { IBM_Plex_Serif } from "next/font/google"

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you actually use
  variable: "--font-open-sans", // optional, lets you reference in CSS
})

const ibm_plex_serif = IBM_Plex_Serif ({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you actually use
  variable: "--font-ibm-plex-serif", // optional, lets you reference in CSS
})


import { DevLinkProvider } from '../../devlink/DevLinkProvider';
import '../../devlink/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          {children}
        </DevLinkProvider>
      </body>
    </html>
  );
}
