const companyInfo = [
  { label: "会社名", value: "sumire for plus株式会社" },
  { label: "代表者", value: "酒井（仮）" },
  { label: "設立", value: "2025年3月" },
  {
    label: "所在地",
    value: "〒106-0041 東京都港区麻布台1-3-1 麻布台ヒルズ森JPタワー51階",
  },
  { label: "事業内容", value: "損害保険代理業" },
  { label: "取扱保険会社", value: "AIG損害保険株式会社" },
  { label: "電話番号", value: "03-5400-8168" },
];

export default function CompanyInfoSection() {
  return (
    <section id="company" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-[32px] font-bold text-main text-center font-display mb-12 tracking-wide">
          会社情報
        </h2>
        <dl className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {companyInfo.map((item) => (
            <div
              key={item.label}
              className="flex flex-col md:flex-row py-4 md:py-5"
            >
              <dt className="text-foreground font-medium text-sm md:w-48 mb-1 md:mb-0">
                {item.label}
              </dt>
              <dd className="text-foreground text-sm">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
