import React from 'react';
import PropTypes from 'prop-types';

import { Card, Icon } from 'semantic-ui-react';

const PostCard = ({ post }) => (
    <Card fluid styled>
        <Card.Content header={post.text} />
        <Card.Content description={[post.body]} />
        <Card.Content extra>
            <Icon name='user' to='/' />
            Autor
    </Card.Content>
    </Card>
);

PostCard.propTypes = {
    post: PropTypes.object
}
export default PostCard;