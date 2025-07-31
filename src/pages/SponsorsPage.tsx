import { Shield, Star, Award, Users, Handshake } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const SponsorsPage = () => {
  const sponsorTiers = [
    {
      tier: 'Platinum',
      color: 'bg-gradient-to-r from-gray-300 to-gray-400',
      textColor: 'text-gray-800',
      price: '$50,000',
      benefits: [
        'Prime booth location',
        'Speaking opportunity',
        'Logo on all materials',
        '10 conference passes',
        'VIP networking access',
        'Branded conference bags',
        'Website homepage logo'
      ],
      sponsors: [
        { name: 'CyberDefense Corp', logo: '/api/placeholder/200/100', description: 'Leading cybersecurity solutions provider' },
        { name: 'SecureInfra Systems', logo: '/api/placeholder/200/100', description: 'Critical infrastructure protection specialists' }
      ]
    },
    {
      tier: 'Gold',
      color: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
      textColor: 'text-yellow-900',
      price: '$25,000',
      benefits: [
        'Premium booth location',
        'Panel participation',
        'Logo on conference materials',
        '6 conference passes',
        'Networking reception access',
        'Digital marketing inclusion'
      ],
      sponsors: [
        { name: 'ThreatGuard Technologies', logo: '/api/placeholder/200/100', description: 'Advanced threat detection and response' },
        { name: 'InfraSecure Solutions', logo: '/api/placeholder/200/100', description: 'Infrastructure security consulting' },
        { name: 'CyberShield Defense', logo: '/api/placeholder/200/100', description: 'Comprehensive cybersecurity platform' }
      ]
    },
    {
      tier: 'Silver',
      color: 'bg-gradient-to-r from-gray-400 to-gray-500',
      textColor: 'text-gray-100',
      price: '$15,000',
      benefits: [
        'Standard booth location',
        'Logo on select materials',
        '4 conference passes',
        'Networking access',
        'Digital directory listing'
      ],
      sponsors: [
        { name: 'SecureNet Analytics', logo: '/api/placeholder/200/100', description: 'Network security monitoring' },
        { name: 'CriticalWatch Systems', logo: '/api/placeholder/200/100', description: '24/7 infrastructure monitoring' },
        { name: 'DefenseFirst Security', logo: '/api/placeholder/200/100', description: 'Proactive security solutions' },
        { name: 'SafeGuard Technologies', logo: '/api/placeholder/200/100', description: 'Industrial security systems' }
      ]
    },
    {
      tier: 'Bronze',
      color: 'bg-gradient-to-r from-orange-600 to-orange-700',
      textColor: 'text-orange-100',
      price: '$7,500',
      benefits: [
        'Exhibit hall presence',
        '2 conference passes',
        'Digital directory listing',
        'Networking opportunities'
      ],
      sponsors: [
        { name: 'CyberWatch Pro', logo: '/api/placeholder/200/100', description: 'Continuous monitoring solutions' },
        { name: 'InfraGuard Plus', logo: '/api/placeholder/200/100', description: 'Infrastructure protection tools' },
        { name: 'SecureOps Center', logo: '/api/placeholder/200/100', description: 'Security operations platform' },
        { name: 'ThreatScope Systems', logo: '/api/placeholder/200/100', description: 'Threat intelligence services' },
        { name: 'CyberFortress Ltd', logo: '/api/placeholder/200/100', description: 'Enterprise security solutions' }
      ]
    }
  ]

  const partnerOrganizations = [
    { name: 'CISA', description: 'Cybersecurity and Infrastructure Security Agency' },
    { name: 'NIST', description: 'National Institute of Standards and Technology' },
    { name: 'DHS', description: 'Department of Homeland Security' },
    { name: 'FBI', description: 'Federal Bureau of Investigation' },
    { name: 'NSA', description: 'National Security Agency' },
    { name: 'SANS Institute', description: 'Cybersecurity Training and Certification' }
  ]

  const stats = [
    { label: 'Total Sponsors', value: '25+', icon: Handshake },
    { label: 'Sponsorship Tiers', value: '4', icon: Award },
    { label: 'Partner Organizations', value: '15+', icon: Users },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Sponsors & Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We're proud to partner with leading organizations in cybersecurity and critical infrastructure 
            protection. Our sponsors make this conference possible and drive innovation in the industry.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sponsorship Tiers
          </h2>
          
          <div className="space-y-12">
            {sponsorTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Tier Header */}
                <div className={`${tier.color} ${tier.textColor} p-6`}>
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                      <Star className="h-8 w-8" />
                      <div>
                        <h3 className="text-2xl font-bold">{tier.tier} Sponsor</h3>
                        <p className="text-lg opacity-90">{tier.price}</p>
                      </div>
                    </div>
                    <Button 
                      variant="secondary" 
                      className="bg-white/20 hover:bg-white/30 border-white/30"
                    >
                      Become a {tier.tier} Sponsor
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits Include:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Current Sponsors */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Current {tier.tier} Sponsors:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tier.sponsors.map((sponsor, sponsorIndex) => (
                        <Card key={sponsorIndex} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4 text-center">
                            <div className="w-full h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                              <span className="text-gray-500 font-medium">{sponsor.name}</span>
                            </div>
                            <h5 className="font-semibold text-gray-900 mb-1">{sponsor.name}</h5>
                            <p className="text-xs text-gray-600">{sponsor.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Organizations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Partner Organizations
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerOrganizations.map((partner, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="w-full h-16 bg-blue-100 rounded-lg mb-3 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-700" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-1">{partner.name}</h5>
                  <p className="text-xs text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Become a Conference Sponsor
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join industry leaders in supporting the critical infrastructure security community. 
            Showcase your solutions to key decision-makers and cybersecurity professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-blue-700 hover:bg-blue-800">
              Download Sponsorship Package
            </Button>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
              Contact Sponsorship Team
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <p>For custom sponsorship opportunities, contact us at:</p>
            <p className="font-medium">sponsors@cisaconference.org | +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorsPage