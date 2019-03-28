import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles, { WithSheet } from 'react-jss';

import { Theme, withTheme } from 'helpers/theme';

import { Balloon } from './Balloon';

interface Props {
  label: string;
}

export interface EnhancedProps extends Props, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  content: {
    fontSize: '14px',
  },
  footer: {
    color: theme.palette.action.active,
    fontSize: '14px',
    marginTop: '5px',
  },
  heading: {
    marginBottom: '5px',
  },
  root: {
    boxSizing: 'content-box',
    color: theme.palette.common.black,
    fontFamily: '"Noto Sans", sans-serif',
    fontSize: '16px',
    lineHeight: '18px',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withTheme(),

  withStyles(styles),

  setDisplayName('Balloon'),
);

export default enhance(Balloon);
