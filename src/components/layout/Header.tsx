import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: '16 Sectors', href: '/sectors' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'About Us', href: '/about' },
    { name: 'Resources', href: '/resources' },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-700" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">CYBERMinds CI Conference</span>
              <span className="text-xs text-gray-600">Critical Infrastructure Security</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/registration">
              <Button variant="outline" size="sm">
                Register
              </Button>
            </Link>
            <Link to="/tickets">
              <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                Buy Tickets
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-700'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link to="/registration" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Register
                  </Button>
                </Link>
                <Link to="/tickets" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-blue-700 hover:bg-blue-800">
                    Buy Tickets
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header