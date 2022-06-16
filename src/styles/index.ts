import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

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

  & .countUp {
    font-size: ${({ theme }) => theme.sizes.xhuge};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
  }

  & .metricIcon {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & .sliderArrow {
    width: 72%;
    margin: 0 auto;

    @media (max-width: 720px) {
      width: 80%;
    }
  }

  & .collapsibleContent {
    padding: 8px;

    & p {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: ${({ theme }) => theme.sizes.normal};
      @media (max-width: 720px) {
        font-size: ${({ theme }) => theme.sizes.small};
      }
    }
  }

  & .headerScrolling {
    position: fixed;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & .headerNotScrolling {
    background-color: ${({ theme }) => theme.colors.black100};
  }

  & .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
  }
  & .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
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
    width: 100%;
  }
`;

export const BannerSectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    margin-top: 40px;
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
  min-height: 56vh;
  background-color: ${({ theme }) => theme.colors.black400};
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
    color: ${({ theme }) => theme.colors.secondary};
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
  min-height: 32vh;
  background-color: ${({ theme }) => theme.colors.black300};
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1080px;
  @media (max-width: 720px) {
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
  background-color: ${({ theme }) => theme.colors.black400};
`;

export const TestimonialSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  justify-content: center;
  width: 1080px;
  @media (max-width: 720px) {
    width: 100%;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin: 24px auto;
  }
`;

export const FaqSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.black500};
  & h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin: 24px auto;
  }
`;

export const FaqSectionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  justify-content: center;
  width: 1080px;
  @media (max-width: 720px) {
    width: 100%;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin: 24px auto;
  }
  & button {
    width: 800px;
    margin-top: 24px;
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
  min-height: 480px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.black100};
  @media (max-width: 720px) {
    width: 96%;
  }
`;
