import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    
    .signup-section {
        padding: 30px 0px;
        display: flex;
        height: calc(100vh - 130px);

        .signup-text {
            flex: 1;
        }

        .signup-form {
            flex: 1;
            /* background: lightblue; */
        }
    }
    .cta-section {
        display:flex;
        height: calc(100vh - 130px);
        background: purple;
    }
`