import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
    <Card fluid styled='teal'>
        <Card.Content header={post.text} />
        <Card.Content description={[post.body]} />
        <Card.Content extra>
            <Link to={`/userform/${post.userId}`}>
                <Icon name='user' />
                Autor
            </Link>
        </Card.Content>
    </Card >
);

PostCard.propTypes = {
    post: PropTypes.object
}
export default PostCard;