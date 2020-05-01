import * as actions from '../../actions';
import * as c from '../../actions/ActionTypes';

describe('help queue actions', () => {

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({ beer: "Bitburger", dateTapped: "1/2/20", brand: "Bitburger", style: "Pilsener", pricePerPint: "$8.00", alcoholContent: "6.0%", pintsLeft: 100, id: 1 })).toEqual({
      type: c.ADD_KEG,
      beer: "Bitburger",
      dateTapped: "1/2/20",
      brand: "Bitburger",
      style: "Pilsener",
      pricePerPint: "$8.00",
      alcoholContent: "6.0%",
      pintsLeft: 100,
      id: 1
    });
  });

});