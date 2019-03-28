import React from 'react';

import { YMaps } from 'react-yandex-maps';

import Scaffold from 'containers/Scaffold';

import { EnhancedProps } from './';

export const Workbench = React.memo((props: EnhancedProps) => {
  return (
    <YMaps query={props.query}>
      <Scaffold />
    </YMaps>
  );
});
