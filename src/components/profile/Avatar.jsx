import React from 'react';
import PropTypes from 'prop-types';

import './css/avatar.css';

class Avatar extends React.Component {
  render() {
    return (
      <div className="profile-avatar">
        <div className="mr-3">
          <img
            className="rounded-circle"
            src={ this.props.avatarImage }
            alt={ this.props.avatarDescription }
          ></img>
        </div>
    </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Avatar.PropTypes = {
  avatarImage: PropTypes.string,
  avatarDescription: PropTypes.string,
};

Avatar.defaultProps = {
  avatarImage: 'http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face2.jpg',
  avatarDescription: 'Profile image avatar',
}

export default Avatar;
