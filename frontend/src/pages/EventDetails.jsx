import React from "react";
import { Link, useParams } from "react-router-dom";
import events from "../data/events";

const EventDetails = () => {
  const { eventId } = useParams();

  const event = Object.values(events)
    .flat()
    .find((e) => e.id === eventId);

  if (!event) {
    return <h2 className="text-center text-red-500 text-xl">Event not found!</h2>;
  }

  return (
    <div className="bg-[url(/eventDetail.webp)] filter bg-no-repeat bg-cover bg-center bg-fixed text-amber-100 h-full p-6 pt-24 w-full relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between gap-4">
        <div className="md:w-1/2 w-full">
          <img src={event.image} alt={event.name} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl font-bold mt-4">{event.name}</h1>
          <p className="text-lg mt-2">{event.description}</p>

          <h2 className="text-2xl font-semibold mt-4">Rules</h2>
          <h3 className="text-xl font-semibold mt-2">General Rules</h3>
          <ul className="list-disc list-inside">
            {event.rules.general.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>

          {/* Check if rounds exist and render them */}
          {event.rules.rounds && Object.entries(event.rules.rounds).length > 0 ? (
            Object.entries(event.rules.rounds).map(([round, rules], index) => (
              rules && rules.length > 0 && (
                <div key={index}>
                  <h4 className="text-lg font-semibold mt-2">{round.replace(/round/, "Round ")}</h4>
                  <ul className="list-disc list-inside">
                    {rules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )
            ))
          ) : (<p></p>)}

          <h2 className="text-2xl font-semibold mt-4">Coordinators</h2>
          <ul className="list-disc list-inside">
            {event.coordinators.map((coordinator, index) => (
              <li key={index}>{coordinator.name} - {coordinator.contact}</li>
            ))}
          </ul>
      <button className="mt-6 px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition cursor-pointer">
        <Link to="/register">Register Now</Link>
      </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
