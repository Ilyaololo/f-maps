import React from 'react';

import { Map } from 'react-yandex-maps';

import Layout from 'containers/Layout';

import { EnhancedProps } from './';

export const Scaffold = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <div className={props.classes.container}>
        <Map
          height={props.innerProps.height}
          instanceRef={props.instanceRef}
          state={props.innerProps.state}
          width={props.innerProps.width}
        >
          <Layout onUpdate={props.onUpdate} />
        </Map>
      </div>
    </div>
  );
});
