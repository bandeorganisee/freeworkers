import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

import Avatar from './Avatar';
import UserInfo from './User';

import './css/profile.css';

library.add(faMapMarker);

class Profile extends React.Component {
  render() {
    return(
      <div className="card-body">
        <Avatar
          avatarImage="http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face1.jpg"
          avatarDescription="Avatar description"
        />
        <UserInfo
          firstname="Nicolas"
          lastname="Louis"
          town="Paris"
          country="Fr"
        />
      </div>
    )
  }
}

export default Profile;
