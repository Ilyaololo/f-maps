import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { Checkbox } from './Checkbox';

interface Props {
  checked?: boolean | 'mixed';
  children: React.ReactNode;
  help?: string;
  name: string;
  variant?: 'primary' | 'secondary';
  onChange(e: React.ChangeEvent<any>): void;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
    cursor: 'pointer',
    paddingBottom: '5px',
    paddingLeft: '32px',
    paddingTop: '5px',
    position: 'relative',
    userSelect: 'none',
    '& input': {
      display: 'none',
    },
    '& span': {
      color: (props) => {
        if (props.variant === 'secondary') {
          return theme.palette.action.active;
        }
      },
    },
    '& span::before': {
      background: theme.palette.background.default,
      borderRadius: '3px',
      boxShadow: `inset 0 0 0 1px ${theme.palette.action.disabled}`,
      content: '""',
      fontSize: '13px',
      fontWeight: '700',
      height: '18px',
      left: 0,
      lineHeight: '18px',
      marginTop: '-9px',
      position: 'absolute',
      textAlign: 'center',
      top: '50%',
      transition: 'all 0.3s ease',
      width: '18px',
    },
    '& input:checked + span:before': {
      background: 'url(/img/checked.png) center center no-repeat',
    },
    '& input[aria-checked="true"] + span:before': {
      background: 'url(/img/indeterminate.png) center center no-repeat',
    },
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Checkbox'),
);

export default enhance(Checkbox);
