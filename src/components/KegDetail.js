import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.beer} - {keg.dateTapped}</h3>
      <h3>{keg.brand} - {keg.style} - {keg.pricePerPint} - {keg.alcoholContent}</h3>
      <h4><em>{keg.pintsLeft}</em></h4>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onPintSold: PropTypes.func
};

export default KegDetail;