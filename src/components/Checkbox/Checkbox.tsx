import React from 'react';

import { EnhancedProps } from './';

export const Checkbox = React.memo((props: EnhancedProps) => {
  return (
    <label className={props.classes.root}>
      <input
        checked={props.checked}
        name={props.name}
        onChange={props.onChange}
        type="checkbox"
      />
      <span>
        {props.children}
      </span>
    </label>
  );
});
