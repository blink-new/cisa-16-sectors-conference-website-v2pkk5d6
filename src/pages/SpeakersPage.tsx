import { Linkedin, Twitter, Globe, Award, Users, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const SpeakersPage = () => {
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Director of Cybersecurity',
      company: 'Department of Homeland Security',
      image: '/api/placeholder/300/300',
      bio: 'Leading expert in critical infrastructure protection with over 15 years of experience in government cybersecurity.',
      expertise: ['Energy Security', 'Government Policy', 'Threat Intelligence'],
      sessions: ['Opening Keynote', 'Energy Sector Deep Dive'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Rodriguez',
      title: 'CISO',
      company: 'American Electric Power',
      image: '/api/placeholder/300/300',
      bio: 'Veteran cybersecurity professional specializing in operational technology and industrial control systems.',
      expertise: ['OT Security', 'Industrial IoT', 'Grid Modernization'],
      sessions: ['Smart Grid Security', 'OT/IT Convergence Panel'],
      social: { linkedin: '#', website: '#' }
    },
    {
      name: 'Jennifer Walsh',
      title: 'VP of Security',
      company: 'JPMorgan Chase',
      image: '/api/placeholder/300/300',
      bio: 'Financial services security leader with expertise in digital banking and payment system protection.',
      expertise: ['Financial Security', 'Digital Banking', 'Fraud Prevention'],
      sessions: ['Financial Sector Threats', 'Digital Payment Security'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dr. James Thompson',
      title: 'Research Director',
      company: 'MITRE Corporation',
      image: '/api/placeholder/300/300',
      bio: 'Cybersecurity researcher focused on advanced persistent threats and nation-state actors.',
      expertise: ['APT Analysis', 'Threat Hunting', 'Incident Response'],
      sessions: ['Nation-State Threats', 'Advanced Threat Detection'],
      social: { linkedin: '#', website: '#' }
    },
    {
      name: 'Lisa Park',
      title: 'Chief Security Officer',
      company: 'Verizon Communications',
      image: '/api/placeholder/300/300',
      bio: 'Telecommunications security expert with deep knowledge of 5G and network infrastructure protection.',
      expertise: ['5G Security', 'Network Infrastructure', 'Telecom Threats'],
      sessions: ['5G Security Challenges', 'Communications Infrastructure'],
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Robert Kim',
      title: 'Director of IT Security',
      company: 'Kaiser Permanente',
      image: '/api/placeholder/300/300',
      bio: 'Healthcare cybersecurity leader specializing in medical device security and patient data protection.',
      expertise: ['Healthcare Security', 'Medical Devices', 'HIPAA Compliance'],
      sessions: ['Healthcare Cybersecurity', 'Medical Device Security'],
      social: { linkedin: '#' }
    },
    {
      name: 'Amanda Foster',
      title: 'Security Architect',
      company: 'Microsoft',
      image: '/api/placeholder/300/300',
      bio: 'Cloud security expert with extensive experience in enterprise security architecture and zero trust.',
      expertise: ['Cloud Security', 'Zero Trust', 'Enterprise Architecture'],
      sessions: ['Cloud Infrastructure Security', 'Zero Trust Implementation'],
      social: { linkedin: '#', twitter: '#', website: '#' }
    },
    {
      name: 'Colonel David Martinez',
      title: 'Cybersecurity Director',
      company: 'U.S. Cyber Command',
      image: '/api/placeholder/300/300',
      bio: 'Military cybersecurity leader with expertise in defense industrial base protection and national security.',
      expertise: ['Defense Security', 'National Security', 'Military Cyber'],
      sessions: ['Defense Industrial Base', 'Military Cyber Operations'],
      social: { linkedin: '#' }
    },
    {
      name: 'Dr. Rachel Green',
      title: 'Principal Scientist',
      company: 'Sandia National Laboratories',
      image: '/api/placeholder/300/300',
      bio: 'Research scientist specializing in critical infrastructure resilience and security modeling.',
      expertise: ['Infrastructure Resilience', 'Security Modeling', 'Risk Assessment'],
      sessions: ['Infrastructure Resilience', 'Security Risk Modeling'],
      social: { linkedin: '#', website: '#' }
    }
  ]

  const stats = [
    { label: 'Expert Speakers', value: '50+', icon: Users },
    { label: 'Years Combined Experience', value: '500+', icon: Award },
    { label: 'Speaking Sessions', value: '75+', icon: Clock },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Speakers
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Learn from the foremost experts in critical infrastructure security, including government 
            officials, industry leaders, and renowned researchers who are shaping the future of cybersecurity.
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

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
                <p className="text-blue-700 font-medium">{speaker.title}</p>
                <p className="text-gray-600 text-sm">{speaker.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {speaker.bio}
                </p>
                
                {/* Expertise Tags */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Sessions */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Speaking Sessions:</h4>
                  <ul className="space-y-1">
                    {speaker.sessions.map((session, sessionIndex) => (
                      <li key={sessionIndex} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {session}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-3 pt-3 border-t border-gray-100">
                  {speaker.social.linkedin && (
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </Button>
                  )}
                  {speaker.social.twitter && (
                    <Button variant="ghost" size="sm" className="p-2">
                      <Twitter className="h-4 w-4 text-blue-400" />
                    </Button>
                  )}
                  {speaker.social.website && (
                    <Button variant="ghost" size="sm" className="p-2">
                      <Globe className="h-4 w-4 text-gray-600" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Speak at Our Conference?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for expert speakers to share their knowledge and insights 
            with the critical infrastructure security community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-blue-700 hover:bg-blue-800">
              Submit Speaker Proposal
            </Button>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
              View Speaking Guidelines
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeakersPage