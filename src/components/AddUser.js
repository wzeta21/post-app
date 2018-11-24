import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const handleChanges = (newUser, { target: { value } }) => newUser(value);
const handleClick = addUser => addUser();

const AddUser = ({ user, updateUser, addUser }) => [
    <Input
        key='userInput'
        value={user}
        onChange={handleChanges.bind({}, updateUser)}
    />,
    <Button key='addButton' icon='add' onClick={handleClick.bind({}, addUser)} />
];

export default AddUser;