import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { Icon } from './Icon';

interface Props {
  className?: string;
  icon: string;
  onClick?(e: React.MouseEvent<any>): void;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
    height: '24px',
    width: '24px',
    '&:after': {
      background: (props: any) => `url(/img/${props.icon}.svg)`,
      content: '""',
      height: '24px',
      position: 'absolute',
      width: '24px',
    },
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Icon'),
);

export default enhance(Icon);
