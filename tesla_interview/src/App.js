import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

export default function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [uri, setURI] = useState('https://jsonplaceholder.typicode.com/posts');

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            await fetch(uri)
                .then(response => response.json())
                .then(json => setPosts(json));
            setLoading(false);
        };

        fetchPosts();
    }, [uri]);

    console.log(posts);

    // Get currenet posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div style={{ marginTop: '5px', marginLeft: '10px' }}>
            <h1 style={{ marginBottom: '3px', backgroundColor: 'gainsboro' }}>A Pagination Blog</h1>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            <Posts posts={currentPosts} loading={loading} />
        </div>
    );
}
