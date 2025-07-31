import { useState } from 'react'
import { Download, FileText, Video, BookOpen, Search, Filter, ExternalLink, Calendar, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'whitepapers', name: 'Whitepapers' },
    { id: 'presentations', name: 'Presentations' },
    { id: 'videos', name: 'Videos' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'tools', name: 'Tools' },
    { id: 'reports', name: 'Reports' }
  ]

  const resources = [
    {
      id: 1,
      title: 'CISA Critical Infrastructure Security Framework 2024',
      description: 'Comprehensive framework for securing critical infrastructure across all 16 sectors.',
      type: 'framework',
      category: 'frameworks',
      format: 'PDF',
      size: '2.4 MB',
      date: '2024-01-15',
      author: 'CISA',
      downloads: 1250,
      featured: true,
      sectors: ['All Sectors']
    },
    {
      id: 2,
      title: 'Energy Sector Cybersecurity Threats Report',
      description: 'Analysis of current and emerging cybersecurity threats targeting energy infrastructure.',
      type: 'report',
      category: 'reports',
      format: 'PDF',
      size: '1.8 MB',
      date: '2024-02-01',
      author: 'Dr. Sarah Chen',
      downloads: 890,
      featured: true,
      sectors: ['Energy']
    },
    {
      id: 3,
      title: 'Smart Grid Security Implementation Guide',
      description: 'Step-by-step guide for implementing cybersecurity measures in smart grid systems.',
      type: 'whitepaper',
      category: 'whitepapers',
      format: 'PDF',
      size: '3.1 MB',
      date: '2024-01-20',
      author: 'Michael Rodriguez',
      downloads: 675,
      featured: false,
      sectors: ['Energy']
    },
    {
      id: 4,
      title: 'Financial Services Cyber Resilience Keynote',
      description: 'Keynote presentation on building cyber resilience in financial services.',
      type: 'presentation',
      category: 'presentations',
      format: 'PPTX',
      size: '15.2 MB',
      date: '2023-03-16',
      author: 'Jennifer Walsh',
      downloads: 445,
      featured: false,
      sectors: ['Financial Services']
    },
    {
      id: 5,
      title: 'Healthcare Cybersecurity Best Practices Video',
      description: 'Comprehensive video guide on cybersecurity best practices for healthcare organizations.',
      type: 'video',
      category: 'videos',
      format: 'MP4',
      size: '125 MB',
      date: '2023-11-10',
      author: 'Robert Kim',
      downloads: 320,
      featured: false,
      sectors: ['Healthcare']
    },
    {
      id: 6,
      title: 'Transportation Security Assessment Tool',
      description: 'Interactive tool for assessing cybersecurity risks in transportation systems.',
      type: 'tool',
      category: 'tools',
      format: 'Web App',
      size: 'Online',
      date: '2024-01-05',
      author: 'Transportation Security Team',
      downloads: 580,
      featured: true,
      sectors: ['Transportation']
    },
    {
      id: 7,
      title: 'Manufacturing OT Security Whitepaper',
      description: 'Detailed analysis of operational technology security in manufacturing environments.',
      type: 'whitepaper',
      category: 'whitepapers',
      format: 'PDF',
      size: '2.7 MB',
      date: '2023-12-15',
      author: 'Manufacturing Security Expert',
      downloads: 390,
      featured: false,
      sectors: ['Manufacturing']
    },
    {
      id: 8,
      title: 'Water Systems SCADA Security Guide',
      description: 'Security guidelines for SCADA systems in water and wastewater treatment facilities.',
      type: 'framework',
      category: 'frameworks',
      format: 'PDF',
      size: '1.9 MB',
      date: '2024-02-10',
      author: 'Water Security Expert',
      downloads: 275,
      featured: false,
      sectors: ['Water Systems']
    },
    {
      id: 9,
      title: 'Communications Infrastructure Threat Landscape',
      description: 'Comprehensive report on threats facing communications infrastructure.',
      type: 'report',
      category: 'reports',
      format: 'PDF',
      size: '2.2 MB',
      date: '2024-01-25',
      author: 'Lisa Park',
      downloads: 510,
      featured: false,
      sectors: ['Communications']
    },
    {
      id: 10,
      title: 'Zero Trust Architecture Implementation',
      description: 'Workshop presentation on implementing zero trust architecture in critical infrastructure.',
      type: 'presentation',
      category: 'presentations',
      format: 'PPTX',
      size: '18.5 MB',
      date: '2023-03-17',
      author: 'Amanda Foster',
      downloads: 720,
      featured: true,
      sectors: ['All Sectors']
    }
  ]

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return Video
      case 'presentation': return FileText
      case 'tool': return ExternalLink
      default: return FileText
    }
  }

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'framework': return 'bg-blue-100 text-blue-800'
      case 'report': return 'bg-green-100 text-green-800'
      case 'whitepaper': return 'bg-purple-100 text-purple-800'
      case 'presentation': return 'bg-orange-100 text-orange-800'
      case 'video': return 'bg-red-100 text-red-800'
      case 'tool': return 'bg-teal-100 text-teal-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredResources = resources.filter(resource => resource.featured)

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Access a comprehensive library of cybersecurity resources, including whitepapers, 
            presentations, frameworks, and tools from industry experts and conference speakers.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => {
              const IconComponent = getResourceIcon(resource.type)
              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-blue-700" />
                        <Badge className={getResourceColor(resource.type)}>
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {resource.downloads} downloads
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <User className="h-3 w-3" />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(resource.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <FileText className="h-3 w-3" />
                        <span>{resource.format} • {resource.size}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.sectors.map((sector, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {sector}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-blue-700 hover:bg-blue-800" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search resources, authors, topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-xs"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* All Resources */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              All Resources ({filteredResources.length})
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>Showing {filteredResources.length} of {resources.length} resources</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredResources.map((resource) => {
              const IconComponent = getResourceIcon(resource.type)
              return (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      {/* Resource Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <IconComponent className="h-5 w-5 text-blue-700" />
                          <Badge className={getResourceColor(resource.type)}>
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </Badge>
                          {resource.featured && (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {resource.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{resource.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(resource.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-3 w-3" />
                            <span>{resource.format} • {resource.size}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-3 w-3" />
                            <span>{resource.downloads} downloads</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {resource.sectors.map((sector, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {sector}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Download Button */}
                      <div className="flex-shrink-0">
                        <Button className="bg-blue-700 hover:bg-blue-800">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-2">No resources found</p>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>

        {/* Resource Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Resource Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => {
              const count = resources.filter(r => r.category === category.id).length
              return (
                <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <FileText className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-600">{count} resources</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Contribute to Our Resource Library
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have valuable cybersecurity resources to share with the community? 
            We welcome contributions from industry experts and researchers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-blue-700 hover:bg-blue-800">
              Submit a Resource
            </Button>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
              Resource Guidelines
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage