import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { Typography } from './Typography';

interface Props {
  children?: React.ReactNode;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Typography'),
);

export default enhance(Typography);
