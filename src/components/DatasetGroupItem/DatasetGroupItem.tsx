import React from 'react';

import Checkbox from 'components/@ui/Checkbox';

import { EnhancedProps } from './';

export const DatasetGroupItem = React.memo((props: EnhancedProps) => {
  return (
    <Checkbox checked={props.checked} name="groups" onChange={props.onChange} variant="secondary">
      {props.label}
    </Checkbox>
  );
});
