import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { QueryParams } from 'react-yandex-maps';

import { Workbench } from './Workbench';

export interface Action {
  active: string;
  disabled: string;
  disabledBackground: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
}

export interface Background {
  default: string;
  paper: string;
}

export interface Common {
  black: string;
  white: string;
}

export interface Error {
  contrastText: string;
  dark: string;
  light: string;
  main: string;
}

export interface Primary {
  main: string;
}

export interface Secondary {
  main: string;
}

export interface Text {
  disabled: string;
  hint: string;
  primary: string;
  secondary: string;
}

export interface Palette {
  action: Action;
  background: Background;
  common: Common;
  divider: string;
  error: Error;
  primary: Primary;
  secondary: Secondary;
  text: Text;
}

export interface Theme {
  palette: Palette;
}

interface Props {
}

interface WithProps {
  query: QueryParams;
  theme: Theme;
}

export interface EnhancedProps extends Props, WithProps {
}

const enhance = compose<EnhancedProps, Props>(
  withProps(() => {
    const payload: Partial<WithProps> = {
    };

    payload.query = {
      apikey: process.env.YMAPS_SECRET_KEY,
      lang: 'ru-RU',
    };

    if (process.env.NODE_ENV === 'development') {
      payload.query.mode = 'debug';
    }

    payload.theme = {
      palette: {
        action: {
          active: 'rgba(0, 0, 0, 0.54)',
          disabled: 'rgba(0, 0, 0, 0.26)',
          disabledBackground: 'rgba(0, 0, 0, 0.12)',
          hover: 'rgba(0, 0, 0, 0.08)',
          hoverOpacity: 0.08,
          selected: 'rgba(0, 0, 0, 0.14)',
        },
        background: {
          // default: '#fafafa',
          default: '#f3f3f3',
          paper: '#fff',
        },
        common: {
          black: '#000',
          white: '#fff',
        },
        // divider: 'rgba(0, 0, 0, 0.12)',
        divider: '#eee',
        error: {
          contrastText: '#fff',
          dark: '#d32f2f',
          light: '#e57373',
          main: '#f44336',
        },
        primary: {
          main: '#2196f3',
        },
        secondary: {
          main: 'rgb(225, 0, 80)',
        },
        text: {
          disabled: 'rgba(0, 0, 0, 0.38)',
          hint: 'rgba(0, 0, 0, 0.38)',
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.54)',
        },
      },
    };

    return payload;
  }),

  setDisplayName('Workbench'),
);

export default enhance(Workbench);
