import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'containers/Workbench';

import { CheckboxGroup } from './CheckboxGroup';

interface Props {
  checked?: boolean | 'true' | 'false' | 'mixed';
  children?: React.ReactNode;
  color: string;
  label: string;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '25px',
    paddingTop: '5px',
  },
  root: {
    background: `linear-gradient(to top, ${theme.palette.divider} 0%, ${theme.palette.common.white} 50%)`,
    borderLeft: '4px solid transparent',
    padding: '25px 15px',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('CheckboxGroup'),
);

export default enhance(CheckboxGroup);
