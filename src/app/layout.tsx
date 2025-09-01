import "./globals.css";
import "../../devlink/global.css";

import { DevLinkProvider } from "../../devlink/DevLinkProvider";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>{children}</DevLinkProvider>
      </body>
    </html>
  );
}