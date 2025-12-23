import type { AppProps } from "next/app"; // Type for Next.js page props
import "@/src/styles/globals.css";         // Global styles

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* All pages now have access to Redux store */}
      <Component {...pageProps} />
    </>
  );
}
