import { useState } from 'react'
import { Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const AgendaPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTrack, setSelectedTrack] = useState('all')

  const tracks = [
    { id: 'all', name: 'All Sessions', color: 'bg-gray-100 text-gray-800' },
    { id: 'energy', name: 'Energy', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'finance', name: 'Financial Services', color: 'bg-green-100 text-green-800' },
    { id: 'healthcare', name: 'Healthcare', color: 'bg-red-100 text-red-800' },
    { id: 'transport', name: 'Transportation', color: 'bg-blue-100 text-blue-800' },
    { id: 'government', name: 'Government', color: 'bg-purple-100 text-purple-800' },
    { id: 'manufacturing', name: 'Manufacturing', color: 'bg-orange-100 text-orange-800' }
  ]

  const agenda = {
    'October 3': [
      {
        time: '8:00 AM - 9:00 AM',
        title: 'Registration & Welcome Coffee',
        type: 'networking',
        location: 'NSU Innovation Center Lobby',
        track: 'all',
        speaker: null,
        description: 'Check-in, networking, and continental breakfast'
      },
      {
        time: '9:00 AM - 10:00 AM',
        title: 'Opening Keynote: The State of Critical Infrastructure Security',
        type: 'keynote',
        location: 'Main Auditorium',
        track: 'all',
        speaker: 'Dr. Sarah Chen, DHS',
        description: 'Overview of current threats and government initiatives to protect critical infrastructure'
      },
      {
        time: '10:15 AM - 11:00 AM',
        title: 'Energy Sector Deep Dive: Smart Grid Security Challenges',
        type: 'session',
        location: 'Conference Room A',
        track: 'energy',
        speaker: 'Michael Rodriguez, American Electric Power',
        description: 'Exploring cybersecurity challenges in modern smart grid implementations'
      },
      {
        time: '11:15 AM - 12:00 PM',
        title: 'Financial Services: Digital Banking Threat Landscape',
        type: 'session',
        location: 'Conference Room A',
        track: 'finance',
        speaker: 'Jennifer Walsh, JPMorgan Chase',
        description: 'Current and emerging threats to digital banking infrastructure'
      },
      {
        time: '12:00 PM - 1:00 PM',
        title: 'Networking Lunch',
        type: 'networking',
        location: 'Innovation Center Atrium',
        track: 'all',
        speaker: null,
        description: 'Lunch and networking with sponsors and attendees'
      },
      {
        time: '1:00 PM - 1:45 PM',
        title: 'Healthcare Cybersecurity: Medical Device Security',
        type: 'session',
        location: 'Conference Room A',
        track: 'healthcare',
        speaker: 'Dr. Robert Kim, Kaiser Permanente',
        description: 'Securing medical devices and healthcare infrastructure'
      },
      {
        time: '2:00 PM - 2:45 PM',
        title: 'Transportation Security: Connected Vehicle Threats',
        type: 'session',
        location: 'Conference Room A',
        track: 'transport',
        speaker: 'Lisa Martinez, Transportation Security Expert',
        description: 'Cybersecurity challenges in connected and autonomous vehicles'
      },
      {
        time: '3:00 PM - 4:00 PM',
        title: 'Panel: Nation-State Actors and Critical Infrastructure',
        type: 'panel',
        location: 'Main Auditorium',
        track: 'all',
        speaker: 'Multiple Security Experts',
        description: 'Discussion on nation-state threats across all 16 sectors'
      },
      {
        time: '4:15 PM - 5:00 PM',
        title: 'Workshop: Incident Response for Critical Infrastructure',
        type: 'workshop',
        location: 'Conference Room B',
        track: 'all',
        speaker: 'Dr. James Thompson, MITRE',
        description: 'Hands-on workshop on incident response procedures'
      },
      {
        time: '5:00 PM - 5:30 PM',
        title: 'Closing Remarks & Next Steps',
        type: 'keynote',
        location: 'Main Auditorium',
        track: 'all',
        speaker: 'Conference Organizers',
        description: 'Key takeaways and future directions for critical infrastructure security'
      },
      {
        time: '5:30 PM - 7:00 PM',
        title: 'Networking Reception',
        type: 'networking',
        location: 'Innovation Center Terrace',
        track: 'all',
        speaker: null,
        description: 'Cocktails, networking, and sponsor showcase'
      }
    ]
  }

  const getSessionTypeColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-blue-100 text-blue-800'
      case 'panel': return 'bg-purple-100 text-purple-800'
      case 'session': return 'bg-green-100 text-green-800'
      case 'workshop': return 'bg-orange-100 text-orange-800'
      case 'networking': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredSessions = (sessions: any[]) => {
    return sessions.filter(session => {
      const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (session.speaker && session.speaker.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesTrack = selectedTrack === 'all' || session.track === selectedTrack
      return matchesSearch && matchesTrack
    })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference Agenda
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            A comprehensive day of intensive learning, networking, and collaboration focused on 
            critical infrastructure security across all 16 critical infrastructure sectors.
          </p>
          
          {/* Event Info */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-700" />
              <span className="text-lg font-medium">October 3, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-700" />
              <span className="text-lg font-medium">NSU Innovation Center</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-700" />
              <span className="text-lg font-medium">250 Attendees</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search sessions, speakers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Track Filter */}
            <div className="flex flex-wrap gap-2">
              {tracks.map((track) => (
                <Button
                  key={track.id}
                  variant={selectedTrack === track.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTrack(track.id)}
                  className="text-xs"
                >
                  {track.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Agenda Schedule */}
        <Tabs defaultValue="October 3" className="w-full">
          <TabsList className="grid w-full grid-cols-1 mb-8">
            <TabsTrigger value="October 3" className="text-sm">
              October 3, 2024 - Full Day Schedule
            </TabsTrigger>
          </TabsList>

          {Object.entries(agenda).map(([day, sessions]) => (
            <TabsContent key={day} value={day} className="space-y-4">
              {filteredSessions(sessions).map((session, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      {/* Time */}
                      <div className="flex items-center space-x-2 md:w-48 flex-shrink-0">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="font-medium text-gray-900">{session.time}</span>
                      </div>
                      
                      {/* Session Details */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge className={getSessionTypeColor(session.type)}>
                            {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                          </Badge>
                          {session.track !== 'all' && (
                            <Badge variant="outline" className="text-xs">
                              {tracks.find(t => t.id === session.track)?.name}
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {session.title}
                        </h3>
                        
                        {session.speaker && (
                          <p className="text-blue-700 font-medium mb-2">
                            {session.speaker}
                          </p>
                        )}
                        
                        <p className="text-gray-600 text-sm mb-3">
                          {session.description}
                        </p>
                        
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredSessions(sessions).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No sessions match your current filters.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Download CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Download Full Agenda
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the complete conference agenda with detailed session descriptions, 
            speaker bios, and venue maps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-blue-700 hover:bg-blue-800">
              Download PDF Agenda
            </Button>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
              Add to Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgendaPage