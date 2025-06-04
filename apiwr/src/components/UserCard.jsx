import React from "react";

const UserCard = (props) => {
  const { name, phone, location } = props.data || {};
  
  if (!name || !location) {
    return null; // Or show a loading state
  }

  return (
    <div className="user-card">
      <h3>{name.first}</h3>
      <p>{phone}</p>
      <p>{location.city}, {location.state}</p>
    </div>
  );
};

export default UserCard;
