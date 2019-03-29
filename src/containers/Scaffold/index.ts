import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { MapStateParams } from 'react-yandex-maps';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { Scaffold } from './Scaffold';

interface Props {
}

interface WithProps {
  innerProps: {
    state: MapStateParams,
    height: string;
    width: string;
  };
}

export interface EnhancedProps extends Props, WithProps, WithSheet<any, any, any> {
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
  withProps((props: Props) => {
    const payload: Partial<WithProps> = {
    };

    payload.innerProps = {
      state: {
        center: [53.339953, 83.740041],
        zoom: 15,
      },
      height: '100%',
      width: '100%',
    };

    return payload;
  }),

  withStyles(styles),

  setDisplayName('Scaffold'),
);

export default enhance(Scaffold);
