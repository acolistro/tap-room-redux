import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const getKeg = (keg) => {
  const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id } = keg;
  return {
    type: c.GET_KEG,
    beer: beer,
    dateTapped: dateTapped,
    brand: brand,
    style: style,
    pricePerPint: pricePerPint,
    alcoholContent: alcoholContent,
    pintsLeft: pintsLeft,
    id: id
  }
}

export const deselectKeg = () => ({
  type: c.NO_KEG
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id } = keg;
  return {
    type: c.ADD_KEG,
    beer: beer,
    dateTapped: dateTapped,
    brand: brand,
    style: style,
    pricePerPint: pricePerPint,
    alcoholContent: alcoholContent,
    pintsLeft: pintsLeft,
    id: id
  }
}

