export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const getKeg = id => ({
  type: 'GET_KEG',
  id
})

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const toList = () => ({
  type: 'TO_LIST'
});

export const addKeg = (keg) => {
  const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id } = keg;
  return {
    type: 'ADD_KEG',
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

