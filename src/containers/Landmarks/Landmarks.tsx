import React from 'react';

import { Clusterer, Placemark } from 'react-yandex-maps';

import { EnhancedProps } from './';

export const Landmarks = React.memo((props: EnhancedProps) => {
  return (
    <Clusterer options={props.options}>
      {/*<div>
        {props.options.map(node => Array.isArray(node.items) && node.items.map(inode => (
          <Placemark key={`placemark-${inode.id}`} geometry={inode.coords} />
        )))}
      </div>*/}
    </Clusterer>
  );
});
