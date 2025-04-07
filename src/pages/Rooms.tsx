
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import RoomCard from '@/components/RoomCard';
import { BedDouble, User, Users, Bath, Droplet } from 'lucide-react';

const rooms = [
  {
    id: 'deluxe-double-bath',
    name: 'Deluxe Double Room with Bath',
    type: 'Double Room',
    price: 45,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Bath'],
    size: '16 m²',
    available: 4
  },
  {
    id: 'deluxe-double-twin',
    name: 'Deluxe Double or Twin Room',
    type: 'Double/Twin Room',
    price: 55,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    capacity: 4,
    features: ['Garden View', 'Soundproofing', 'Extra Space'],
    size: '24 m²',
    available: 7
  },
  {
    id: 'deluxe-double-standard',
    name: 'Deluxe Double Room',
    type: 'Double Room',
    price: 50,
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    capacity: 2,
    features: ['Garden View', 'Flat-screen TV', 'Free WiFi'],
    size: '16 m²',
    available: 4
  },
  {
    id: 'deluxe-double-large',
    name: 'Deluxe Double Room (Large)',
    type: 'Double Room',
    price: 55,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Spacious'],
    size: '25 m²',
    available: 5
  },
  {
    id: 'budget-double',
    name: 'Budget Double Room',
    type: 'Double Room',
    price: 40,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    capacity: 2,
    features: ['Free WiFi', 'Breakfast Included'],
    size: '16 m²',
    available: 6
  },
  {
    id: 'deluxe-single',
    name: 'Deluxe Single Room',
    type: 'Single Room',
    price: 35,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    capacity: 1,
    features: ['Garden View', 'Free WiFi', 'Cozy'],
    size: '10 m²',
    available: 6
  },
  {
    id: 'deluxe-double-shower',
    name: 'Deluxe Double Room with Shower',
    type: 'Double Room',
    price: 45,
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    capacity: 2,
    features: ['Garden View', 'Free WiFi', 'Shower'],
    size: '16 m²',
    available: 6
  },
  {
    id: 'budget-double-premium',
    name: 'Premium Budget Double Room',
    type: 'Double Room',
    price: 42,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    capacity: 2,
    features: ['Garden View', 'Free WiFi'],
    size: '16 m²',
    available: 9
  },
];

const Rooms = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sasana-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Rooms" 
            subtitle="Experience comfort and style in our thoughtfully decorated rooms, each with its own unique character inspired by cities around the world."
            centered
          />
          <p className="text-center text-sasana-700 mt-4 font-medium">
            <span className="bg-sasana-200 px-3 py-1 rounded-full text-sm">
              5 people are viewing this property now
            </span>
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Room Information */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Room Information" 
              subtitle="All our rooms come with the following amenities and services."
            />
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-sasana-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-4">Room Amenities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Hairdryer</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Free Toiletries</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Flat-screen TV</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Outdoor Furniture</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Outdoor Dining Area</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Clothes Rack</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Soundproofing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Garden View</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sasana-800 mb-4">Services Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Daily Housekeeping</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Free WiFi</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Breakfast Included</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>24-hour Reception</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Free Parking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Laundry Service (extra charge)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sasana-600 mr-2"></div>
                      <span>Airport Shuttle (extra charge)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
