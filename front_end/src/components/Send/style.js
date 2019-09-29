import styled from 'styled-components';

export const Container = styled.section`

    width: 100%;
    float: left;
    background-color: #111;
    padding: 15px 8%;

    h3{
        font-size: 1.8em;
        color: #fff;
    }
    p{
        font-size: 1.2em;
        color: #fff;
    }
    form{
        width: 100%;
        float: left;
        margin-top: 10px;
    }
    form input {
        width:  40%;
        float: left;
        margin-right: 1%;
        padding: 15px 10px;
        border: 1px solid #fff;
        border-radius: 5px;
        color: purple;
    }
    button{
        width: 18%;
        background-color: #fff;
        padding: 12px 10px;
        border-radius: 5px;
        float: right;
        font-size: 16px;
        cursor: pointer;
    }

`;