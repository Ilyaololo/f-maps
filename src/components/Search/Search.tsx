import React from 'react';

import Icon from 'components/@ui/Icon';

import { EnhancedProps } from './';

export const Search = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <input
        className={props.classes.input}
        name="search"
        onBlur={props.handleBlur}
        onChange={props.handleChange}
        placeholder="Поиск по объектам"
        type="text"
        value={props.value}
      />
      {props.value && (
        <Icon className={props.classes.clear} icon="clear" onClick={props.onClick} />
      )}
    </div>
  );
});
