import React, { ReactNode } from 'react';
import { Container } from './styles';
import { Header } from '../components/Elements/Header'
import { HeaderLogoContainer } from '../components/Elements/Header/HeaderLogoContainer';
import { Logo } from '../components/Elements/Logo';
import { HeaderLinksContainer } from '../components/Elements/Header/HeaderLinksContainer';
import { HeaderLink } from '../components/Elements/Header/HeaderLink';
import { HeaderAuthenticationContainer } from '../components/Elements/Header/HeaderAuthenticationContainer';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { useTheme } from 'styled-components';
import { Footer } from '../components/Elements/Footer';
import { FooterFirstSection } from '../components/Elements/Footer/FooterFirstSection';
import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
import { FooterLink } from '../components/Elements/Footer/FooterLink';
import { FooterSecondSection } from '../components/Elements/Footer/FooterSecondSection';
import { FooterThirdSection } from '../components/Elements/Footer/FooterThirdSection';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    const theme = useTheme()

    return (
        <Container>
            <Header
                style={{
                    backgroundColor: theme.colors.black
                }}
            >
                <HeaderLogoContainer>
                    <Logo
                        imageUrl='/logo.svg'
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content='About us'
                        url='/'
                    />
                    <HeaderLink
                        content='About the course'
                        url='/'
                    />
                    <HeaderLink
                        content='Purchase the course'
                        url='/'
                    />
                </HeaderLinksContainer>
                <HeaderAuthenticationContainer>
                    <PrimaryButton
                        title='Purchase now'
                        onClick={() => { }}
                        style={{
                            backgroundColor: theme.colors.primary
                        }}
                    />
                </HeaderAuthenticationContainer>
            </Header>
            <main>{children}</main>
            <Footer
                style={{
                    backgroundColor: theme.colors.black
                }}
            >
                <FooterFirstSection>
                    <FooterTitle
                        content='About us'
                    />
                    <FooterLink
                        content='About us'
                        url='/'
                    />
                    <FooterLink
                        content='About us'
                        url='/'
                    />
                </FooterFirstSection>
                <FooterSecondSection>
                    <FooterTitle
                        content='About us'
                    />
                    <FooterLink
                        content='About us'
                        url='/'
                    />
                    <FooterLink
                        content='About us'
                        url='/'
                    />
                </FooterSecondSection>
                <FooterThirdSection>
                    <FooterTitle
                        content='About us'
                    />
                    <FooterLink
                        content='About us'
                        url='/'
                    />
                    <FooterLink
                        content='About us'
                        url='/'
                    />
                </FooterThirdSection>

            </Footer>
        </Container>
    )
}