import React from 'react';

import { ThemeProvider } from 'react-jss';
import { Map, YMaps } from 'react-yandex-maps';

import Scaffold from 'containers/Scaffold';

import { EnhancedProps } from './';

export const Workbench = React.memo((props: EnhancedProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <YMaps query={props.query}>
        <Scaffold>
          <Map
            defaultState={props.innerProps.defaultState}
            height={props.innerProps.height}
            width={props.innerProps.width}
          />
        </Scaffold>
      </YMaps>
    </ThemeProvider>
  );
});
