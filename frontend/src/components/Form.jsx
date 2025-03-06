import React, { useState } from "react";
import eventsData from "../data/events"; // Import events data

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    eventName: "",
    teamName: "NA",
    teammates: "NA",
  });

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  // Extract all event names from categories
  const allEvents = Object.values(eventsData).flat().map(event => event.name);

  // Handle input changes and filtering
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "eventName") {
      setShowDropdown(true);

      if (value === "") {
        setFilteredEvents(allEvents);
      } else {
        const searchQuery = value.toLowerCase();
        const matchedEvents = allEvents.filter(event =>
          event.toLowerCase().includes(searchQuery)
        );
        setFilteredEvents(matchedEvents);
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle input focus (show all events initially)
  const handleFocus = () => {
    setShowDropdown(true);
    setFilteredEvents(allEvents);
  };

  // Handle event selection from dropdown
  const handleEventSelect = (eventName) => {
    if (eventName == "BGMI") {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        eventName: "",
        teamName: "NA",
        teammates: "NA",
      })
      alert("Sloat is Full");
    }else {
    setFormData({ ...formData, eventName });
    setShowDropdown(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader when form is submitted

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/event/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            college: formData.college,
            eventName: formData.eventName,
            teamName: formData.teamName,
            teamMates: formData.teammates, // Changed 'teammates' to 'teamMates' to match API
          }),
        }
      );

      if (response.ok) {
        alert("Registration Successful!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          college: "",
          eventName: "",
          teamName: "NA",
          teammates: "NA",
        });
      } else {
        alert("Something went wrong. Try again!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    } finally {
      setLoading(false); // Hide loader after response
    }
  };

  return (
    <div className="bg-amber-100 text-amber-900 bg-center pt-24 pb-12 px-2 h-full">
      <div className="flex items-center justify-center">
        <div className="bg-orange-200 shadow-2xl p-6 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Register for Event
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              name="college"
              placeholder="College"
              value={formData.college}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />

            {/* Searchable Dropdown for Event Name */}
            <div className="relative">
              <input
                type="text"
                name="eventName"
                placeholder="Search or Select Event"
                value={formData.eventName}
                onChange={handleChange}
                onFocus={handleFocus} // Show all events when focused
                className="w-full p-2 border rounded-md"
                autoComplete="off"
              />
              {showDropdown && filteredEvents.length > 0 && (
                <ul className="absolute bg-white border rounded-md w-full mt-1 shadow-lg max-h-40 overflow-y-auto z-10">
                  {filteredEvents.map((event, index) => (
                    <li
                      key={index}
                      onClick={() => handleEventSelect(event)}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                    >
                      {event}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              type="text"
              name="teamName"
              placeholder="Team Name (if applicable)"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              name="teammates"
              placeholder="Teammates (comma separated)"
              value={formData.teammates}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />

            {/* Submit button with loader */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition flex items-center justify-center"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
