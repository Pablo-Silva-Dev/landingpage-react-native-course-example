import { ReactNode, useState } from 'react';
import { useTheme } from 'styled-components';
import { Divider } from '../components/Elements/Divider';
import { Drawer } from '../components/Elements/Drawer';
import { DrawerButton } from '../components/Elements/DrawerButton';
import { Footer } from '../components/Elements/Footer';
import { FooterAttach } from '../components/Elements/Footer/FooterAttach';
import { FooterFirstSection } from '../components/Elements/Footer/FooterFirstSection';
import { FooterLink } from '../components/Elements/Footer/FooterLink';
import { FooterSecondSection } from '../components/Elements/Footer/FooterSecondSection';
import { FooterThirdSection } from '../components/Elements/Footer/FooterThirdSection';
import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
import { Header } from '../components/Elements/Header';
import { HeaderAuthenticationContainer } from '../components/Elements/Header/HeaderAuthenticationContainer';
import { HeaderLink } from '../components/Elements/Header/HeaderLink';
import { HeaderLinksContainer } from '../components/Elements/Header/HeaderLinksContainer';
import { HeaderLogoContainer } from '../components/Elements/Header/HeaderLogoContainer';
import { Logo } from '../components/Elements/Logo';
import { NavLink } from '../components/Elements/Nav/NavLink';
import { NavTitle } from '../components/Elements/Nav/NavTitle';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { Text } from '../components/Typography/Text';
import { Container } from './styles';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    const theme = useTheme()

    const [toggleDrawer, setToggleDrawer] = useState(false)

    function handleToggleDrawer() {
        setToggleDrawer(!toggleDrawer)
    }

    return (
        <Container>
            <Header
                style={{
                    backgroundColor: theme.colors.black100
                }}
            >
                {toggleDrawer &&
                    <Drawer
                        toggleDrawer={handleToggleDrawer}
                        direction='top'
                        style={{
                            backgroundColor: theme.colors.black100
                        }}
                    >
                        <NavLink
                            content='Quem somos'
                            url='/'
                            onClick={handleToggleDrawer}
                        />
                        <NavLink
                            content='Sobre o curso'
                            url='/'
                            onClick={handleToggleDrawer}
                        />
                        <NavLink
                            content='Adquirir curso'
                            url='/'
                            onClick={handleToggleDrawer}
                        />
                    </Drawer>
                }
                <DrawerButton
                    toggleDrawer={handleToggleDrawer}
                />
                <HeaderLogoContainer>
                    <Logo
                        imageUrl='/logo.svg'
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content='Sobre nós'
                        url='/'
                    />
                    <HeaderLink
                        content='Sobre o curso'
                        url='/'
                    />
                    <HeaderLink
                        content='Adquirir curso'
                        url='/'
                    />
                </HeaderLinksContainer>
                <HeaderAuthenticationContainer>
                    <PrimaryButton
                        title='Adquirir curso'
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
                    backgroundColor: theme.colors.black100
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
            <FooterAttach
                style={{
                    backgroundColor: theme.colors.black100,
                }}
            >
                <Divider />
                <Text
                    content='PabloSilvaDev - © Copyright  2022'
                    style={{
                        color: theme.colors.white100,
                        fontSize: theme.sizes.small
                    }}

                />
            </FooterAttach>
        </Container>
    )
}