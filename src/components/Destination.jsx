// eslint-disable-next-line no-unused-vars
import React, {useId} from 'react'
import data from '../data'
const Destination = () => {
  return (
    <div>
      {data.map(data1 => {
        return (
          <div key={data1.id}>
            <img src={data1.image} alt={data1.title} />
            <h3>{data1.location} <a href={data1.googleMapsUrl} target='_blank'>View on Google Map</a></h3>
            <h1>{data1.title}</h1>
            <h3>{data1.startDate} - {data1.endDate}</h3>
            <p>{data1.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Destination
