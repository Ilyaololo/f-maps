import React from 'react';

import Checkbox from 'components/Checkbox';

import { EnhancedProps } from './';

export const CheckboxGroup = React.memo((props: EnhancedProps) => {
  const onChange = () => {
    //
  };

  return (
    <div className={props.classes.root}>
      <div className={props.classes.title}>
        <Checkbox checked={props.checked} name="" onChange={onChange} variant="primary">
          {props.label}
        </Checkbox>
      </div>
      <div className={props.classes.container}>
        {props.children}
      </div>
    </div>
  );
});
