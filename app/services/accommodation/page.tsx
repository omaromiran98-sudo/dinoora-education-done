"use client"

import { ArrowLeft, Home, CheckCircle, MapPin, Shield } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"
export default function AccommodationPage() {
  const { t, locale } = useLanguage()
  const service = t.services.items.accommodation

  const options = [
    { en: "University Dormitory", ar: "السكن الجامعي" },
    { en: "Private Apartments", ar: "شقق خاصة" },
    { en: "Shared Housing", ar: "السكن المشترك" },
    { en: "Host Families", ar: "العائلات المضيفة" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "en" ? "Back to Services" : "العودة للخدمات"}</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-purple-500/10 text-purple-400">
              <Home className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">{service.title}</h1>
              <p className="text-lg text-muted-foreground mt-2">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "Your Housing Options" : "خيارات السكن لديك"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {options.map((option, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm hover:border-primary/30 transition-all">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{locale === "en" ? option.en : option.ar}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {locale === "en" ? "Verified & inspected" : "معتمد ومفتش"}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {locale === "en" ? "Near campus" : "قريب من الحرم"}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {locale === "en" ? "Affordable rates" : "أسعار معقولة"}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "Our Housing Process" : "عمليتنا في السكن"}
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: locale === "en" ? "Inspection" : "الفحص",
                desc: locale === "en" ? "We personally inspect every property for safety and comfort" : "نفحص كل عقار شخصياً من حيث الأمان والراحة",
              },
              {
                icon: MapPin,
                title: locale === "en" ? "Negotiation" : "التفاوض",
                desc: locale === "en" ? "Get the best rates through our established relationships" : "احصل على أفضل الأسعار من خلال علاقاتنا المؤسسة",
              },
              {
                icon: CheckCircle,
                title: locale === "en" ? "Booking" : "الحجز",
                desc: locale === "en" ? "We handle all paperwork and secure your accommodation" : "نتولى كل الأوراق والعقود",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {locale === "en" ? "Find Your Perfect Home" : "اعثر على منزلك المثالي"}
          </h2>
          <Button className="gold-gradient text-primary-foreground px-8 py-6 text-lg" asChild>
            <Link href="#apply">
              {t.services.cta}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
