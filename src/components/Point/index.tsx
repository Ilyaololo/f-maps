import React from 'react';
import ReactDOM from 'react-dom/server';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { PlacemarkOptionsParams, PlacemarkPropertiesParams } from 'react-yandex-maps';

import withStyles, { ThemeProvider, WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import Balloon from 'components/Balloon';

import { Point } from './Point';

interface Props {
  coords: number[];
  items: any;
  modules: string[];
  options: PlacemarkOptionsParams;
}

interface WithProps {
  innerProps: {
    properties: PlacemarkPropertiesParams;
  };
}

export interface EnhancedProps extends Props, WithProps, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
  },
});

const enhance = compose<EnhancedProps, Props>(
  withProps((props: Props) => {
    const payload: Partial<WithProps> = {
    };

    payload.innerProps = {
      properties: {
        balloonContent: ReactDOM.renderToStaticMarkup((
          <Balloon
            label={props.items.label}
          />
        )),
        // hintContent: props.items.label,
      },
    };

    return payload;
  }),

  withStyles(styles),

  setDisplayName('Point'),
);

export default enhance(Point);
