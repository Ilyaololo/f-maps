import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { YMapsQueryParams } from 'react-yandex-maps';

import { Theme, withTheme } from 'helpers/theme';

import { Workbench } from './Workbench';

interface Props {
}

interface WithProps {
  query: YMapsQueryParams;
}

export interface EnhancedProps extends Props, WithProps {
}

const enhance = compose<EnhancedProps, Props>(
  withTheme(),

  withProps(() => {
    const payload: Partial<WithProps> = {
    };

    payload.query = {
      apikey: process.env.YMAPS_SECRET_KEY,
      lang: 'ru-RU',
      load: 'util.bounds',
    };

    if (process.env.NODE_ENV === 'development') {
      payload.query.mode = 'debug';
    }

    return payload;
  }),

  setDisplayName('Workbench'),
);

export default enhance(Workbench);
