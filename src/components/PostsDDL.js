import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// const handleChanges = (newPost, { target: { value } }) => newPost(value);
// const handleChanges = (event, data) => {
//   const { value } = data;
//   const { key } = data.options.find(o => o.value === value);
//   return key;
// }
const handleChanges = (addPost, ac) => console.log(ac);

const PostsDDL = ({ options = [], addPost }) => {
  //console.log(JSON.stringify(post));
  const pos = options.map(({ id: key, title: text }) => ({
    key, value: key, text
  }));
  return <Dropdown
    scrolling
    placeholder='Posts'
    fluid
    search
    selection
    options={pos}
    value={pos.id}
    key={pos.id}
    onChange={handleChanges.bind({}, addPost)}
  />
};

PostsDDL.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
    text: PropTypes.string
  })).isRequired
}

export default PostsDDL