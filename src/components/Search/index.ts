import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { Search } from './Search';

interface Props {
  value: string;
  handleBlur(e: React.FocusEvent<any>): void;
  handleChange(e: React.ChangeEvent<any>): void;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  input: {
    border: '1px solid transparent',
    borderRadius: '2px',
    boxSizing: 'border-box',
    color: theme.palette.common.black,
    fontFamily: '"Noto Sans", sans-serif',
    fontSize: '1.5em',
    height: '44px',
    lineHeight: '44px',
    outline: 'none',
    padding: '0 12px',
    transition: 'all 100ms ease-in-out',
    width: '100%',
    '&:focus': {
      outline: 'none',
    },
    '&::-webkit-input-placeholder': { // Chrome/Opera/Safari
      color: theme.palette.common.black,
      fontSize: '1.2rem',
      opacity: 0.42,
    },
    '&::-moz-placeholder': { // Firefox 19+
      color: theme.palette.common.black,
      fontSize: '1.2rem',
      opacity: 0.42,
    },
    '&:-ms-input-placeholder': { //  IE 10+
      color: theme.palette.common.black,
      fontSize: '1.2rem',
      opacity: 0.42,
    },
    '&:-moz-placeholder': { //  Firefox 18-
      color: theme.palette.common.black,
      fontSize: '1.2rem',
      opacity: 0.42,
    },
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '15px',
    position: 'relative',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Search'),
);

export default enhance(Search);
