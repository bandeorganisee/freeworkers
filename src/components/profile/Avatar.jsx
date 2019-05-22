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
            width={ this.props.widthAvatar }
            height={ this.props.heightAvatar }
          ></img>
        </div>
    </div>
    );
  }
}

Avatar.propTypes = {
  avatarImage: PropTypes.string,
  avatarDescription: PropTypes.string,
  widthAvatar: PropTypes.number,
  heightAvatar: PropTypes.number,
};

Avatar.defaultProps = {
  avatarImage: 'http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face2.jpg',
  avatarDescription: 'Profile image avatar',
  widthAvatar: 38,
  heightAvatar: 38,
}

export default Avatar;
