import type { NextPage } from 'next'
import Head from 'next/head'
import {
  MdAccessibilityNew,
  MdOutlineHourglassBottom,
  MdOutlinePlayLesson
} from 'react-icons/md'
import { useTheme } from 'styled-components'
import { CountUpAnimation } from '../components/Animations/CountUp'
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
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  MetricsSection,
  MetricsSectionContainer,
  MetricsSectionContentContainer,
} from '../styles'
import { Container } from '../styles'

const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <Container>
      <Head>
        <title>PSD | NativePro</title>
      </Head>
      <BannerSection id='#banner'>
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
      <IntroductionSection id='#introduction'>
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
        <MetricsSectionContainer>
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
    </Container>
  )
}

export default Home
