import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-base">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl md:text-[32px] font-bold text-main text-center font-display mb-4 tracking-wide">
          お問い合わせ
        </h2>
        <p className="text-foreground text-sm text-center mb-8">
          2営業日以内にご登録メールアドレス宛にご連絡いたします
        </p>
        {/* TODO: 送信先APIエンドポイントを設定 */}
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="inquiry-type"
              className="block text-foreground text-sm font-medium mb-2"
            >
              お問い合わせ種別
              <span className="text-red-600 ml-1">*</span>
            </label>
            <select
              id="inquiry-type"
              name="inquiry-type"
              required
              defaultValue=""
              className="w-full min-w-0 md:min-w-[320px] border border-gray-300 rounded-sm px-4 py-3 text-foreground text-base bg-white"
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="corporate">法人保険のご相談</option>
              <option value="individual">個人保険のご相談</option>
              <option value="estimate">お見積もり依頼</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-foreground text-sm font-medium mb-2"
            >
              お名前
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="山田 太郎"
              className="w-full min-w-0 md:min-w-[320px] border border-gray-300 rounded-sm px-4 py-3 text-foreground text-base"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-foreground text-sm font-medium mb-2"
            >
              メールアドレス
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@company.co.jp"
              className="w-full min-w-0 md:min-w-[320px] border border-gray-300 rounded-sm px-4 py-3 text-foreground text-base"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-foreground text-sm font-medium mb-2"
            >
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="03-1234-5678"
              className="w-full min-w-0 md:min-w-[320px] border border-gray-300 rounded-sm px-4 py-3 text-foreground text-base"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-foreground text-sm font-medium mb-2"
            >
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="現在加入中の保険の見直しを検討している"
              className="w-full min-w-0 md:min-w-[320px] border border-gray-300 rounded-sm px-4 py-3 text-foreground text-base resize-vertical"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-accent text-white text-base font-medium rounded-sm hover:bg-accent-dark inline-flex items-center justify-center gap-2 tracking-wider"
          >
            <Mail className="w-5 h-5" />
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
