import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';


function KegList(props){

  return (
    <React.Fragment>
      <hr />
      {Object.values(props.KegList).map((keg) => {
        return <Keg
          whenKegClicked = { props.onKegSelection }
          beer={ keg.beer }
          dateTapped={ keg.dateTapped }
          brand={keg.brand}
          style={keg.style}
          pricePerPint={keg.pricePerPint}
          alcoholContent={keg.alcoholContent}
          pintsLeft={ keg.pintsLeft }
          id={ keg.id }
          key={ keg.id } />
      })}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;