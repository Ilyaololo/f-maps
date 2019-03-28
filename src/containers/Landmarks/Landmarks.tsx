import React from 'react';

import { Clusterer } from 'react-yandex-maps';

import Point from 'components/Point';

import { EnhancedProps } from './';

export const Landmarks = React.memo((props: EnhancedProps) => {
  return (
    <Clusterer options={props.innerProps.clusterer.options}>
      {props.value.map(node => (
        <Point
          coords={node.coords}
          items={node}
          key={`placemark-${node.id}`}
          modules={props.innerProps.placemark.modules}
          options={props.innerProps.placemark.options}
        />
      ))}
    </Clusterer>
  );
});
