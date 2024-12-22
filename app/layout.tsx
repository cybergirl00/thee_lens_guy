import type { Metadata } from "next";
import { Karla} from 'next/font/google'
import "./globals.css";;




const roboto = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Lens Guyy",
  description: "Your number one guyy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <main>{children}</main>

        <div className="bg-gray-300">
          <h1 className="text-center text-gray-900 text-xl font-extrabold p-4">Designed by Rabiat with <span className="text-red-500">❤</span></h1>
        </div>
      </body>
    </html>
  );
}
