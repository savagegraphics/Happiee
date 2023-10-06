import './globals.css'
import { AddressBar } from '@/components/TopBar';
import { GlobalNav } from '@/components/GlobalSideNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Happie Dashboard',
    template: '%s | Next.js App Router',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="bg-[#ECF1F6] overflow-y-scroll pb-36">
        <GlobalNav />

        <div className="lg:pl-[205px]">
          <div className="mx-auto max-w-4xl">
              <div className="bg-white">
                <AddressBar />
             </div>
            <div className="p-px shadow-lg shadow-black/20">
              <div className="pt-8 pl-4 lg:mt-0 md:mt-0 mt-10">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
