import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import events from '../data/events';
import { Link } from 'react-router-dom';

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className='bg-[url(/events.png)] bg-no-repeat bg-cover bg-center pt-16 text-amber-700 font-semibold bg-fixed'>
      <div className='flex flex-col items-center text-center px-20'>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for an event..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 mt-4 border border-gray-300 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-amber-600 absolute md:right-0 md:mr-4"
        />

        {Object.entries(events).map(([category, categoryEvents]) => {
          // Filter events based on search query
          const filteredEvents = categoryEvents.filter((event) =>
            event.name.toLowerCase().includes(searchQuery)
          );

          // Hide category if no events match
          if (filteredEvents.length === 0) return null;

          return (
            <div key={category} className='p-8'>
              <h2 className='text-4xl py-12 font-medium'>{category} Events</h2>
              <div className='flex flex-wrap items-center gap-20 justify-center'>
                {filteredEvents.map((event) => (
                  <Link to={`/event/${event.id}`} key={event.id}>
                    <EventCard
                      eventName={event.name}
                      imageUrl={event.image}
                      coordinator={event.coordinators[0].name}
                      contact={event.coordinators[0].contact}
                    />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
