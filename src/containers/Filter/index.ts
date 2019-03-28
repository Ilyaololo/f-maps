import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { FormValues } from 'containers/Layout';

import { Theme } from 'helpers/theme';

import { Filter } from './Filter';

interface Props {
  options: any[];
  values: FormValues;
  handleBlur(e: React.FocusEvent<any>): void;
  handleChange(e: React.ChangeEvent<any>): void;
  setFieldValue(field: string, value: any): void;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '3px',
    boxShadow: `0 0 5px ${theme.palette.action.disabled}`,
    left: '0px',
    margin: '25px 0px 25px 15px',
    overflow: 'hidden',
    position: 'absolute',
    top: '0px',
    width: '350px',
    zIndex: 1,
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Filter'),
);

export default enhance(Filter);
