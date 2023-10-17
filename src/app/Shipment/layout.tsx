import React from 'react';

export const metadata = {
  title: 'Nested Layouts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="space-y-9">
      <div>{children}</div>
    </div>
  );
}
