import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const [buttonFocused, setButtonFocused] = React.useState(false);

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const buttonFocusStyle = {
        display: 'block',
        marginLeft: '8px',
        zIndex: 1,
        minWidth: '150px',
        position: 'absolute',
        left: 0
    };
    const buttonNormalStyle = { 
        display: 'none', 
        marginLeft: '8px', 
        zIndex: 1, 
        minWidth: '150px', 
        position: 'absolute',
        left: 0
    };
    
    return (
        <>
            {/* <div style={{ margin: 0, padding: 0, paddingLeft: 0, display: 'inline-block'}}>
                <button onClick={() => { setButtonFocused(!buttonFocused); }}>Entries</button>
                <nav style={buttonFocused ? buttonFocusStyle : buttonNormalStyle}>
                    <ul style={{listStyleType: 'none'}}>
                        <li><a href="#">asdf</a></li>
                        <li><a href="#">asdf</a></li>
                        <li><a href="#">asdf</a></li>
                    </ul>
                </nav>
            </div> */}
            <ul style={{ listStyleType: 'none', margin: 0, padding: '8px', paddingLeft: 0, display: 'inline-block' }}>
                {pageNumbers.map(number => (
                    <li key={number}
                        style={{ float: 'left', padding: '12px', border: '1px solid', borderColor: 'gainsboro' }}>
                        <a onClick={() => paginate(number)}
                            href='!#'
                            style={{ textDecoration: 'none', color: '#000' }}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </>
    );
};

export default Pagination;
