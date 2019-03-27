import React from 'react';

import classNames from 'classnames';

import Scrollbars from 'react-custom-scrollbars';

import Checkbox from 'components/Checkbox';
import CheckboxGroup from 'components/CheckboxGroup';

import { EnhancedProps } from './';

export const Dataset = React.memo((props: EnhancedProps) => {
  const [collapsed, handleCollapse] = React.useState<boolean>(false);

  const onChange = () => {
    //
  };

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
          <CheckboxGroup key={`group-${node.id}`} checked={false} color={node.color} label={node.label} >
            {Array.isArray(node.items) && node.items.map(inode => (
              <Checkbox key={`dataset-${inode.id}`} checked={false} name="group" onChange={onChange}>
                {inode.label}
              </Checkbox>
            ))}
          </CheckboxGroup>
        ))}
      </Scrollbars>
    </div>
  );
});
