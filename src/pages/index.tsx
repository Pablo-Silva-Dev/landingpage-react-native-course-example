import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

import Head from 'next/head'
import {
  MdAccessibilityNew,
  MdOutlineHourglassBottom,
  MdOutlinePlayLesson
} from 'react-icons/md'
import { useTheme } from 'styled-components'

import { CardSlider } from '../components/Elements/CardSlider'
import { NextImage } from '../components/Next/NextImage'
import { GradientText } from '../components/Typography/GradientText'
import { SubTitle } from '../components/Typography/SubTitle'
import { Text } from '../components/Typography/Text'
import {
  BannerSection,
  BannerSectionContainer,
  BannerSectionImageContainer,
  BannerSectionTitleContainer,
  CountUpContainer,
  FaqSection,
  FaqSectionCollapsableContainer,
  FaqSectionSectionContainer,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  MetricsSection,
  MetricsSectionContainer,
  MetricsSectionContentContainer,
  PurchaseSection,
  PurchaseSectionSectionContainer,
  TestimonialSectionContainer,
  TestimonialsSection,
} from '../styles'
import { Container } from '../styles'

import { profiles } from '../data/data'
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import { CollapsibleInfo } from '../components/Elements/CollapsibleInfo'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { RevealFlip } from '../components/Animations/RevealFlip';
import { RevealFade } from '../components/Animations/RevealFade';

const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <Container>
      <Head>
        <title>PSD | NativePro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="pablosilvadev" key="description" />
        <meta name="keywords" content="pablosilvadev " key="keywords" />
        <meta name="author" content="Pablo" />
      </Head>
      <BannerSection id='banner' >
        <video
          src="/code-video.mp4"
          autoPlay
          muted
          loop
          className='videoBackground'
          id='tech'
        />
        <BannerSectionContainer>
          <BannerSectionTitleContainer>

            <RevealFade>
              <GradientText
                direction='left-to-right'
                initialColor={theme.colors.primary}
                finalColor={theme.colors.secondary}
                content='React Native Pro'
              />
            </RevealFade>
            <RevealFade bottom>
              <Text
                content='Inicie hoje mesmo e tenha acesso às melhores oportunidades do mercado de desenvolvimento mobile.'
                className='lightText'
              />
            </RevealFade>
          </BannerSectionTitleContainer>
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection id='introduction'>
        <IntroductionSectionContainer>
          <IntroductionSectionContentContainer>
            <RevealFade>
              <SubTitle
                content='Por que eu deveria aprender React Native?'
              />
            </RevealFade>
            <RevealFade>
              <Text
                content='O mercado de desenvolvimento de aplicativos móveis está cada vez mais em alta. Segundo uma pesquisa realizada no Linkedin, o mercado brasileiro irá de precisar de mais 200 mil novos profissionais até 2025.'
              />
            </RevealFade>
            <RevealFade>
              <Text
                content='Se você tem o desejo de entrar para o mercado de desenvolvimento mobile, ou se você já é desenvolvedor e deseja aprimorar seus conhecimentos e  habilidades, o NativePro foi feito para você!'
              />
            </RevealFade>
            <RevealFade>
              <NextImage
                height='400'
                width='420'
                imgUrl='/coding.jpg'
              />
            </RevealFade>
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <MetricsSection>
        <MetricsSectionContainer id="metrics">
          <MetricsSectionContentContainer>
            <CountUpContainer>
              <CountUp
                start={0}
                end={97}
                duration={4}
                className='countUp'
              />
              <Text
                content='Horas de conteúdo'
              />
              <MdOutlineHourglassBottom
                className='metricIcon'
              />
            </CountUpContainer>
            <CountUpContainer>
              <CountUp
                start={12}
                end={182}
                duration={3}
                className='countUp'
              />
              <Text
                content='Video aulas'
              />
              <MdOutlinePlayLesson
                className='metricIcon'
              />
            </CountUpContainer>
            <CountUpContainer>
              <CountUp
                start={12}
                end={455}
                duration={4}
                className='countUp'
                prefix='+ de '
              />
              <Text
                content='Alunos impactados'
              />
              <MdAccessibilityNew
                className='metricIcon'
              />
            </CountUpContainer>
          </MetricsSectionContentContainer>
        </MetricsSectionContainer>
      </MetricsSection>
      <TestimonialsSection id='testimonials'>
        <TestimonialSectionContainer>
          <SubTitle
            content='Veja o que nossos alunos dizem'
          />
          <CardSlider
            slidesToScroll={1}
            slidesToShow={1}
            showArrows
            autoPlay
            infiniteLoop
            sliderContainerClassName='sliderArrow'
          >
            {profiles.map(profile => (
              <TestimonialCard
                key={profile.name}
                personName={profile.name}
                personPhotoUrl={profile.url}
                testimonial={profile.testimonial}
                ratings={profile.ratings}
                titleClassName='lightTitle'
                testimonialClassName='lightText'
                cardClassName='testimonialCard'
              />
            ))}
          </CardSlider>
        </TestimonialSectionContainer>
      </TestimonialsSection>
      <FaqSection id='faq'>
        <FaqSectionSectionContainer>
          <SubTitle
            content='Perguntas frequentes'
          />
          <FaqSectionCollapsableContainer>
            <CollapsibleInfo
              title='O acesso é vitalício?'
              content='Sim. O acesso ao curso é vitalício.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'
            />
            <CollapsibleInfo
              title='De onde posso acessar o curso?'
              content='Você pode acessar o curso de qualquer dispositivo com conexão com a internet.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'

            />
            <CollapsibleInfo
              title='Vou ter suporte para dúvidas?'
              content='Sim. Você tera direito a suporte de segunda à sexta, exceto feriados.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'

            />
            <CollapsibleInfo
              title='Existe um grupo de apoio?'
              content='Sim. Ao adquirir o curso, você terá livre acesso ao nosso grupo do Whatsapp.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'

            />
            <CollapsibleInfo
              title='Posso pedir reembolso?'
              content='Sim. Caso você não goste do curso por qualquer motivo, você tem 7 dias úteis para pedir reembolso.'
              contentContainerClassName='collapsibleContent'
              titleClassName='collapsibleContainer'
              openedTitleClassName='openedCollapsibleContainer'
            />
          </FaqSectionCollapsableContainer>
        </FaqSectionSectionContainer>
      </FaqSection>
      <PurchaseSection id='purchase'>
        <PurchaseSectionSectionContainer>
          <RevealFade>
            <SubTitle
              content='Satisfação garantida'
            />
          </RevealFade>
          <Text
            content='Você tem 7 dias úteis para avaliar se o curso faz sentido para você, caso contrário, devolvemos seu dinehiro.'
            className='lightText'
          />
          <RevealFlip>
            <NextImage
              height='240px'
              width='240px'
              imgUrl='/warrant_seal3.png'
              className='nextImage'
              style={{ margin: 'auto' }}
            />
          </RevealFlip>
          <PrimaryButton
            title='Adquirir curso'
            onClick={() => { }}
            style={{
              backgroundColor: theme.colors.primary
            }}
          />
        </PurchaseSectionSectionContainer>

      </PurchaseSection>
    </Container>
  )
}

export default Home
