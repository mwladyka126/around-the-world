/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter((trip) => pattern.test(trip.name));
  }

  // filter by duration
  if (filters.duration) {
    const minDuration = filters.duration.from;
    const maxDuration = filters.duration.to;
    
    output=output.filter((trip)=>trip.days>= minDuration && trip.days <= maxDuration);
  }
  // filter by tags
  if (filters.tags.length>0){
    output=output.filter( trip=> filters.tags.every((tag) => trip.tags.includes(tag)));
  }

  //sort by cost descending (most expensive goes first)
  output = output.sort((tripA, tripB) => { parseFloat(tripB.cost.replace('$', '').replace(',', '')) - parseFloat(tripA.cost.replace('$', '').replace(',', ''));
  });

  return output;
};
  // filter trips by tripId
export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter((trip) => trip.id == tripId);

  return filtered.length ? filtered[0] : { error: true };
};

// filter trips by countryCode
export const getTripsForCountry = ({ trips }, countryCode) => {
  
  const filtered = trips.filter((trip) => trip.country.code == countryCode);

  return filtered.length ? filtered : [{ error: true }];
};


