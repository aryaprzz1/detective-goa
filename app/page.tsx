import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Users, MapPin, Phone, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Professional */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full -z-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -z-10 blur-3xl" />

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit" variant="secondary">
                Professional Investigation Services
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-white leading-tight">
                SeekProof Detective Goa
              </h1>
              <p className="max-w-[600px] text-gray-300 text-lg md:text-xl leading-relaxed">
                Professional investigative services serving Goa and beyond. With decades of combined experience, our
                team delivers results you can trust.
              </p>

              {/* Quick Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span>2, Jesuit House, Altinho, Panaji, Goa 403001</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span>9152695373</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span>seekproof36@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 min-[400px]:flex-row pt-6">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-slate-900/30 z-10" />
              <Image
                src="/professional-detective-office-goa.jpg"
                alt="SeekProof Detective Goa Office"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Key Members */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit mx-auto" variant="secondary">
              Our Leadership
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
              Expert Team of Professionals
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-lg">
              Led by veterans with decades of investigative experience in law enforcement and military intelligence.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 py-8 md:grid-cols-2">
            {[
              {
                name: "Pradeep Saini",
                role: "Founder & Chief Investigator",
                bio: "Former police officer with 13+ years of investigative experience. Specializes in complex fraud cases and high-profile investigations.",
              },
              {
                name: "Dilip Chauhan",
                role: "Head of Surveillance Operations",
                bio: "Former military intelligence officer specializing in covert surveillance and counter-surveillance techniques.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col border-2 border-amber-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-amber-50 to-white"
              >
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit mx-auto" variant="secondary">
              What We Offer
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
              Comprehensive Investigation Services
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-lg">
              From personal matters to corporate investigations, we provide professional and discreet services.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Users className="h-8 w-8 text-amber-600" />,
                title: "Missing Persons",
                description: "Specialized services to locate missing individuals with speed and discretion.",
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-600" />,
                title: "Surveillance",
                description: "Professional monitoring and documentation with advanced technology.",
              },
              {
                icon: <Award className="h-8 w-8 text-amber-600" />,
                title: "Background Checks",
                description: "Thorough verification of personal and professional histories.",
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-600" />,
                title: "Corporate Investigations",
                description: "Specialized services for business security and fraud detection.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-amber-600" />,
                title: "Due Diligence",
                description: "Comprehensive research for business partnerships and transactions.",
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-600" />,
                title: "Legal Support",
                description: "Investigative expertise to support legal proceedings and cases.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-amber-50 w-fit mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Link href="/services">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit" variant="secondary">
                Why SeekProof
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Trusted Professional Investigations in Goa
              </h2>
              <p className="text-gray-300 md:text-lg leading-relaxed">
                With years of experience and a commitment to excellence, we deliver investigations you can rely on.
              </p>
              <ul className="space-y-3">
                {[
                  "Licensed & Certified Investigators",
                  "Decades of Combined Experience",
                  "Advanced Technology & Techniques",
                  "Discreet & Confidential Service",
                  "24/7 Emergency Support",
                  "Court-Admissible Evidence",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-amber-400" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-amber-600 pl-6 py-4">
                <h3 className="text-2xl font-bold mb-2">Our Commitment</h3>
                <p className="text-gray-300">
                  We are committed to providing professional, ethical, and discreet investigation services. Every case
                  is handled with the utmost care and professionalism.
                </p>
              </div>
              <div className="border-l-4 border-amber-600 pl-6 py-4">
                <h3 className="text-2xl font-bold mb-2">Your Privacy</h3>
                <p className="text-gray-300">
                  Confidentiality is paramount. All information and findings are kept strictly confidential and secure.
                </p>
              </div>
              <div className="border-l-4 border-amber-600 pl-6 py-4">
                <h3 className="text-2xl font-bold mb-2">Results Oriented</h3>
                <p className="text-gray-300">
                  We focus on delivering results. Our systematic approach ensures thorough investigations and actionable
                  findings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready for Professional Investigation Services?
            </h2>
            <p className="max-w-[600px] text-white/90 md:text-lg">
              Contact SeekProof Detective Goa today. Confidential consultation available 24/7.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="tel:9152695373">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
                  Call: 9152695373
                </Button>
              </Link>
              <Link href="https://wa.me/919152695373" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
                  WhatsApp
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Contact Form
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
