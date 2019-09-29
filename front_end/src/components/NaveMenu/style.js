import styled from 'styled-components';

export const Container = styled.nav`

    width: 100%;
    float: left;
    background-color: #333;
    padding: 18px 8%;

    @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

    
    ul{
        list-style: none;
    }
    
    li{
        float: left;
        padding: 10px;
    }
    
    a{
        text-decoration: none;
        color: gray;
    }

    a:hover{
        color: white;
    }

    div{
        float: right;
        color: #fff;
        margin-left: 12px;
    }

    div a {
        float: left;
        color: #fff;
        margin-left: 12px;
    }
    
    .btn-facebook:hover{
        color: #3b5998;
        transform: translateY(-5px); 
    }
    .btn-twitter:hover{
        color: #54a4d6;
        transform: translateY(-5px); 
    }
    .btn-instagram:hover{
        color: red;
        transform: translateY(-5px); 
    
`;
