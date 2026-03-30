import { CALCULATORS } from '@/lib/constants';
import CalculatorCard from '@/components/home/CalculatorCard';
import AdBanner from '@/components/ads/AdBanner';
import JsonLd from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: '카코스트 - 자동차 비용 계산기',
          description:
            '자동차 연비, 주유비, 자동차세, 유지비를 한번에 계산하세요.',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'All',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
        }}
      />

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            자동차 비용,{' '}
            <span className="text-blue-600">한번에 계산하세요</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            연비, 주유비, 자동차세, 유지비까지. 내 차에 들어가는 모든 비용을
            무료로 계산할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <AdBanner format="horizontal" className="mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CALCULATORS.map((calc) => (
            <CalculatorCard key={calc.href} calc={calc} />
          ))}
        </div>

        <AdBanner format="horizontal" className="mt-10" />

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            자주 묻는 질문
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                자동차세는 어떻게 계산하나요?
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                자동차세는 배기량(cc)에 세율을 곱하여 산출합니다. 비영업용
                승용차의 경우 1,000cc 이하 80원/cc, 1,600cc 이하 140원/cc,
                1,600cc 초과 200원/cc가 적용됩니다. 여기에 지방교육세 30%가
                추가됩니다. 차령 3년 이상인 차량은 연 5%씩 최대 50%까지
                경감됩니다.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                연비는 어떻게 측정하나요?
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                가장 정확한 방법은 만탱 후 다음 만탱까지의 주행거리를 주유량으로
                나누는 것입니다. 여러 번 측정하여 평균을 내면 더 정확한 실연비를
                알 수 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                자동차 월 유지비는 평균 얼마인가요?
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                차종과 운행 패턴에 따라 다르지만, 일반적으로 소형차 30~50만원,
                중형차 50~80만원, 대형차 80~120만원 정도의 월 유지비가
                발생합니다. 보험료, 주유비, 주차비, 정비비, 자동차세 등이
                포함됩니다.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
