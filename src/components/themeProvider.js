import React from 'react';
import PropType from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import defaultTheme from './theme';
import Header from './Header';
import './styles.css';

export default function ThemeProvider({ children, theme = {}, location }) {
  return (
    <div>
      <Header location={location} />
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
        {children}
      </EmotionThemeProvider>
    </div>
  );
}

ThemeProvider.propTypes = {
  children: PropType.object,
  theme: PropType.object,
  location: PropType.object,
};
