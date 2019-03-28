declare module 'react-yandex-maps' {
  import React from 'react';

  export interface ClustererOptionsParams {
    groupByCoordinates?: boolean;
    preset?: string;
  }

  export interface ClustererProps {
    options?: ClustererOptionsParams;
  }

  export class Clusterer extends React.Component<ClustererProps> {}

  export interface PlacemarkOptionsParams {
    balloonCloseButton?: boolean;
    openEmptyBalloon?: boolean;
    preset?: any;
    zIndex?: number;
  }

  export interface PlacemarkPropertiesParams {
    balloonContent?: string;
    balloonContentBody?: string;
    balloonContentFooter?: string;
    balloonContentHeader?: string;
    hintContent?: string;
    iconCaption?: string;
    iconContent?: string;
  }

  export interface PlacemarkProps {
    geometry: string[] | number[];
    modules?: string[];
    options?: PlacemarkOptionsParams;
    properties?: PlacemarkPropertiesParams;
  }

  export class Placemark extends React.Component<PlacemarkProps> {}

  export interface MapDefaultStateParams {
    center?: string[] | number[];
    modules?: any;
    zoom?: number;
  }

  export interface MapProps {
    state?: MapDefaultStateParams;
    height?: number | string;
    width?: number | string;
    instanceRef?(ref: ymaps.Map | null): void;
  }

  export class Map extends React.Component<MapProps> {}

  /**
   * @see https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/
   */
  export interface YMapsQueryParams {
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
    query?: YMapsQueryParams;
    version?: string;
  }

  export class YMaps extends React.Component<YMapsProps> {}
}
