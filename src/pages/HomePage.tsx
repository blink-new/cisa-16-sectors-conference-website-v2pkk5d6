import { Link } from 'react-router-dom'
import { Calendar, MapPin, Users, Shield, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const HomePage = () => {
  const stats = [
    { label: 'Expert Speakers', value: '25+', icon: Users },
    { label: 'Critical Sectors', value: '16', icon: Shield },
    { label: 'Expected Attendees', value: '250', icon: Users },
    { label: 'Conference Day', value: '1', icon: Calendar },
  ]

  const sectors = [
    'Energy', 'Water', 'Transportation', 'Communications',
    'Manufacturing', 'Healthcare', 'Financial Services', 'Food & Agriculture'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CYBERMinds Critical Infrastructure
              <span className="block text-blue-300">Security Conference 2024</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join cybersecurity leaders, government officials, and industry experts 
              for a comprehensive day focused on protecting America's critical infrastructure.
            </p>
            
            {/* Event Details */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-300" />
                <span className="text-lg">October 3, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-lg">NSU Innovation Center</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-300" />
                <span className="text-lg">250 Attendees</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/tickets">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                  Buy Tickets Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/registration">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                  Register to Attend
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 Sectors Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Covering All 16 Critical Infrastructure Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of every sector designated as critical 
              to national security and economic stability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Shield className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">{sector}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/sectors">
              <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                Explore All 16 Sectors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Speakers Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Speakers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from cybersecurity leaders, government officials, and industry experts 
              at the forefront of critical infrastructure protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Speaker Name</h3>
                  <p className="text-gray-600 mb-2">Chief Security Officer</p>
                  <p className="text-sm text-gray-500">Leading expert in critical infrastructure cybersecurity</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/speakers">
              <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                View All Speakers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Spot Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to connect with the cybersecurity community 
            and learn about the latest threats and solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/tickets">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                Buy Tickets
              </Button>
            </Link>
            <Link to="/agenda">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                View Agenda
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage