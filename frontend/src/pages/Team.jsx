import React from 'react';
import { Link } from 'react-router-dom';
import { members } from '../data/teamMembers';

// MemberCard Component
const MemberCard = ({ member }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-transparent shadow-lg m-4">
      <img src={member.photo} alt={member.name} className="w-32 h-32 mx-auto mt-4 rounded-lg" />
      <div className="px-6 py-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <div className="mt-2 flex justify-center space-x-4">
          <Link to={member.socialMedia.facebook} className="text-blue-600 hover:text-blue-800">Facebook</Link>
          <Link to={member.socialMedia.twitter} className="text-blue-600 hover:text-blue-800">Twitter</Link>
          <Link to={member.socialMedia.linkedin} className="text-blue-600 hover:text-blue-800">LinkedIn</Link>
        </div>
      </div>
    </div>
  );
};

// MemberList Component
const Team = () => {
  return (
    <div className="flex flex-wrap justify-center bg-[url(./team.jpg)] bg-fixed bg-center bg-cover pt-20">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
};

export default Team;
