import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import CustomCursor from "@/components/cursor";
// import { useEffect, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  // const [isBrowser, setIsBrowser] = useState(false);

  return<>
   <Component {...pageProps} />
   {/* {isBrowser && <CustomCursor />} */}
  </>
}
