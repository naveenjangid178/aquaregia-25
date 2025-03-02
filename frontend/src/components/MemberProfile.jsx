import React from 'react'

const MemberProfile = ({ imageUrl, name, position, phone, twitter, linkedin, whatsapp }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-6 m-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <div className="">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
      <div>
        <a href={phone}>Phone</a>
        <a href={linkedin}>linkedin</a>
        <a href={twitter}>twitter</a>
        <a href={whatsapp}>whatsapp</a>
      </div>
    </div>
  )
}

export default MemberProfile