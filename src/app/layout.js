import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Travel Blisss",
  description: "Travel Blisss"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
