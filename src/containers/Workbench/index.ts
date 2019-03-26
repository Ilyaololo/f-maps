import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { Theme } from 'theming';

import { DefaultStateParams, QueryParams } from 'react-yandex-maps';

import { Workbench } from './Workbench';

interface Props {
}

interface WithProps {
  query: QueryParams;
  theme: Theme;
  innerProps: any;
}

export interface EnhancedProps extends Props, WithProps {
}

const enhance = compose<EnhancedProps, Props>(
  withProps(() => {
    const payload: Partial<WithProps> = {};

    payload.innerProps = {
      defaultState: {
        center: [53.339953, 83.740041],
        zoom: 15,
      },
      height: '100%',
      width: '100%',
    };

    payload.query = {
      apikey: process.env.YMAPS_SECRET_KEY,
      lang: 'ru-RU',
    };

    if (process.env.NODE_ENV === 'development') {
      payload.query.mode = 'debug';
    }

    payload.theme = {
    };

    return payload;
  }),

  setDisplayName('Workbench'),
);

export default enhance(Workbench);
