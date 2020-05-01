import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id } = action;
  switch (action.type) {
  case c.GET_KEG: 
    const thisKeg = {
      beer: beer,
      dateTapped: dateTapped,
      brand: brand,
      style: style,
      pricePerPint: pricePerPint,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
      }    
      return thisKeg;
      case c.NO_KEG:
        return null;
      default:
        return state;
      }
  }