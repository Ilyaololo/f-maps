import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { FormikBag, FormikProps, withFormik } from 'formik';
import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import data from 'datasets.json';

import { Layout } from './Layout';

export interface FormValues {
  /**
   * Array of selected checkboxes
   */
  groups: string[];

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

    payload.options = data;

    return payload;
  }),

  withFormik<EnhancedProps, FormValues>({
    displayName: 'Layout',

    mapPropsToValues() {
      return {
        // groups: [],
        groups: [
          'cfe5dc70-50a3-11e9-99b8-d7dbdcf0eaee',
          '1a36c0c0-505c-11e9-bf75-eb24d0a71124',
          '200e9270-505c-11e9-8b6b-59549e259a2f',
          '0e66c420-505c-11e9-9bd6-eddce10c40ab',
          '2b374600-5071-11e9-be53-3bbc7e71a705',
          '60652a40-5071-11e9-a477-5bdd63fcd957',
          '5fd67ed0-5071-11e9-87cc-d14e78404f72',
          'db827430-507b-11e9-8ddd-71902987d301',
          'e9a169e0-507b-11e9-90a5-271636b459d9',
          'fa2f8ad0-507b-11e9-a735-518cc74361b1',
          '366e0ee0-507c-11e9-a850-8df8281ab8d0',
          '479d3d60-51d2-11e9-ad43-05f28ca2a50a',
        ],
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
