const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    description:
      "お電話またはメールフォームからお気軽にご連絡ください。ご相談内容を簡単にお伺いします。",
  },
  {
    number: "02",
    title: "ヒアリング",
    description:
      "御社の事業内容や現在の保険加入状況、リスクについて丁寧にお伺いします。",
  },
  {
    number: "03",
    title: "プランのご提案",
    description:
      "お伺いした内容をもとに、最適な保険プランをお見積もりとともにご提案いたします。",
  },
  {
    number: "04",
    title: "ご契約・アフターフォロー",
    description:
      "ご契約後も定期的な見直しや、事故発生時の迅速なサポートで安心をお届けします。",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-[32px] font-bold text-main text-center font-display mb-12 tracking-wide">
          ご利用の流れ
        </h2>
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-main text-white flex items-center justify-center rounded-sm font-sans text-xl font-bold">
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold text-main mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
