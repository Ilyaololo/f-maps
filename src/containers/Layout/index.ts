import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { FormikBag, FormikProps, withFormik } from 'formik';
import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'containers/Workbench';

import { Layout } from './Layout';

export interface FormValues {
  /**
   * Array of selected checkboxes
   */
  groups: number[];

  /**
   * Search input value
   */
  search: string;
}

interface Props {
}

interface WithProps {
  options: any;
}

export interface EnhancedProps extends Props, WithProps, FormikProps<FormValues>, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  root: {
  },
});

const enhance = compose<EnhancedProps, Props>(
  withProps(() => {
    const payload: Partial<WithProps> = {
    };

    payload.options = [
      {
        id: 'fa195140-505b-11e9-b3eb-1702f52bc883',
        label: 'Социально-значимые объекты',
        color: '#FF2020',
        items: [
          {
            id: '1a36c0c0-505c-11e9-bf75-eb24d0a71124',
            label: 'Безбарьерная среда',
            coords: [53.339222, 83.730172],
          },
          {
            id: '200e9270-505c-11e9-8b6b-59549e259a2f',
            label: 'Адреса установки пульта экстренной связи «Гражданин - полиция»',
            coords: [53.336330, 83.744418],
          },
          {
            id: '0e66c420-505c-11e9-9bd6-eddce10c40ab',
            label: 'Список камер наружного наблюдения',
            coords: [53.342526, 83.742299],
          },
        ],
      },
    ];

    return payload;
  }),

  withFormik<EnhancedProps, FormValues>({
    mapPropsToValues() {
      return {
        groups: [],
        search: '',
      };
    },

    handleSubmit(values: FormValues, formikBag: FormikBag<EnhancedProps, FormValues>) {
      //
    },
  }),

  withStyles(styles),

  setDisplayName('Layout'),
);

export default enhance(Layout);
