declare module 'react-yandex-maps' {
  import React from 'react';

  export interface ClustererOptionsParams {
    groupByCoordinates?: boolean;
    preset?: string;
  }

  export interface ClustererProps {
    options?: ClustererOptionsParams;
    instanceRef?(ref: ymaps.Clusterer | null): void;
  }

  export class Clusterer extends React.Component<ClustererProps> {
  }

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

  export class Placemark extends React.Component<PlacemarkProps> {
  }

  export interface MapStateParams {
    center?: string[] | number[];
    modules?: any;
    zoom?: number;
  }

  export interface MapOptionsParams {
    maxZoom?: number;
  }

  export interface MapProps {
    height?: number | string;
    options?: MapOptionsParams;
    state?: MapStateParams;
    width?: number | string;
    instanceRef?(ref: ymaps.Map | null): void;
    onLoad?(ref: typeof ymaps | null): void;
  }

  export class Map extends React.Component<MapProps> {
  }

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
    lang?: 'en-US' | 'en_RU' | 'ru-RU' | 'ru_UA' | 'uk_UA' | 'tr-TR';

    /**
     * List of modules to load.
     */
    load?: string;

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

  export class YMaps extends React.Component<YMapsProps> {
  }

  export interface WithYMaps {
    ymaps: typeof ymaps
  }

  export function withYMaps<T = any>(WrappedComponent: React.ComponentType<any>): React.ComponentType<T & WithYMaps>
}

