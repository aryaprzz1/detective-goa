import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Shield, Users, CheckCircle, MapPin } from "lucide-react"
import DetectiveImage from "@/components/detective-images"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 text-white">
              <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit" variant="secondary">
                About SeekProof
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl leading-tight">
                Decades of Investigative Excellence
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-[600px]">
                SeekProof Detective Goa brings together veteran investigators with decades of combined experience in law
                enforcement and military intelligence.
              </p>
            </div>
            <DetectiveImage
              type="mysterious"
              width={500}
              height={500}
              alt="SeekProof Detective Goa"
              className="rounded-xl overflow-hidden shadow-2xl h-96"
            />
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <div>
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit mb-4" variant="secondary">
                  Our Mission
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
                  Truth, Integrity & Confidentiality
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our mission is to provide professional, ethical investigation services with unwavering commitment to
                  truth and justice. Every case is handled with the highest standards of confidentiality and
                  professionalism.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Shield className="h-6 w-6 text-amber-600" />,
                    title: "Integrity",
                    description: "We conduct all investigations ethically and legally, ensuring admissible evidence.",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-amber-600" />,
                    title: "Confidentiality",
                    description: "Client privacy and case discretion are paramount in all operations.",
                  },
                  {
                    icon: <Award className="h-6 w-6 text-amber-600" />,
                    title: "Excellence",
                    description: "We utilize advanced technology and proven investigative techniques.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="p-3 rounded-lg bg-amber-50">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DetectiveImage
              type="silhouette"
              width={500}
              height={500}
              alt="Our values"
              className="rounded-xl overflow-hidden shadow-lg h-96"
            />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit mx-auto" variant="secondary">
              Leadership
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-slate-900">Our Expert Team</h2>
            <p className="max-w-[900px] text-gray-600 md:text-lg">
              Our leadership brings together seasoned professionals with specialized expertise across all investigative
              disciplines.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2">
            {[
              {
                name: "Dilip Chauhan",
                role: "Founder & Head of Surveillance Operations",
                bio: "Founder with expertise in surveillance operations and tactical investigations. Specialized training in covert surveillance and counter-surveillance techniques. Expert in advanced surveillance technology and operational management.",
                expertise: ["Surveillance Operations", "Tactical Operations", "Counter-Surveillance"],
              },
              {
                name: "Pradeep Saini",
                role: "Founder & Chief Investigator",
                bio: "Former police officer with 13+ years of investigative experience. Specializes in complex fraud cases, high-profile investigations, and corporate security. Known for innovative investigation techniques and successful case resolutions.",
                expertise: ["Fraud Investigation", "Corporate Cases", "High-Profile Investigations"],
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col border-2 border-amber-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 bg-white hover:border-amber-400"
              >
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  {member.expertise.map((exp, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full font-medium">
                      {exp}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-amber-600">Phone: +919152695373</p>
                  <p className="text-sm font-medium text-amber-600">Email: seekproof36@gmail.com</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit" variant="secondary">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                Professional & Trustworthy Investigations
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We set the standard for professional investigative services in Goa and beyond.
              </p>

              <ul className="space-y-3">
                {[
                  "Licensed & Certified Investigators",
                  "Decades of Combined Experience",
                  "Advanced Technology & Techniques",
                  "Absolute Confidentiality",
                  "24/7 Emergency Support",
                  "Court-Admissible Evidence",
                  "Professional Team Training",
                  "Client-Focused Approach",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <DetectiveImage
              type="magnifying"
              width={500}
              height={500}
              alt="Why choose us"
              className="rounded-xl overflow-hidden shadow-lg h-96"
            />
          </div>
        </div>
      </section>

      {/* Office & Service Areas */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit mx-auto" variant="secondary">
              Our Location
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-slate-900">
              Based in Goa, Serving India
            </h2>
          </div>

          <div className="mx-auto max-w-4xl grid gap-8 py-8 md:grid-cols-2">
            <div className="border-2 border-amber-200 rounded-xl p-8 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-amber-600" />
                <h3 className="text-2xl font-bold text-slate-900">Main Office</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-slate-900">SeekProof Detective Goa</p>
                <p>2, Jesuit House</p>
                <p>Opposite Municipal Garden</p>
                <p>Altinho, Panaji</p>
                <p>Goa 403001, India</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-amber-600">Phone: 9152695373</p>
                  <p className="text-sm font-medium text-amber-600">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-amber-200 rounded-xl p-8 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Service Coverage</h3>
              <p className="text-gray-600 mb-4">
                We provide professional investigation services across all major cities in India, including:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Goa", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Surat"].map((city) => (
                  <div key={city} className="px-3 py-2 bg-amber-50 text-amber-700 rounded font-medium text-sm">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to Work with Our Team?
            </h2>
            <p className="max-w-[600px] text-white/90 md:text-lg">
              Contact SeekProof Detective Goa today for a confidential consultation about your investigative needs.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="tel:9152695373">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
                  Call: 9152695373
                </Button>
              </Link>
              <Link href="https://wa.me/919152695373" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
                  WhatsApp Us
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
