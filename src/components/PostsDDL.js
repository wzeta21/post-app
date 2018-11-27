import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const handleChanges = (addPost, { target }) => { addPost(target) }

const PostsDDL = ({ options = [], addPost }) => {
  const pos = options.map(({ key, value, text }) => ({
    key, value, text
  }));
  return <Dropdown
    scrolling
    placeholder='Select a post'
    fluid
    search
    selection
    options={pos}
    value={pos.key}
    key={pos.value}
    onChange={handleChanges.bind({}, addPost)}
  />
};

PostsDDL.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    value: PropTypes.number,
    text: PropTypes.string,
    userId: PropTypes.number,
    body: PropTypes.string
  })).isRequired,
  addPost: PropTypes.func.isRequired
}

export default PostsDDL