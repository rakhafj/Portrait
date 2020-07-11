import React from 'react';
import styled from 'styled-components';

const Line = styled.hr`
    width : 15%;
    border-top: 2px solid rgba(0,0,0,.4);
`

const Header = (props) => {
	return (
		<div className="mt-5 text-center">
            <h2>Our {props.category} Collection</h2>
            <Line />
        </div>
	);
};

export default Header;
