import AdBanner from '../ads/AdBanner';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  results?: React.ReactNode;
  info?: React.ReactNode;
}

export default function CalculatorLayout({
  title,
  description,
  children,
  results,
  info,
}: CalculatorLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <AdBanner format="horizontal" className="mb-8" />

      <div className="lg:flex lg:gap-8">
        <div className="lg:flex-1">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h1>
            <p className="text-gray-500">{description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="space-y-4">{children}</div>
          </div>

          {results && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                계산 결과
              </h2>
              {results}
            </div>
          )}

          <AdBanner format="rectangle" className="mb-6" />

          {info && (
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-6">
              {info}
            </div>
          )}
        </div>

        <aside className="hidden lg:block lg:w-[300px] lg:flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <AdBanner format="rectangle" />
            <AdBanner format="rectangle" />
          </div>
        </aside>
      </div>
    </div>
  );
}
