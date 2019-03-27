import React from 'react';

import Checkbox from 'components/Checkbox';

import { EnhancedProps } from './';

export const CheckboxGroup = React.memo((props: EnhancedProps) => {
  const onChange = () => {
    //
  };

  return (
    <div className={props.classes.root}>
      <Checkbox checked={false} name="" onChange={onChange} variant="primary">
        {props.label}
      </Checkbox>
      <div className={props.classes.container}>
        {props.children}
      </div>
    </div>
  );
});
