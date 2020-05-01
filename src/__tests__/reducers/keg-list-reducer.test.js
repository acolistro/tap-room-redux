import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    beer: "Bitburger",
    dateTapped: "1/2/20",
    brand: "Bitburger",
    style: "Pilsener",
    pricePerPint: "$8.00",
    alcoholContent: "6.0%",
    pintsLeft: 100,
    id: 1,
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id } = kegData;
    action = {
      type: 'ADD_KEG',
      beer: beer,
      dateTapped: dateTapped,
      brand: brand,
      style: style,
      pricePerPint: pricePerPint,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
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
  });

});