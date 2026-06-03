import { Navigation } from '@/components/Navigation';

export default function PsicologaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation role="psicologa" />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
