import React from 'react';
import PropTypes from 'prop-types';

import './css/Brand.scss';

class Brand extends React.Component {
  render() {
    return(
      <div className="brand-header brand-container d-none d-md-flex align-items-md-center">
        <div className="navbar-brand brand-content navbar-brand-md">
          <a href="/" className="d-inline-block">
            <img
              src={ this.props.brandLogo }
              alt={ this.props.brandDescription }
              width= { this.props.widthBrand }
              height= { this.props.heightBrand }
            />
          </a>
        </div>
      </div>
    )
  }
}

Brand.propTypes = {
  brandLogo: PropTypes.string,
  brandDescription: PropTypes.string,
  widthBrand: PropTypes.number,
  heightBrand: PropTypes.number,
}

Brand.defaultProps = {
  brandLogo: 'https://i.goopics.net/92K7V.png',
  brandDescription: 'Your logo Here'
}

export default Brand;
