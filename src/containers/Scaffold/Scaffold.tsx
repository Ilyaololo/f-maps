import React from 'react';

import { EnhancedProps } from './';

export const Scaffold = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <div className={props.classes.container}>
        {props.children}
      </div>
    </div>
  );
});
