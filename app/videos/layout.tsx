import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`antialiased bg-white`}>
      <div>{children}</div>
    </section>
  );
}
