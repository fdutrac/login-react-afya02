import styled from 'styled-components';

export const CardContent = styled.div`
    border-radius: 22px;
    background: #e2e2e2;
    padding: 22px;

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