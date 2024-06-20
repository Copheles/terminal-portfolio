import localFont from 'next/font/local'
import "./globals.css";

const joseFans = localFont({ src: '../public/JosefinSans.ttf'});

export const metadata = {
  title: "Copheles Terminal Portfolio",
  description: "Terminal like portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type='image/png' href="/favicon.png" />
      </head>
      <body className={joseFans.className}>{children}</body>
    </html>
  );
}
