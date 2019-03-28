import React from 'react';

import { Map } from 'react-yandex-maps';

import Layout from 'containers/Layout';

import { EnhancedProps } from './';

export const Scaffold = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <div className={props.classes.container}>
        <Map
          state={props.innerProps.state}
          height={props.innerProps.height}
          width={props.innerProps.width}
        >
          <Layout />
        </Map>
      </div>
    </div>
  );
});
