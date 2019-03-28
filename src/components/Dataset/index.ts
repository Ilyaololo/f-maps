import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { FormValues } from 'containers/Layout';

import { Theme } from 'helpers/theme';

import { Dataset } from './Dataset';

interface Props {
  options: any[];
  value: FormValues;
  setFieldValue(field: string, value: any): void;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  collapsed: {
  },
  root: {
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Dataset'),
);

export default enhance(Dataset);
