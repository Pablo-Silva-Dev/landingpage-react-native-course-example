import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .lightTitle {
    color: ${({ theme }) => theme.colors.white100};
  }

  & .lightText {
    color: ${({ theme }) => theme.colors.silver100};
  }

  & .alignItems {
    margin: 0 auto;
    color: red;
  }
`;

export const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 56vh;
  background-color: ${({ theme }) => theme.colors.black300};
`;

export const BannerSectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1080px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const BannerSectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  padding: 40px;
  @media (max-width: 720px) {
    width: 98%;
    margin: 0 auto;
  }

  & h1 {
    font-size: ${({ theme }) => theme.sizes.huge};
  }

  & p {
    @media(max-width: 720px){
      margin-top: 40px;
    }
  }
`;

export const BannerSectionImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  padding: 16px;
  @media (max-width: 720px) {
    width: 98%;
    margin: 0 auto;
  }

  & img {
    margin: 0 auto;
  }
`;

export const IntroductionSection = styled.section``;

export const MetricsSection = styled.section``;

export const PortfolioSection = styled.section``;

export const TestimonialsSection = styled.section``;
export const FaqSection = styled.section``;
