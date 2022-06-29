import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: -webkit-linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  background: linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  padding: 40px;

`;

export const BannerSectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 120px;
  @media(max-width: 720px){
    padding:0;
  }
`;

export const BannerSectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 720px) {
    width: 98%;
    margin: -40px auto 0;
    padding: 0;
  }

  & h1 {
    font-size: ${({ theme }) => theme.sizes.huge};
    text-align: center;
  }
  
  & p {
    text-align: center;
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

export const IntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background: -webkit-linear-gradient(-28deg, rgb(255, 94, 0), rgb(255, 0, 72));
  background: linear-gradient(-28deg, rgb(255, 94, 0), rgb(255, 0, 72));
  z-index: 999;
`;

export const IntroductionSectionContainer = styled.div``;
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
  width: 1080px;
  height: 100%;
  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    text-align: center;
    @media (max-width: 720px) {
      width: 88%;
    }
  }

  & p {
    width: 540px;
    color: ${({ theme }) => theme.colors.white400};
    @media (max-width: 720px) {
      width: 88%;
    }
  }
`;

export const MetricsSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 48vh;
  background-color: ${({ theme }) => theme.colors.black300};
  z-index: 999;
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1080px;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const MetricsSectionContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;
  width: 100%;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const CountUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    color: ${({ theme }) => theme.colors.white400};
  }
`;

export const TestimonialsSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 32vh;
  background: -webkit-linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  background: linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
`;

export const TestimonialSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  justify-content: center;
  width: 1080px;
  @media (max-width: 1080px) {
    width: 100%;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 24px auto;
  }
`;

export const FaqSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
  background: -webkit-linear-gradient(-28deg, rgb(255, 94, 0), rgb(255, 0, 72));
  background: linear-gradient(-28deg, rgb(255, 94, 0), rgb(255, 0, 72));
`;

export const FaqSectionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  @media (max-width: 1080px) {
    width: 100%;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 48px auto 0;
  }
  & button {
    width: 240px;
    margin: 40px auto;
    @media (max-width: 720px) {
      width: 96%;
    }
  }
`;

export const FaqSectionCollapsableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 800px;
  width: 100%;
  min-height: 560px;
  margin: 8px auto;
  @media (max-width: 720px) {
    width: 96%;
    min-height: 640px;
  }
`;

export const PurchaseSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.black500};
  background-image: url("/3px-tile.png");

  & button {
    margin: 24px auto;
  }
`;

export const PurchaseSectionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  @media (max-width: 1080px) {
    width: 100%;
    align-items: center;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 48px auto 24px;
  }
  & p {
    width: 80%;
    text-align: center;
    margin: 24px auto;

    @media (min-width: 1080px) {
      width: 50%;
    }
  }


  & img {
    margin: 24px auto;
  }
`;
