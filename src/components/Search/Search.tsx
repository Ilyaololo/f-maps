import React from 'react';

import { EnhancedProps } from './';

export const Search = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <input
        className={props.classes.input}
        placeholder="поиск по объектам"
        type="text"
      />
    </div>
  );
});
