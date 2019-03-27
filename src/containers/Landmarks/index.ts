import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { OptionsParams } from 'react-yandex-maps';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'containers/Workbench';

import { Landmarks } from './Landmarks';

interface Props {
  value: any[];
}

interface WithProps {
  innerProps: OptionsParams;
}

export interface EnhancedProps extends Props, WithProps, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
  },
});

const enhance = compose<EnhancedProps, Props>(
  withProps(() => {
    const payload: Partial<WithProps> = {
    };

    payload.innerProps = {
      groupByCoordinates: true,
    };

    return payload;
  }),

  withStyles(styles),

  setDisplayName('Landmarks'),
);

export default enhance(Landmarks);
