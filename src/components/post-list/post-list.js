import React from 'react';
import {ListGroup} from 'reactstrap';
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const{id, ...itemPorps} = item
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemPorps}/>
            </li>
        )
    });
    
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
            
    )
}

export default PostList;