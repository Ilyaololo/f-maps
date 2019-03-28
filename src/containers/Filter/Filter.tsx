import React from 'react';

import Dataset from 'components/Dataset';
import Search from 'components/Search';

import { EnhancedProps } from './';

export const Filter = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <Search
        handleBlur={props.handleBlur}
        handleChange={props.handleChange}
        setFieldValue={props.setFieldValue}
        value={props.values.search}
      />
      <Dataset
        options={props.options}
        setFieldValue={props.setFieldValue}
        value={props.values}
      />
    </div>
  );
});
