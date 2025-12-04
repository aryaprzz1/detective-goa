import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-amber-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-tight">SeekProof</span>
                <span className="text-xs text-amber-400">Detective Goa</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional investigation services serving Goa and beyond with integrity, confidentiality, and expertise.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-amber-400 hover:bg-white/10" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-amber-400 hover:bg-white/10" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-amber-400 hover:bg-white/10" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-amber-400 hover:bg-white/10" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-green-400 hover:bg-white/10" asChild>
                <Link href="https://wa.me/919152695373" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-amber-400">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/missing-persons" className="text-gray-300 hover:text-white transition">
                  Missing Persons
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-security" className="text-gray-300 hover:text-white transition">
                  Corporate Security
                </Link>
              </li>
              <li>
                <Link href="/services/background-checks" className="text-gray-300 hover:text-white transition">
                  Background Checks
                </Link>
              </li>
              <li>
                <Link href="/services/surveillance" className="text-gray-300 hover:text-white transition">
                  Surveillance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-amber-400">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-amber-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>+919152695373</div>
                  <div className="text-xs text-gray-400">24/7 Available</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">seekproof36@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Panaji, Goa 403001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} SeekProof Detective Goa. All rights reserved.
            </p>
            <p className="text-sm text-amber-400 font-medium">Licensed Investigation Agency • Confidential Service</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
