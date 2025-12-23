import type { AppProps } from "next/app"; // Type for Next.js page props
import { Provider } from "react-redux";    // Redux provider
import { store } from "@/src/store";       // Your configured Redux store
import "@/src/styles/globals.css";         // Global styles

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* All pages now have access to Redux store */}
      <Component {...pageProps} />
    </Provider>
  );
}
