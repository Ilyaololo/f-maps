import React from 'react';

import Filter from 'containers/Filter';
import Landmarks from 'containers/Landmarks';

import { EnhancedProps } from './';

export const Layout = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <form onSubmit={props.handleSubmit}>
        <Filter
          options={props.options}
          values={props.values}
        />
        <Landmarks />
      </form>
    </div>
  );
});
