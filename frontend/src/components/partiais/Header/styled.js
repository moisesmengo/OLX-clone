import styled from 'styled-components'

export const HeaderArea = styled.div`
    background-color: #fff;
    height:60px;
    border-bottom: 1px solid #ccc;
    .container{
        max-width: 1000px;
        margin:auto;
        display:flex;
    }
    a{
        text-decoration:none;
    }
    .logo{
        flex:1;
        display:flex;
        align-items:center;
        height: 60px;

        .logo1,
        .logo2,
        .logo3,
        .logo4{
            font-size: 27px;
            font-weight:bold;
        }

        .logo1{color: #00ff}
        .logo2{color: #ff0000}
        .logo3{color: #009900}
        .logo4{color: #ff9900}
    }
    nav{
        padding-top:10px;
        padding-bottom:10px;

        ul, li{
            margin:0;
            padding:0;
            list-style:none;
        }

        ul{
            display:flex;
            align-items:center;
            height: 40px;
        }

        li{
            margin-left:20px;
            margin-right:20px;

            a{
                text-decoration:none;
                color:#000;
                font-size:14px;

                &:hover{
                    color:#999;
                }

                &.button{
                    background-color: #ff8100;
                    border-radius:4px;
                    color: #fff;
                    padding: 5px 10px;  
                }

                &.button:hover{
                    background-color:#e57706;
                }
            }
        }
    }
`