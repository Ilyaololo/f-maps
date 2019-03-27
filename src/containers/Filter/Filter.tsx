import React from 'react';

import Dataset from 'components/Dataset';
import Search from 'components/Search';

import { EnhancedProps } from './';

export const Filter = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <Search />
      <Dataset options={props.options} />
    </div>
  );
});
