import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family:  ${({ theme }) => theme.fonts.default};;
      font-style: normal;
      src: url(https://landingpage-react-native-course-example.vercel.app/_next/static/media/slick.653a4cbb.woff) format('woff2');
      font-display: swap;
      }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.default};
    }
    
    html{
        font-family: monospace;
        scroll-behavior: smooth;
        background: ${(props) => props.theme.colors.title};
    }

    body{
        overflow-x: hidden;
        width: 100%;
        height: 100vh;
        background: ${(props) => props.theme.colors.title};
    }
    button{
        display: flex;
        justify-content: center;
        text-align: center;
        border: none;
        cursor: pointer;
        padding: 4px;
    }
    li, ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    
    .active-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 320px;
        height: 240px;
        padding: 1rem;
        background: ${(props) => props.theme.colors.element_base};
        border-radius: 4px;
        margin: 25% auto;
        h3{
            font-size: 1.24rem;
            color: ${(props) => props.theme.colors.black100}
        }
        @media(max-width: 720px){
            width: 92%;
        }
  }
  .video-modal{
      background: transparent;
      @media (max-width: 720px) {
        margin: 12px auto;
        align-self: center;
     }
  }
  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
  }
  .react-modal-overlay-video{
        background: rgba(0, 0, 0, .88);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
  }

  
   .lightTitle {
    color: ${({ theme }) => theme.colors.white100};
  }

   .lightText {
    color: ${({ theme }) => theme.colors.silver100};
  }

   .alignItems {
    margin: 0 auto;
    color: red;
  }

   .countUp {
    font-size: ${({ theme }) => theme.sizes.xhuge};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
  }

   .metricIcon {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.secondary};
  }

   .sliderArrow {
    width: 72%;
    margin: 0 auto;

    @media (max-width: 720px) {
      width: 80%;
    }
  }

 

   .headerScrolling {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.primary};
  }

   .headerNotScrolling {
    background-color: ${({ theme }) => theme.colors.black100};
  }

   .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
  }
   .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }

  .collapsibleContainer{
    color: ${({ theme }) => theme.colors.white500};
    padding: 12px;
    width: 96%;
    border-radius: 4px;
}
.openedCollapsibleContainer{
    background: ${({ theme }) => theme.colors.black100};
    font-size: ${({ theme }) => theme.sizes.medium};
    color: ${({ theme }) => theme.colors.white500};
    padding: 16px;
    font-weight: 700;
    width: 96%;
    border-radius: 4px;
}

.collapsibleContent {
      height: 80px;
    width: 96%;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.black100};
    padding: 16px;
     p {
      color: ${({ theme }) => theme.colors.white500};
      font-size: ${({ theme }) => theme.sizes.normal};
      text-align: left;
      width: 100%;
      @media (max-width: 720px) {
        font-size: ${({ theme }) => theme.sizes.small};
      }
    }
  }

  .testimonialCard{
    background: -webkit-linear-gradient(13deg, rgb(31, 31, 31), rgb(255, 0, 72));
    background: linear-gradient(13deg, rgb(31, 31, 31), rgb(255, 0, 72));
  }

  .nextImage{
    margin: 0 auto;
    @media (max-width: 720px) {
        margin: 0 auto;
      }
  }


    
`;
