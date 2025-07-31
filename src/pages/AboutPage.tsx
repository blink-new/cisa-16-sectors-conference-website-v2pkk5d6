import { Shield, Users, Target, Award, Globe, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the protection of critical infrastructure through education, collaboration, and innovation.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a strong network of cybersecurity professionals dedicated to infrastructure protection.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Addressing cybersecurity challenges that affect national and international security.'
    },
    {
      icon: Heart,
      title: 'Public Service',
      description: 'Committed to serving the public interest through enhanced infrastructure security.'
    }
  ]

  const team = [
    {
      name: 'Dr. Elizabeth Harper',
      title: 'Conference Director',
      bio: 'Former CISA executive with 20+ years in critical infrastructure protection.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Mark Stevens',
      title: 'Program Chair',
      bio: 'Cybersecurity consultant specializing in industrial control systems.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Sarah Johnson',
      title: 'Industry Relations',
      bio: 'Expert in public-private partnerships and stakeholder engagement.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Dr. Michael Chang',
      title: 'Research Coordinator',
      bio: 'Academic researcher focused on emerging threats to critical infrastructure.',
      image: '/api/placeholder/200/200'
    }
  ]

  const stats = [
    { label: 'Years Running', value: '8', icon: Award },
    { label: 'Countries Represented', value: '25+', icon: Globe },
    { label: 'Industry Partners', value: '100+', icon: Users },
    { label: 'Alumni Network', value: '2,500+', icon: Heart }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Conference
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The CYBERMinds Critical Infrastructure Conference is the premier annual gathering 
            for cybersecurity professionals, government officials, and industry leaders 
            dedicated to protecting America's critical infrastructure.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To advance the security and resilience of America's critical infrastructure 
              by bringing together the brightest minds in cybersecurity, fostering collaboration 
              between public and private sectors, and sharing cutting-edge research and best practices 
              across all 16 critical infrastructure sectors.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
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

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <value.icon className="h-8 w-8 text-blue-700" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our History
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2016 in response to growing cybersecurity threats against 
                  critical infrastructure, our conference has evolved into the nation's 
                  premier forum for infrastructure security professionals.
                </p>
                <p>
                  What started as a small gathering of 100 government officials and 
                  industry experts has evolved into a focused one-day intensive event 
                  attracting 250 participants from across the nation.
                </p>
                <p>
                  Our conference has been instrumental in fostering public-private 
                  partnerships, sharing threat intelligence, and developing best 
                  practices that have strengthened America's critical infrastructure 
                  against cyber threats.
                </p>
                <p>
                  Each year, we continue to adapt our program to address emerging 
                  threats and technologies, ensuring our attendees stay at the 
                  forefront of critical infrastructure security.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Shield className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Conference Timeline Visualization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-blue-700 font-medium text-sm">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Over the years, our conference has made significant contributions 
              to critical infrastructure security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-300">Policy Recommendations Adopted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Research Papers Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-300">Public-Private Partnerships Formed</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our mission to protect America's critical infrastructure. 
            Whether you're a cybersecurity professional, researcher, or policy maker, 
            there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/registration" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Join Our Conference
            </a>
            <a href="mailto:conferences@cybermindsinstitute.org" className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage