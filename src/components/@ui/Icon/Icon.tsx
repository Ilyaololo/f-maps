import React from 'react';

import className from 'classnames';

import { EnhancedProps } from './';

export const Icon = React.memo((props: EnhancedProps) => {
  return (
    <span className={className(props.classes.root, props.className)} onClick={props.onClick} />
  );
});
