import Image from "next/image";

export default function RepresentativeSection() {
  return (
    <section id="representative" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-[32px] font-bold text-main text-center font-display mb-12 tracking-wide">
          代表挨拶
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative w-full aspect-[3/4] max-h-[300px] md:max-h-none overflow-hidden rounded-sm">
              <Image
                src="/images/representative.webp"
                alt="代表 酒井のプロフィール写真"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-foreground text-base leading-relaxed mb-6">
              はじめまして。sumire for plus株式会社 代表の酒井と申します。
            </p>
            <p className="text-foreground text-base leading-relaxed mb-6">
              私は2020年より損害保険の営業に携わり、多くの企業様と向き合ってまいりました。その中で感じたのは、保険は「万が一」に備えるものでありながら、その選び方ひとつで企業の安心感が大きく変わるということです。
            </p>
            <p className="text-foreground text-base leading-relaxed mb-6">
              AIG損害保険の独立代理店として、大手の充実した補償力をそのままに、お客様一社一社のご状況に合わせた丁寧なご提案を心がけております。画一的なプランではなく、事業内容やリスクを深く理解した上で、本当に必要な補償を見極めることが私の役割です。
            </p>
            <p className="text-foreground text-base leading-relaxed mb-8">
              損害保険業界がより品質を重視する時代だからこそ、お客様との信頼関係を何よりも大切にし、長期的なパートナーとして寄り添い続けてまいります。どうぞお気軽にご相談ください。
            </p>
            <p className="text-foreground text-sm font-medium font-display tracking-wide">
              sumire for plus株式会社
              <br />
              代表　酒井
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
