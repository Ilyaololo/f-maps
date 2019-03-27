import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'containers/Workbench';

import { Checkbox } from './Checkbox';

interface Props {
  checked?: boolean;
  children: React.ReactNode;
  help?: string;
  mixed?: boolean;
  name: string;
  onChange: () => void;
  variant?: 'primary' | 'secondary';
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
    cursor: 'pointer',
    paddingBottom: '5px',
    paddingLeft: '27px',
    paddingTop: '5px',
    position: 'relative',
    userSelect: 'none',
    '& input': {
      display: 'none',
    },
    '& span': {
      fontWeight: (props) => {
        if (props.variant === 'primary') {
          return 'bold';
        }
      },
      textTransform: (props) => {
        if (props.variant === 'primary') {
          return 'uppercase';
        }
      },
    },
    '& span::before': {
      background: '#fbfbfb',
      borderRadius: '3px',
      boxShadow: `inset 0 0 3px 1px ${theme.palette.action.disabled}`,
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
      background: 'url(/img/checkbox.png) center center no-repeat',
    },
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Checkbox'),
);

export default enhance(Checkbox);
