import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users }) => ( 
   <ul> {
        users.map(({ name, key }) => ( 
	   <li key = { key } > { name } </li>
        ))} 
  </ul>
);

Users.propTypes = {
    users: PropTypes.array
};

export default Users;
