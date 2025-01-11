import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden dark antialiased" >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
