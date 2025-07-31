import { Shield, Zap, Droplets, Truck, Radio, Factory, Heart, DollarSign, Wheat, Building, Plane, Database, Cpu, Wrench, School, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SectorsPage = () => {
  const sectors = [
    {
      name: 'Energy',
      icon: Zap,
      description: 'Power generation, transmission, and distribution systems including electrical grid, oil and gas infrastructure.',
      threats: ['Cyberattacks on grid systems', 'Physical attacks on facilities', 'Supply chain vulnerabilities'],
      sessions: 8
    },
    {
      name: 'Water and Wastewater Systems',
      icon: Droplets,
      description: 'Drinking water and wastewater treatment facilities, distribution systems, and related infrastructure.',
      threats: ['SCADA system vulnerabilities', 'Chemical contamination', 'Physical security breaches'],
      sessions: 6
    },
    {
      name: 'Transportation',
      icon: Truck,
      description: 'Aviation, maritime, mass transit, highway, freight rail, and pipeline systems.',
      threats: ['Connected vehicle vulnerabilities', 'Air traffic control systems', 'Port security challenges'],
      sessions: 7
    },
    {
      name: 'Communications',
      icon: Radio,
      description: 'Telecommunications networks, internet infrastructure, and broadcasting systems.',
      threats: ['Network infrastructure attacks', '5G security concerns', 'Satellite communication risks'],
      sessions: 9
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Industrial manufacturing facilities, supply chains, and production systems.',
      threats: ['Industrial IoT vulnerabilities', 'Supply chain attacks', 'Operational technology risks'],
      sessions: 5
    },
    {
      name: 'Healthcare and Public Health',
      icon: Heart,
      description: 'Hospitals, medical facilities, pharmaceutical companies, and public health systems.',
      threats: ['Medical device security', 'Patient data breaches', 'Ransomware attacks'],
      sessions: 6
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Banks, credit unions, investment firms, and payment processing systems.',
      threats: ['Digital banking vulnerabilities', 'Payment system attacks', 'Cryptocurrency risks'],
      sessions: 8
    },
    {
      name: 'Food and Agriculture',
      icon: Wheat,
      description: 'Food production, processing, distribution, and agricultural systems.',
      threats: ['Supply chain contamination', 'Agricultural IoT risks', 'Food processing security'],
      sessions: 4
    },
    {
      name: 'Government Facilities',
      icon: Building,
      description: 'Federal, state, and local government buildings and facilities.',
      threats: ['Physical security breaches', 'Insider threats', 'Critical data protection'],
      sessions: 5
    },
    {
      name: 'Defense Industrial Base',
      icon: Shield,
      description: 'Defense contractors, military equipment manufacturers, and related facilities.',
      threats: ['Intellectual property theft', 'Supply chain infiltration', 'Advanced persistent threats'],
      sessions: 7
    },
    {
      name: 'Information Technology',
      icon: Cpu,
      description: 'IT infrastructure, software systems, and cybersecurity services.',
      threats: ['Zero-day vulnerabilities', 'Cloud security risks', 'AI/ML security challenges'],
      sessions: 10
    },
    {
      name: 'Communications',
      icon: Database,
      description: 'Data centers, cloud services, and information processing facilities.',
      threats: ['Data center attacks', 'Cloud misconfigurations', 'Quantum computing threats'],
      sessions: 6
    },
    {
      name: 'Critical Manufacturing',
      icon: Wrench,
      description: 'Essential manufacturing for national security and economic stability.',
      threats: ['Production line disruption', 'Quality control attacks', 'Intellectual property theft'],
      sessions: 5
    },
    {
      name: 'Dams',
      icon: Droplets,
      description: 'Dam systems, reservoirs, and water control infrastructure.',
      threats: ['SCADA system attacks', 'Physical infrastructure damage', 'Flood control disruption'],
      sessions: 3
    },
    {
      name: 'Emergency Services',
      icon: Heart,
      description: 'Police, fire, emergency medical services, and emergency management.',
      threats: ['Communication system failures', 'Response coordination attacks', 'Public safety disruption'],
      sessions: 4
    },
    {
      name: 'Nuclear Reactors, Materials, and Waste',
      icon: Zap,
      description: 'Nuclear power plants, research reactors, and nuclear material facilities.',
      threats: ['Nuclear facility cyberattacks', 'Material security breaches', 'Safety system compromises'],
      sessions: 5
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CYBERMinds 16 Critical Infrastructure Sectors
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The CYBERMinds conference focuses on the 16 critical infrastructure sectors whose assets, 
            systems, and networks are considered so vital that their incapacitation would have a 
            debilitating effect on security, national economic security, national public health or safety.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <sector.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{sector.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {sector.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Threats:</h4>
                  <ul className="space-y-1">
                    {sector.threats.map((threat, threatIndex) => (
                      <li key={threatIndex} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {threat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Conference Sessions</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {sector.sessions} sessions
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Deep Dive into Each Sector
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our conference features dedicated sessions for each critical infrastructure sector, 
            with expert speakers sharing the latest threats, vulnerabilities, and protection strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/agenda" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View Full Agenda
            </a>
            <a href="/speakers" className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Meet Our Experts
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectorsPage