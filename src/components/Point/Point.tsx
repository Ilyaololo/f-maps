import React from 'react';

import { Placemark } from 'react-yandex-maps';

import { EnhancedProps } from './';

export const Point = React.memo((props: EnhancedProps) => {
  return (
    <Placemark
      geometry={props.coords}
      modules={props.modules}
      options={props.options}
      properties={props.innerProps.properties}
    />
  );
});
