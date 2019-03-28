import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { Tooltip } from './Tooltip';

interface Props {
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Tooltip'),
);

export default enhance(Tooltip);
