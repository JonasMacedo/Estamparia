import styled from 'styled-components';

export const Container = styled.header`
    
    width: 100%;
    float: left;
    padding: 20px 8%;
    background-color: #13c7ae;
    
    a{
        text-decoration: none;
        font-size: 18px;
        color: #333;
    }

    form{
        width: 30%;
        float: right;
    }

    input[type="text"]{
        width: 85%;
        float: left;
        padding: 15px 10px; 
        border-radius: 9px 0 0 9px; 
    }
    
    button{
        width: 15%;
        height: 100%;
        float: right;
        padding: 10px 5px;
        border-radius: 0 9px 9px 0;
        background-color: #0cae98;
        color: black;
        cursor: pointer;
        font-size: 21px;
    }

`;