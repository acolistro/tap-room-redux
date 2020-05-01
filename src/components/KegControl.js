import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';

class KegControl extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id } = newKeg;
    const action = {
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
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { beer, dateTapped, brand, style, pricePerPint, alcoholContent, pintsLeft, id } = kegToEdit;
    const action = {
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
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handlePintSold = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    // let pintSoldButton = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
      buttonText = "Return to Keg List";
      } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
      } else {
        currentlyVisibleState = <KegList KegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
        buttonText = "Add Keg";
      }


      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
  }
}

TicketControl = connect()(TicketControl);

export default KegControl;