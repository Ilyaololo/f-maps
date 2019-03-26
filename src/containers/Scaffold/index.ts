import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';
import { Theme } from 'theming';

import { Scaffold } from './Scaffold';

interface Props {
  children?: React.ReactNode;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  container: {
    height: '100%',
    width: '100%',
  },
  root: {
    // ymaps container
    height: '780px',
    width: '1320px',

    margin: '0 auto',
    padding: '15px 25px',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Scaffold'),
);

export default enhance(Scaffold);
