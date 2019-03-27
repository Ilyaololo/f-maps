import React from 'react';

import { Clusterer, Placemark } from 'react-yandex-maps';

import { EnhancedProps } from './';

export const Landmarks = React.memo((props: EnhancedProps) => {
  return (
    <Clusterer options={props.innerProps}>
      {props.value.map(node => (
        <Placemark key={`placemark-${node.id}`} geometry={node.coords} />
      ))}
    </Clusterer>
  );
});
