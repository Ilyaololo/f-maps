import React from 'react';

import { ThemeProvider } from 'react-jss';
import { YMaps } from 'react-yandex-maps';

import Scaffold from 'containers/Scaffold';

import { EnhancedProps } from './';

export const Workbench = React.memo((props: EnhancedProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <YMaps query={props.query}>
        <Scaffold />
      </YMaps>
    </ThemeProvider>
  );
});
