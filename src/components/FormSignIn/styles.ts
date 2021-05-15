import styled from 'styled-components';

export const FormSignInContent = styled.div`
    width:400px;
    min-height: 550px;
    background: #e2e2ee;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items:center;

    & form {
        display: grid;

        & input {
            width:100%;
            height: 18px;
            margin: 5px 0;
            border:0;
            padding: 8px;
            &:focus {
                outline-color: red;
        }
            
        }
        & button {
            width:50%;
            margin: 5px auto;
            background: green;
            border: none;
            border-radius: 22px;
            font-weight: bold;
            color: white;
            height: 30px;
            transition: 0.3s;
        }
        & button:hover {
            background: darkgreen;
            width: 52%
        }
        
    }
`
