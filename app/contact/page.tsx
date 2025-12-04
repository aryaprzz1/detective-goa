"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle } from "lucide-react"
import DetectiveImage from "@/components/detective-images"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 text-white">
              <Badge className="bg-amber-600 hover:bg-amber-700 text-white w-fit" variant="secondary">
                Get in Touch
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl leading-tight">
                Contact SeekProof Goa
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                For professional investigation services, confidential consultations, and urgent cases available 24/7.
              </p>
            </div>

            <DetectiveImage
              type="silhouette"
              width={500}
              height={500}
              alt="Contact SeekProof"
              className="rounded-xl overflow-hidden shadow-2xl h-96"
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Contact Information</h2>
                <p className="text-gray-600 text-lg">
                  Reach out directly for a confidential consultation about your case.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-4 rounded-lg bg-amber-50 h-fit">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <span className="font-semibold">+919152695373</span>
                    </p>
                    <p className="text-sm text-amber-600 font-medium">Available 24/7 for urgent cases</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-4 rounded-lg bg-amber-50 h-fit">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <span className="font-semibold">seekproof36@gmail.com</span>
                    </p>
                    <p className="text-sm text-amber-600 font-medium">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-4 rounded-lg bg-amber-50 h-fit">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Office Location</h3>
                    <p className="text-gray-600">2, Jesuit House</p>
                    <p className="text-gray-600">Opposite Municipal Garden</p>
                    <p className="text-gray-600">Altinho, Panaji, Goa 403001</p>
                    <p className="text-sm text-amber-600 font-medium">By appointment</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-4 rounded-lg bg-amber-50 h-fit">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 10:00 AM - 2:00 PM</p>
                    <p className="text-sm text-amber-600 font-medium">24/7 Emergency Services</p>
                  </div>
                </div>
              </div>

              {/* Confidentiality Guarantee */}
              <div className="border-2 border-amber-200 rounded-xl p-6 bg-amber-50">
                <div className="flex gap-3 mb-4">
                  <Shield className="h-6 w-6 text-amber-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900">Confidentiality Guaranteed</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Secure communication channels",
                    "Non-disclosure agreements",
                    "Private meeting facilities",
                    "Discreet investigation methods",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Quick Contact</h2>
                <p className="text-gray-600 text-lg">Choose your preferred method to reach out to us.</p>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Call Directly</h3>
                  <p className="text-gray-600 mb-4">Speak immediately with our investigator for urgent matters.</p>
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white" asChild>
                    <Link href="tel:+919152695373">Call: +919152695373</Link>
                  </Button>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp Message</h3>
                  <p className="text-gray-600 mb-4">Send a quick message for fast response.</p>
                  <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                    <Link href="https://wa.me/919152695373" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </Link>
                  </Button>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Send Email</h3>
                  <p className="text-gray-600 mb-4">Provide case details for detailed response.</p>
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white" asChild>
                    <Link href="mailto:seekproof36@gmail.com">Send Email</Link>
                  </Button>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Schedule Visit</h3>
                  <p className="text-gray-600 mb-4">Book an in-person consultation at our office.</p>
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white" asChild>
                    <Link href="tel:+919152695373">Schedule Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready for Professional Investigation?
            </h2>
            <p className="max-w-[600px] text-white/80 md:text-lg">
              Our team is ready to assist with your case. Contact SeekProof Detective Goa today.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="tel:+919152695373">
                <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700">
                  Call: +919152695373
                </Button>
              </Link>
              <Link href="https://wa.me/919152695373" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
