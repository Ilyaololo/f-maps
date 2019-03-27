import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import { FormikBag, FormikProps, withFormik } from 'formik';
import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'containers/Workbench';

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
