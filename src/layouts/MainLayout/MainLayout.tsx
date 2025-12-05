import React from 'react';

import Container from 'components/Container';

// STYLES
import { Page, AppFooter, AppHeader } from './styles.ts';

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Page>
            <AppHeader>
                <Container aria-label="Top navigation">
                    <div className="brand">SkiBookers</div>
                </Container>
            </AppHeader>

            <main role="main">
                <Container>{children}</Container>
            </main>

            <AppFooter>
                <Container>
                    <span>© {new Date().getFullYear()} SkiBookers</span>
                    <span>Designed for bright alpine vibes</span>
                </Container>
            </AppFooter>
        </Page>
    );
};

export default MainLayout;
