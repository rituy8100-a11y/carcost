import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '카코스트 개인정보처리방침',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-white mb-8">
        개인정보처리방침
      </h1>

      <div className="prose prose-sm text-gray-400 space-y-6">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            1. 개인정보의 수집 및 이용 목적
          </h2>
          <p>
            카코스트(이하 &quot;사이트&quot;)는 별도의 회원가입 없이 이용 가능한
            서비스로, 이용자의 개인정보를 직접 수집하지 않습니다. 다만 서비스
            이용 과정에서 아래와 같은 정보가 자동으로 생성되어 수집될 수
            있습니다.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>접속 IP 주소, 브라우저 종류, 접속 일시</li>
            <li>방문 페이지, 이용 기록</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            2. 광고 서비스 (Google AdSense)
          </h2>
          <p>
            본 사이트는 Google AdSense를 통해 광고를 게재하고 있습니다. Google은
            사용자의 관심사에 기반한 광고를 표시하기 위해 쿠키를 사용할 수
            있습니다. 사용자는 Google 광고 설정 페이지(
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline"
            >
              https://www.google.com/settings/ads
            </a>
            )에서 맞춤 광고를 비활성화할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            3. 쿠키(Cookie) 사용
          </h2>
          <p>
            본 사이트는 Google AdSense 및 Google Analytics 등 제3자 서비스에서
            쿠키를 사용할 수 있습니다. 쿠키는 브라우저 설정에서 거부할 수
            있으며, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            4. 개인정보의 보유 및 파기
          </h2>
          <p>
            본 사이트는 이용자의 개인정보를 직접 수집하지 않으므로 별도의 보유 및
            파기 절차가 없습니다. 자동 수집되는 로그 정보는 서비스 운영 목적으로만
            사용되며, 목적 달성 후 지체 없이 파기됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            5. 이용자의 권리
          </h2>
          <p>
            이용자는 언제든지 브라우저 쿠키 설정을 통해 쿠키 수집을 거부할 수
            있으며, 광고 맞춤 설정을 변경할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">
            6. 개인정보처리방침의 변경
          </h2>
          <p>
            본 개인정보처리방침은 법령 및 정책의 변경에 따라 수정될 수 있으며,
            변경 시 본 페이지에 게시합니다.
          </p>
          <p className="mt-2">시행일자: 2026년 3월 31일</p>
        </section>
      </div>
    </div>
  );
}
