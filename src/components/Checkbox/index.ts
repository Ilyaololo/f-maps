import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'containers/Workbench';

import { Checkbox } from './Checkbox';

interface Props {
  checked?: boolean | 'true' | 'false' | 'mixed';
  children: React.ReactNode;
  help?: string;
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
    paddingLeft: '32px',
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
    '& input[aria-checked="true"] + span:before': {
      background: 'url(/img/checked.png) center center no-repeat',
    },
    '& input[aria-checked="mixed"] + span:before': {
      background: 'url(/img/indeterminate.png) center center no-repeat',
    },
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Checkbox'),
);

export default enhance(Checkbox);
