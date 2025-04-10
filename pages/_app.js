import { ProfileProvider } from "@/context/ProfileContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  );
}
