import type React from "react"
import type { Metadata } from "next"
import Script from "next/script" // Import Script
import "./globals.css"

export const metadata: Metadata = {
  title: "Receitas Fitness | Emagreça até 7kg em 21 dias",
  description:
    "Emagreça até 7kg em 21 dias comendo tudo que gosta com +150 receitas fitness sem açúcar, glúten e lactose.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1186073013266534');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1186073013266534&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </body>
    </html>
  )
}
