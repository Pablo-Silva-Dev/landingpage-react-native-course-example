import type { NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'styled-components'
import { NextImage } from '../components/Next/NextImage'
import { GradientText } from '../components/Typography/GradientText'
import { SubTitle } from '../components/Typography/SubTitle'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'
import {
  BannerSection,
  BannerSectionContainer,
  BannerSectionImageContainer,
  BannerSectionTitleContainer
} from '../styles'
import { Container } from '../styles'

const Home: NextPage = () => {

  const theme = useTheme()

  return (
    <Container>
      <Head>
        <title>PSD | React Native Course</title>
      </Head>
      <BannerSection>
        <BannerSectionContainer>
          <BannerSectionTitleContainer>
            <GradientText
              direction='left-to-right'
              initialColor={theme.colors.primary}
              finalColor={theme.colors.secondary}
              content='Aprenda React Native com profissionais!'
            />
            <Text
              content='Inicie hoje mesmo sua carreira como desenvolvedor a tenha acesso as melhores oportunidades do mercado de desenvolvimento mobile.'
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
    </Container>
  )
}

export default Home
