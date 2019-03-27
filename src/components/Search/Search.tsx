import React from 'react';

import { EnhancedProps } from './';

export const Search = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <input
        className={props.classes.input}
        name="search"
        onBlur={props.handleBlur}
        onChange={props.handleChange}
        placeholder="поиск по объектам"
        type="text"
        value={props.value}
      />
    </div>
  );
});
