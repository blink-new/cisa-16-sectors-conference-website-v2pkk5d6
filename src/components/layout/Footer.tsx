import { Link } from 'react-router-dom'
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">CYBERMinds CI Conference</span>
                <span className="text-xs text-gray-400">Critical Infrastructure Security</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              The premier conference for critical infrastructure security professionals, 
              featuring insights on all 16 critical infrastructure sectors and the latest cybersecurity trends.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/sectors" className="text-gray-400 hover:text-white text-sm">16 Sectors</Link></li>
              <li><Link to="/speakers" className="text-gray-400 hover:text-white text-sm">Speakers</Link></li>
              <li><Link to="/agenda" className="text-gray-400 hover:text-white text-sm">Agenda</Link></li>
              <li><Link to="/sponsors" className="text-gray-400 hover:text-white text-sm">Sponsors</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white text-sm">Resources</Link></li>
            </ul>
          </div>

          {/* Conference Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Conference</h3>
            <ul className="space-y-2">
              <li><Link to="/registration" className="text-gray-400 hover:text-white text-sm">Registration</Link></li>
              <li><Link to="/tickets" className="text-gray-400 hover:text-white text-sm">Buy Tickets</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">conferences@cybermindsinstitute.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+1 (954) 559-6203</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Davie, Florida</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CYBERMinds Critical Infrastructure Conference. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer