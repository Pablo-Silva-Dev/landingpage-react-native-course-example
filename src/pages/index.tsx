import type { NextPage } from 'next'
import Head from 'next/head'
import {
  MdAccessibilityNew,
  MdArrowUpward,
  MdOutlineHourglassBottom,
  MdOutlinePlayLesson
} from 'react-icons/md'
import { useTheme } from 'styled-components'

import { CountUpAnimation } from '../components/Animations/CountUp'
import { CardSlider } from '../components/Elements/CardSlider'
import { NextImage } from '../components/Next/NextImage'
import { GradientText } from '../components/Typography/GradientText'
import { SubTitle } from '../components/Typography/SubTitle'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'
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
  TestimonialSectionContainer,
  TestimonialsSection,
} from '../styles'
import { Container } from '../styles'

import { profiles } from '../data/data'
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import { CollapsibleInfo } from '../components/Elements/CollapsibleInfo'
import { PrimaryButton } from '../components/Elements/PrimaryButton'

const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <Container>
      <Head>
        <title>PSD | NativePro</title>
      </Head>

      <BannerSection id='banner'>
        <BannerSectionContainer>
          <BannerSectionTitleContainer>
            <GradientText
              direction='left-to-right'
              initialColor={theme.colors.primary}
              finalColor={theme.colors.secondary}
              content='NativePro | Aprenda React Native com profissionais!'
            />
            <Text
              content='Inicie hoje mesmo sua carreira como desenvolvedor e tenha acesso às melhores oportunidades do mercado de desenvolvimento mobile.'
              className='lightText'
            />
          </BannerSectionTitleContainer>
          <BannerSectionImageContainer>
            <NextImage
              imgUrl='/phone1.png'
              height={640}
              width={320}
            />
          </BannerSectionImageContainer>
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection id='introduction'>
        <IntroductionSectionContainer>
          <IntroductionSectionContentContainer>
            <SubTitle
              content='Por que eu deveria aprender React Native?'
            />
            <Text
              content='O mercado de desenvolvimento de aplicativos móveis está cada vez mais em alta. Segundo uma pesquisa realizada no Linkedin, o mercado brasileiro irá de precisar de mais 200 mil novos profissionais até 2025.'
            />
            <Text
              content='Se você tem o desejo de entrar para o mercado de desenvolvimento mobile, ou se você já é desenvolvedor e deseja aprimorar seus conhecimentos e  habilidades, o NativePro foi feito para você!'
            />
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <MetricsSection>
        <MetricsSectionContainer id="metrics">
          <MetricsSectionContentContainer>
            <CountUpContainer>
              <CountUpAnimation
                start={0}
                end={97}
                duration={1}
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
              <CountUpAnimation
                start={12}
                end={182}
                duration={2}
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
              <CountUpAnimation
                start={12}
                end={455}
                duration={3}
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
                cardStyle={{ backgroundColor: theme.colors.black100 }}
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
              content='Sim o acesso ao curso é vitalício.'
              contentContainerClassName='collapsibleContent'
              titleStyle={{ color: theme.colors.white100 }}
            />
            <CollapsibleInfo
              title='De onde posso acessar o curso?'
              content='Você pode acessar o curso de qualquer dispositivo com conexão com a interface.'
              contentContainerClassName='collapsibleContent'
              titleStyle={{ color: theme.colors.white100 }}

            />
            <CollapsibleInfo
              title='Vou ter suporte para dúvidas?'
              content='Sim. Você tera direito a suporte de segunda à sexta, exceto feriados.'
              contentContainerClassName='collapsibleContent'
              titleStyle={{ color: theme.colors.white100 }}

            />
            <CollapsibleInfo
              title='Existe um grupo de apoio?'
              content='Sim. Ao adquirir o curso, você terá livre acesso ao nosso grupo do Whatsapp.'
              contentContainerClassName='collapsibleContent'
              titleStyle={{ color: theme.colors.white100 }}

            />
            <CollapsibleInfo
              title='Posso pedir reembolso?'
              content='Sim. Caso você não goste do curso por qualquer motivo, você tem 7 dias úteis para pedir reembolso.'
              contentContainerClassName='collapsibleContent'
              titleStyle={{ color: theme.colors.white100 }}
            />
          </FaqSectionCollapsableContainer>
          <PrimaryButton
            title='Adquirir curso'
            onClick={() => { }}
          />
        </FaqSectionSectionContainer>
      </FaqSection>
    </Container>
  )
}

export default Home
