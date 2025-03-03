import React from 'react';
import { Link } from 'react-router-dom';
import { members } from '../data/teamMembers';
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

// MemberCard Component
const MemberCard = ({ member }) => {
  return (
    <div className="w-60 rounded overflow-hidden bg-transparent shadow-lg shadow-orange-900 m-4">
      <img src={member.photo} alt={member.name} className="w-full h-52 p-2 object-cover rounded-xl" />
      <div className="px-6 py-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <h4 className="text-sm font-semibold text-gray-800">{member.post}</h4>
        <div className="mt-2 flex justify-center space-x-8 items-center">
          <Link to={member.socialMedia.instagram} target='_blank'>
          <FaInstagram size={24} className='text-amber-900 hover:text-amber-700' />
          </Link>
          <Link to={member.socialMedia.phone} target='_blank'>
            <FaPhoneAlt size={21} className='text-amber-900 hover:text-amber-700' />
          </Link>
          <Link to={member.socialMedia.whatsapp} target='_blank'>
          <FaWhatsapp size={24} className='text-amber-900 hover:text-amber-700' />
          </Link>
        </div>
      </div>
    </div>
  );
};

// MemberList Component
const Team = () => {
  return (
    <div className="flex flex-wrap justify-center bg-[url(/team.jpg)] bg-fixed bg-center bg-cover pt-20 gap-12 md:px-12 px-2 pb-12">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
};

export default Team;
