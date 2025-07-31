import { useState } from 'react'
import { Check, Star, Users, Calendar, MapPin, CreditCard, Shield, AlertCircle, Gift } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'

const TicketsPage = () => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)

  const ticketTypes = [
    {
      id: 'early-bird',
      name: 'Early Bird',
      price: 599,
      originalPrice: 799,
      badge: 'Save $200',
      badgeColor: 'bg-green-100 text-green-800',
      description: 'Limited time offer - ends February 1st',
      features: [
        'Access to all conference sessions',
        'Welcome reception and networking lunch',
        'Conference materials and swag bag',
        'Digital access to presentations',
        'Certificate of attendance',
        'Networking opportunities'
      ],
      popular: false,
      available: true,
      deadline: 'February 1, 2024'
    },
    {
      id: 'standard',
      name: 'Standard Registration',
      price: 799,
      originalPrice: null,
      badge: 'Most Popular',
      badgeColor: 'bg-blue-100 text-blue-800',
      description: 'Full conference access with all benefits',
      features: [
        'Access to all conference sessions',
        'Welcome reception and networking lunch',
        'Conference materials and swag bag',
        'Digital access to presentations',
        'Certificate of attendance',
        'Networking opportunities',
        'Access to mobile app'
      ],
      popular: true,
      available: true,
      deadline: 'March 10, 2024'
    },
    {
      id: 'vip',
      name: 'VIP Experience',
      price: 1299,
      originalPrice: null,
      badge: 'Premium',
      badgeColor: 'bg-purple-100 text-purple-800',
      description: 'Premium experience with exclusive access',
      features: [
        'All Standard Registration benefits',
        'VIP seating at all sessions',
        'Exclusive VIP networking reception',
        'Private lunch with keynote speakers',
        'Premium conference materials',
        'Dedicated VIP lounge access',
        'Priority access to workshops',
        'One-on-one networking sessions'
      ],
      popular: false,
      available: true,
      deadline: 'March 10, 2024'
    },
    {
      id: 'student',
      name: 'Student/Academic',
      price: 299,
      originalPrice: null,
      badge: '60% Off',
      badgeColor: 'bg-orange-100 text-orange-800',
      description: 'Special pricing for students and academics',
      features: [
        'Access to all conference sessions',
        'Welcome reception and networking lunch',
        'Digital access to presentations',
        'Certificate of attendance',
        'Student networking opportunities',
        'Career fair access'
      ],
      popular: false,
      available: true,
      deadline: 'March 10, 2024',
      requirements: 'Valid student ID or academic affiliation required'
    },
    {
      id: 'group',
      name: 'Group Registration',
      price: 649,
      originalPrice: 799,
      badge: '5+ People',
      badgeColor: 'bg-teal-100 text-teal-800',
      description: 'Special pricing for groups of 5 or more',
      features: [
        'All Standard Registration benefits',
        'Group discount pricing',
        'Dedicated group coordinator',
        'Group seating arrangements',
        'Bulk invoice processing',
        'Group networking session'
      ],
      popular: false,
      available: true,
      deadline: 'March 10, 2024',
      requirements: 'Minimum 5 registrations required'
    }
  ]

  const addOns = [
    {
      id: 'workshop',
      name: 'Pre-Conference Workshop',
      price: 199,
      description: 'Full-day hands-on cybersecurity workshop (March 14)',
      icon: Users
    },
    {
      id: 'recordings',
      name: 'Session Recordings',
      price: 99,
      description: 'Access to all session recordings for 1 year',
      icon: Calendar
    },
    {
      id: 'materials',
      name: 'Premium Materials Package',
      price: 49,
      description: 'Physical conference materials and exclusive resources',
      icon: Gift
    }
  ]

  const eventDetails = [
    { icon: Calendar, label: 'March 15-17, 2024' },
    { icon: MapPin, label: 'Washington Convention Center, DC' },
    { icon: Users, label: '500+ Expected Attendees' },
    { icon: Shield, label: 'All 16 CISA Sectors Covered' }
  ]

  const handleTicketSelect = (ticketId: string) => {
    setSelectedTicket(ticketId)
  }

  const handlePurchase = () => {
    // In a real application, this would redirect to payment processing
    alert('Redirecting to secure payment processing...')
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference Tickets
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Secure your spot at the premier critical infrastructure security conference. 
            Choose the registration option that best fits your needs.
          </p>
          
          {/* Event Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {eventDetails.map((detail, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <detail.icon className="h-6 w-6 text-blue-700 mb-2" />
                <span className="text-sm font-medium text-gray-900">{detail.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 max-w-4xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Registration Required:</strong> You must complete registration before purchasing tickets. 
            Haven't registered yet? <a href="/registration" className="text-blue-700 hover:underline">Register here first</a>.
          </AlertDescription>
        </Alert>

        {/* Ticket Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {ticketTypes.map((ticket) => (
            <Card 
              key={ticket.id} 
              className={`relative hover:shadow-lg transition-all duration-300 cursor-pointer ${
                selectedTicket === ticket.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
              } ${ticket.popular ? 'border-blue-500 border-2' : ''}`}
              onClick={() => handleTicketSelect(ticket.id)}
            >
              {ticket.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-2">
                  <Badge className={ticket.badgeColor}>
                    {ticket.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  {ticket.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${ticket.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    ${ticket.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{ticket.description}</p>
                {ticket.deadline && (
                  <p className="text-red-600 text-xs font-medium">
                    Registration closes: {ticket.deadline}
                  </p>
                )}
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {ticket.requirements && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <p className="text-xs text-yellow-800">
                      <strong>Requirements:</strong> {ticket.requirements}
                    </p>
                  </div>
                )}
                
                <Button 
                  className={`w-full ${
                    selectedTicket === ticket.id 
                      ? 'bg-blue-700 hover:bg-blue-800' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleTicketSelect(ticket.id)
                  }}
                >
                  {selectedTicket === ticket.id ? 'Selected' : 'Select This Ticket'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Optional Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <Card key={addon.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <addon.icon className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-2">${addon.price}</p>
                  <p className="text-sm text-gray-600 mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Purchase Section */}
        {selectedTicket && (
          <div className="max-w-2xl mx-auto">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-blue-700" />
                  <span>Complete Your Purchase</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Selected Ticket:</span>
                    <span className="font-bold">
                      {ticketTypes.find(t => t.id === selectedTicket)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Price:</span>
                    <span className="font-bold text-2xl">
                      ${ticketTypes.find(t => t.id === selectedTicket)?.price}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <Button 
                      onClick={handlePurchase}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-lg py-3"
                    >
                      Proceed to Secure Payment
                    </Button>
                    <p className="text-xs text-gray-600 text-center mt-2">
                      Secure payment processing powered by Stripe. 
                      Your payment information is encrypted and secure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I get a refund?</h3>
                <p className="text-sm text-gray-600">
                  Full refunds are available until March 1st. After that, 
                  a 50% refund is available until March 10th.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What's included in the ticket?</h3>
                <p className="text-sm text-gray-600">
                  All tickets include access to sessions, networking events, 
                  meals, and conference materials as listed in each tier.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I transfer my ticket?</h3>
                <p className="text-sm text-gray-600">
                  Yes, tickets can be transferred to another person up to 
                  48 hours before the event starts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is there group pricing?</h3>
                <p className="text-sm text-gray-600">
                  Yes, we offer special group rates for 5 or more attendees 
                  from the same organization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Our registration team is here to help with any questions about tickets or pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
            <span>📧 tickets@cisaconference.org</span>
            <span>📞 +1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketsPage