export default (state = {}, action) => {
  const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
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
  case 'DELETE_KEG':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};
