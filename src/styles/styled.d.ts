import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            bg: string;
            bg2: string;
            card: string;
            text: string;
            textStrong: string;
            textHero: string;
            muted: string;
            muted700: string;
            brand600: string;
            brand500: string;
            brand300: string;
            brand100: string;
            aqua: string;
            pink: string;
            ok: string;
            warn: string;
            danger: string;
            border: string;
            borderStrong: string;
        };
        radii: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        shadows: {
            s1: string;
            s2: string;
        };
        breakpoints: {
            desktop: number;
            laptop: number;
            tablet: number;
            mobile: number;
        };
    }
}
