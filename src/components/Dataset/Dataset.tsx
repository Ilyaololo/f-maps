import React from 'react';

import classNames from 'classnames';

import Scrollbars from 'react-custom-scrollbars';

import DatasetGroup from 'components/DatasetGroup';

import { EnhancedProps } from './';

export const Dataset = React.memo((props: EnhancedProps) => {
  const [collapsed, handleCollapse] = React.useState<boolean>(false);

  return (
    <div
      className={classNames(props.classes.root, {
        [props.classes.collapsed]: collapsed,
      })}
    >
      <Scrollbars
        autoHeight={true}
        autoHeightMin={640}
        autoHide={true}
        autoHideDuration={350}
        autoHideTimeout={500}
        hideTracksWhenNotNeeded={true}
      >
        {props.options.map(node => (
          <DatasetGroup
            id={node.id}
            items={node.items}
            key={`checkbox-group-${node.id}`}
            label={node.label}
            setFieldValue={props.setFieldValue}
            value={props.value}
          />
        ))}
      </Scrollbars>
    </div>
  );
});
