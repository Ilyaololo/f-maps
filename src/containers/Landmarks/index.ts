import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { ClustererOptionsParams, PlacemarkOptionsParams } from 'react-yandex-maps';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { Landmarks } from './Landmarks';

interface Props {
  value: any[];
}

interface WithProps {
  innerProps: {
    clusterer: {
      options: ClustererOptionsParams;
    },
    placemark: {
      modules: string[];
      options: PlacemarkOptionsParams;
    },
  };
}

export interface EnhancedProps extends Props, WithProps, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
  },
});

const enhance = compose<EnhancedProps, Props>(
  withProps((props: Props) => {
    const payload: Partial<WithProps> = {
    };

    payload.innerProps = {
      clusterer: {
        options: {
          groupByCoordinates: false,
        },
      },
      placemark: {
        options: {
          preset: 'islands#icon',
        },
        modules: [
          'geoObject.addon.balloon',
          'geoObject.addon.hint',
        ],
      },
    };

    return payload;
  }),

  withStyles(styles),

  setDisplayName('Landmarks'),
);

export default enhance(Landmarks);
