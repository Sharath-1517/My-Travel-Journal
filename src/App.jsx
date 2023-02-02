import React from 'react'
import data from './components/data'
import Navbar from './components/Navbar'
import TravelCard from './components/TravelCard'

export default function App() {

  const travels = data.map(place => {

    return(
      <TravelCard 
        key={place.id}
        title = {place.title}
        location = {place.location}
        mapLink = {place.googleMapsUrl}
        stdate = {place.startDate}
        endate = {place.endDate}
        desc = {place.description}
        image = {place.imageUrl}
      />
    );

  });
  return (
    <div className="flex-col">
      <Navbar />
      <section className="all-travels">
        {travels}
      </section>
    </div>
  )
}
