import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    float:left;
    padding: 20px 8%;

    article {
        width: 70%;
        float: left;
        padding: 0 20px 20px 0;
    }
    article h2{
        margin-bottom: 15px;
    }
    article img{
        width: 50%;
        float: left;
        border-radius: 5px;
        margin: 0 15px 15px 0;
    }
    article p{
        text-align: justify;
    }
    aside{
        float: right;
        width: 30%;
        padding: 10px 20px;
        background-color: #f5f5f5;
        border-radius: 5px;
    }
    
    aside h2{ 
        margin-bottom: 5px;
    }
    aside iframe{
        width: 100%;
        height: 250px;
        margin: 20px 0;
    }
    aside li{
        color: #777777;
        margin-bottom: 10px;
        list-style: none;
    }
    aside i{
        margin-right: 5px;
    }

`;
