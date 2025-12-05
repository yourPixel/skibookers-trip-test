// DEPENDENCIES
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// SPA
import TripDetails from 'pages/TripDetails';

// LAYOUTS
import MainLayout from 'layouts/MainLayout';

//
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, skiTheme } from 'styles/theme.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={skiTheme}>
            <GlobalStyle />
            <MainLayout>
                <TripDetails />
            </MainLayout>
        </ThemeProvider>
    </StrictMode>
);
