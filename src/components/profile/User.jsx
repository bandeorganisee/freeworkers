import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'country': 'FR'}
  }

  render() {
    return(
      <div className="media-body">
        <div className="media-title">{ this.props.firstname } { this.props.lastname }</div>
        <div className="profile-location">
          <FontAwesomeIcon
            icon="map-marker"
            style={{ fontSize: '0.75rem' }}
          />
          { this.props.town }, { this.state.country }
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  town: PropTypes.string,
  country: PropTypes.string,
}

UserInfo.defaultProps = {
  firstname: 'John',
  lastname: 'Doe',
  town: 'Santa Monica',
  country: 'Fr',
}

export default UserInfo;
