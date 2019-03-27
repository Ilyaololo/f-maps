import React from 'react';

import { Clusterer, Placemark } from 'react-yandex-maps';

import Filter from 'containers/Filter';

import { EnhancedProps } from './';

export const Layout = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <form onSubmit={props.handleSubmit}>
        <Filter
          options={props.options}
          values={props.values}
        />
        {props.options.map(node => (
          <Clusterer key={node.id} options={{ groupByCoordinates: true }}>
            {node.items && node.items.map(inode => (
              <Placemark key={inode.key} geometry={inode.coords} />
            ))}
          </Clusterer>
        ))}
      </form>
    </div>
  );
});
