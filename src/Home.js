import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

export default function Component() {
  const [selectedCity, setSelectedCity] = useState('')

  const location = ['Mumbai', 'Amravati', 'Satara', 'Pune', 'Kalyan']

  const grievances = [
    { id: 1, grievance: 'Pothole on Main St', contact: '555-0101', location: 'Downtown', category: 'Infrastructure' },
    { id: 2, grievance: 'Noise complaint', contact: '555-0102', location: 'Residential Area', category: 'Noise' },
    { id: 3, grievance: 'Broken streetlight', contact: '555-0103', location: 'Uptown', category: 'Infrastructure' },
    { id: 4, grievance: 'Garbage collection delay', contact: '555-0104', location: 'Suburbs', category: 'Sanitation' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400">
   
      <div className="container mx-auto my-8 flex justify-center">
        {/* <div className="w-60 h-60 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg"> */}
        <img
      src="/earth.png" // Replace this with the actual image URL
      alt="Logo"
      className="w-65 h-65 object-cover rounded-full"
    />
        {/* </div> */}
      </div>

      {/* City Dropdown */}
      <div className="container mx-auto my-8 flex justify-center">
        <div className="relative inline-block w-64">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="block appearance-none w-full bg-white bg-opacity-90 border border-blue-300 text-blue-900 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg transition duration-300"
          >
            <option value="">Select a city</option>
            {location.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700">
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Grievance Table */}
      {selectedCity && (
        <div className="container mx-auto my-8 px-4">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="py-3 px-4 text-left">Grievance</th>
                  <th className="py-3 px-4 text-left">Contact</th>
                  <th className="py-3 px-4 text-left">Location</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Click</th>
                </tr>
              </thead>
              <tbody>
                {grievances.map((item) => (
                  <tr key={item.id} className="border-b border-blue-200 hover:bg-blue-50 transition duration-300">
                    <td className="py-3 px-4">{item.grievance}</td>
                    <td className="py-3 px-4">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full shadow transition duration-300">
                        Contact
                      </button>
                    </td>
                    <td className="py-3 px-4">{item.location}</td>
                    <td className="py-3 px-4">{item.category}</td>
                    <td className="py-3 px-4">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full shadow transition duration-300">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-blue-900 bg-opacity-50 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024  Shahar Saath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}