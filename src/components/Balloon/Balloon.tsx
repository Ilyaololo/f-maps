import React from 'react';

import { EnhancedProps } from './';

export const Balloon = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <div className={props.classes.heading}>
        <span>{props.label}</span>
      </div>
      <div className={props.classes.content}>
        <span>Адрес организации</span>
      </div>
      <div className={props.classes.footer}>
        <span>Дополнительная информация</span>
      </div>
    </div>
  );
});
