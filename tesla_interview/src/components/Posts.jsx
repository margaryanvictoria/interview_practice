import React from 'react';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul style={{ margin: 0, padding: 0, minHeight: '16em'}}>
            {posts.map(post => (
                <li key={post.id}
                    style={{listStyle: 'none', paddingLeft: '5px', border: '1px solid', borderColor: 'gainsboro'}}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}

export default Posts;