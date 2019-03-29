import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { MapOptionsParams, MapStateParams, withYMaps, WithYMaps } from 'react-yandex-maps';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { Scaffold } from './Scaffold';

interface Props {
}

interface WithProps {
  innerProps: {
    options: MapOptionsParams,
    state: MapStateParams,
    height: string;
    width: string;
  };
  onUpdate(): void;
  instanceRef(ref: ymaps.Map | null): void;
}

export interface EnhancedProps extends Props, WithYMaps, WithProps, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  '@import': 'url("https://fonts.googleapis.com/css?family=Noto+Sans")' as any,
  container: {
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  root: {
    // ymaps container
    height: '780px',
    width: '1320px',

    fontFamily: '"Noto Sans", sans-serif',
    fontSize: '15px',
    margin: '0 auto',
    overflow: 'hidden',
    padding: '15px 25px',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withYMaps,

  withProps((props: Props & WithYMaps) => {
    const [instanceRef, setInstanceRef] = React.useState<ymaps.Map | null>(null);

    const payload: Partial<WithProps> = {
    };

    payload.innerProps = {
      height: '100%',
      options: {
        maxZoom: 17,
      },
      state: {
        center: [53.339953, 83.740041],
        zoom: 15,
      },
      width: '100%',
    };

    payload.instanceRef = (ref: ymaps.Map | null) => {
      if (ref) {
        setInstanceRef(ref);
      }
    };

    payload.onUpdate = () => {
      if (instanceRef) {
        const bounds = instanceRef.geoObjects.getBounds();

        if (bounds) {
          instanceRef.setBounds(bounds);
        }
      }
    };

    return payload;
  }),

  withStyles(styles),

  setDisplayName('Scaffold'),
);

export default enhance(Scaffold);
