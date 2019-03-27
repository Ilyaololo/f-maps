declare module 'react-yandex-maps' {
  import React from 'react';

  export interface OptionsParams {
    groupByCoordinates?: boolean;
    preset?: string;
  }

  export interface ClustererProps {
    options?: OptionsParams;
  }

  export class Clusterer extends React.Component<ClustererProps> {}

  export interface PlacemarkProps {
    geometry: string[] | number[];
  }

  export class Placemark extends React.Component<PlacemarkProps> {}

  export interface DefaultStateParams {
    center?: string[] | number[];
    zoom?: number;
  }

  export interface MapProps {
    defaultState?: DefaultStateParams;
    height?: number | string;
    width?: number | string;
  }

  export class Map extends React.Component<MapProps> {}

  /**
   * @see https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/
   */
  export interface QueryParams {
    /**
     * API key
     */
    apikey?: string;

    /**
     * The order for setting geographical coordinates
     * @default 'latlong'
     */
    coordorder?: 'latlong' | 'longlat';

    /**
     * Enables CSP mode
     * @default 'false'
     */
    csp?: 'true' | 'false';

    /**
     * Language
     * @default 'ru_RU'
     */
    lang?: 'en-US' | 'en_RU' | 'ru-RU' | 'ru_UA' |  'uk_UA' | 'tr-TR';

    /**
     * List of modules to load.
     */
    load?: 'package.full';

    /**
     * API loading mode.
     * @default release
     */
    mode?: 'release' | 'debug';

    /**
     * The namespace that the API programming components are localized in.
     */
    ns?: 'ymaps';
  }

  export interface YMapsProps {
    enterprise?: boolean;
    preload?: boolean;
    query?: QueryParams;
    version?: string;
  }

  export class YMaps extends React.Component<YMapsProps> {}
}
