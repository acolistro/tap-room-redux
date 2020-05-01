export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_KEG':
      const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id  } = action;
      return Object.assign({}, state, {
        [id]: {
          beer: beer,
          dateTapped: dateTapped,
          brand: brand,
          style: style,
          pricePerPint: pricePerPint,
          alcoholContent: alcoholContent,
          pintsLeft: pintsLeft,
          id: id
        }
      });
    default:
      return state;
    }
};
