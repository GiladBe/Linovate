import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
          <ToastContainer />
     <Component {...pageProps} />
    </>
 
);
}
