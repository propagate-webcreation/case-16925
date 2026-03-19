import { Building2, Shield, Users, type LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Building2,
    title: "火災保険・財産保険",
    description:
      "建物・設備・商品など、企業の大切な財産を火災や自然災害から守ります。事業中断による損失もカバーし、万一の際の事業継続を支援します。",
  },
  {
    icon: Shield,
    title: "賠償責任保険",
    description:
      "業務中の事故や製品トラブルによる損害賠償リスクに備えます。施設賠償、生産物賠償、専門職業賠償など、業種に応じた最適なプランをご提案します。",
  },
  {
    icon: Users,
    title: "労災上乗せ保険",
    description:
      "政府労災保険に上乗せし、従業員への補償を手厚くします。業務上・通勤途上の事故に対する補償を充実させ、安心して働ける環境づくりをサポートします。",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-base">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-[32px] font-bold text-main text-center font-display mb-12 tracking-wide">
          事業を守る保険ソリューション
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-sm p-8"
            >
              <service.icon className="w-10 h-10 text-main mb-4" />
              <h3 className="text-lg font-bold text-main mb-3 font-display">
                {service.title}
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
