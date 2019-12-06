import React from "react";

import Card from "../../shared/components/UIElements/Card";

import "./PlaceList.css";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found. Add a new one</h2>
          <button>Share a place</button>
        </Card>
      </div>
    );
  }

  return (
    <u1 className="place-list">
      {props.items.map(place => (
        <PlaceItem 
            key={place.id} 
            id={place.id} 
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creatorId}
            coordinates={place.location} 
            />
      ))}
    </u1>
  );
};

export default PlaceList;
