import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'containers/Workbench';

import { Search } from './Search';

interface Props {
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  input: {
    border: `1px solid ${theme.palette.action.disabled}`,
    borderRadius: '5px',
    boxSizing: 'border-box',
    height: '32px',
    outline: '0.1px solid transparent',
    padding: '0 8px',
    transition: 'all 100ms ease-in-out',
    width: '100%',
    '&:focus': {
      outline: `0.1px solid ${theme.palette.action.disabled}`,
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '15px',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Search'),
);

export default enhance(Search);
