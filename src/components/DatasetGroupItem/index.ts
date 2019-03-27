import React from 'react';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'containers/Workbench';

import { DatasetGroupItem } from './DatasetGroupItem';

interface Props {
  id: string;
  label: string;
  value: string[];
  setFieldValue(field: string, value: any): void;
}

interface WithProps {
  checked: boolean;
  onChange(e: React.ChangeEvent<any>): void;
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

    payload.checked = props.value.includes(props.id);

    payload.onChange = (e) => {
      const val = [...props.value];

      if (e.target.checked) {
        val.push(props.id);

        return props.setFieldValue(e.target.name, val);
      }

      props.setFieldValue(e.target.name, val.filter(node => node !== props.id));
    };

    return payload;
  }),

  withStyles(styles),

  setDisplayName('DatasetGroupItem'),
);

export default enhance(DatasetGroupItem);
