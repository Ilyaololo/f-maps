import React from 'react';

import classNames from 'classnames';

import Checkbox from 'components/@ui/Checkbox';
import DatasetGroupItem from 'components/DatasetGroupItem';

import { EnhancedProps } from './';

export const DatasetGroup = React.memo((props: EnhancedProps) => {
  return (
    <div
      className={classNames(props.classes.root, {
        [props.classes.bordered]: !props.filtered,
      })}
    >
      {!props.filtered && (
        <div className={classNames(props.classes.col, props.classes.title)}>
          <Checkbox checked={props.checked} name="groups" onChange={props.onChange} variant="primary">
            {props.label}
          </Checkbox>
        </div>
      )}
      <div
        className={classNames(props.classes.col, {
          [props.classes.container]: !props.filtered,
        })}
      >
        {Array.isArray(props.items) && props.items.map(node => (
          <DatasetGroupItem
            id={node.id}
            key={`checkbox-${node.id}`}
            label={node.label}
            setFieldValue={props.setFieldValue}
            value={props.value}
          />
        ))}
      </div>
    </div>
  );
});
