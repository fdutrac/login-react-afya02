import styled from 'styled-components';

export const NavContent = styled.nav`
    width: 100%;
    height: 70px;
    overflow: hidden;
    display: flex;
    justify-content: space-between  ;
    align-items: center;
    border-bottom: 1px solid lightgray;
    box-shadow: 3px 2px 10px lightgray;

    & img {
        width: 170px;
    }
    
    .nav-content {
        padding: 0px 15px;
        display: flex;
        width: 80%;
        font-size: 1.1rem;
        justify-content: space-around;
        & a {
            text-decoration: none;
            color: #d31c5b;
            margin-right: 5px;
        }
    }
`