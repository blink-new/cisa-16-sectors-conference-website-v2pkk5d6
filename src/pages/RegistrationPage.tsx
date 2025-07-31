import { useState } from 'react'
import { User, Mail, Phone, Building, MapPin, Shield, Check, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription } from '@/components/ui/alert'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    title: '',
    sector: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    dietaryRestrictions: '',
    accessibilityNeeds: '',
    emergencyContact: '',
    emergencyPhone: '',
    marketingConsent: false,
    termsAccepted: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const sectors = [
    'Energy',
    'Water and Wastewater Systems',
    'Transportation',
    'Communications',
    'Manufacturing',
    'Healthcare and Public Health',
    'Financial Services',
    'Food and Agriculture',
    'Government Facilities',
    'Defense Industrial Base',
    'Information Technology',
    'Critical Manufacturing',
    'Dams',
    'Emergency Services',
    'Nuclear Reactors, Materials, and Waste',
    'Other'
  ]

  const benefits = [
    'Access to all conference sessions and workshops',
    'Networking opportunities with industry leaders',
    'Conference materials and resources',
    'Welcome reception and networking lunch',
    'Digital access to presentation materials',
    'Certificate of attendance',
    'One year access to conference recordings'
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for registering for the CYBERMinds Critical Infrastructure Conference. 
              You will receive a confirmation email shortly with your registration details 
              and next steps.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Check your email for confirmation and payment instructions</li>
                <li>• Complete your ticket purchase to secure your spot</li>
                <li>• Add the conference dates to your calendar</li>
                <li>• Follow us on social media for updates</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/tickets" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Complete Ticket Purchase
              </a>
              <a href="/agenda" className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View Conference Agenda
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference Registration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Register for the CYBERMinds Critical Infrastructure Conference and join 
            cybersecurity professionals from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-700" />
                  <span>Registration Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Professional Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="organization">Organization *</Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => handleInputChange('organization', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="title">Job Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="sector">Primary Sector of Interest *</Label>
                      <Select onValueChange={(value) => handleInputChange('sector', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary sector" />
                        </SelectTrigger>
                        <SelectContent>
                          {sectors.map((sector) => (
                            <SelectItem key={sector} value={sector}>
                              {sector}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Address Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State/Province</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                          <Input
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Special Requirements
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                        <Textarea
                          id="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                          placeholder="Please describe any dietary restrictions or allergies"
                          rows={2}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="accessibilityNeeds">Accessibility Needs</Label>
                        <Textarea
                          id="accessibilityNeeds"
                          value={formData.accessibilityNeeds}
                          onChange={(e) => handleInputChange('accessibilityNeeds', e.target.value)}
                          placeholder="Please describe any accessibility accommodations needed"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Emergency Contact
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          value={formData.emergencyPhone}
                          onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consent and Terms */}
                  <div className="border-t pt-6 space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => handleInputChange('marketingConsent', checked as boolean)}
                      />
                      <Label htmlFor="marketingConsent" className="text-sm leading-relaxed">
                        I consent to receive marketing communications about future conferences 
                        and related events. You can unsubscribe at any time.
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => handleInputChange('termsAccepted', checked as boolean)}
                        required
                      />
                      <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                        I accept the <a href="#" className="text-blue-700 hover:underline">Terms and Conditions</a> 
                        and <a href="#" className="text-blue-700 hover:underline">Privacy Policy</a> *
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-700 hover:bg-blue-800"
                    disabled={isSubmitting || !formData.termsAccepted}
                  >
                    {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Registration Benefits */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-700" />
                  <span>Registration Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Registration is required before purchasing tickets. 
                After completing this form, you'll receive instructions for ticket purchase.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>conferences@cybermindsinstitute.org</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>+1 (954) 559-6203</span>
                  </div>
                  <p className="text-gray-600 mt-3">
                    Our registration team is available Monday-Friday, 9 AM - 5 PM EST 
                    to assist with any questions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage