import React from 'react';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import withProps from 'recompose/withProps';

import withStyles, { WithSheet } from 'react-jss';

import { Theme } from 'helpers/theme';

import { DatasetGroup } from './DatasetGroup';

interface Props {
  filtered: boolean;
  id: string;
  items: any[];
  label: string;
  value: string[];
  setFieldValue(field: string, value: any): void;
}

interface WithProps {
  checked?: boolean | 'mixed';
  onChange(e: React.ChangeEvent<any>): void;
}

export interface EnhancedProps extends Props, WithProps, WithSheet<any, any, any> {
}

const styles = (theme: Theme) => ({
  bordered: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: '15px',
    paddingTop: '15px',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    marginLeft: '25px',
    paddingTop: '5px',
  },
  root: {
    // background: `linear-gradient(to top, ${theme.palette.divider} 0%, ${theme.palette.common.white} 50%)`,
    borderLeft: '4px solid transparent',
    paddingLeft: '15px',
    paddingRight: '35px',
    '&:first-child': {
      paddingTop: '15px',
    },
    '&:last-child': {
      paddingBottom: '15px',
    },
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withProps((props: Props) => {
    const payload: Partial<WithProps> = {
    };

    const filtered = props.items.filter(node => props.value.includes(node.id));

    payload.checked = false;
    if (filtered.length === props.items.length) {
      // if props.value has all entries
      payload.checked = true;
    } else if (filtered.length < props.items.length && filtered.length > 0) {
      // if props.value has more that one entries
      payload.checked = 'mixed';
    }

    payload.onChange = (e) => {
      const val = [...props.value];

      if (e.target.checked) {
        props.items.forEach((node) => {
          if (!val.includes(node.id)) {
            val.push(node.id);
          }
        });

        return props.setFieldValue(e.target.name, val);
      }

      // delete all id from a props.items in val array
      props.setFieldValue(e.target.name, val.filter(node => !props.items.map(({ id }) => id).includes(node)));
    };

    return payload;
  }),

  withStyles(styles),

  setDisplayName('DatasetGroup'),
);

export default enhance(DatasetGroup);
