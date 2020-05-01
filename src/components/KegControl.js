import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.noKeg()
      dispatch(action)
    }  else {
      const action2 = a.toggleForm();
      dispatch(action2);;
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }
  
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.getKeg(id);
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = a.getKeg(selectedKeg);
    dispatch(action);
    // const selectedKeg = this.props.masterKegList[id];
    // this.setState({selectedKeg: selectedKeg, formVisibleOnPage: false});
  }
  

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  // handlePintSold = (id) => {
  //   const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  //   this.setState({selectedKeg: selectedKeg});
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    // let pintSoldButton = null;

    
    if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.props.selectedKeg} onKegSelection = {this.handleChangingSelectedKeg}/>
      buttonText = "Edit this Keg";
    } else if (this.props.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.props.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Meow";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = ( <KegList KegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} /> );
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

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);;

export default KegControl;