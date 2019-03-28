import React from 'react';

import classNames from 'classnames';

import Scrollbars from 'react-custom-scrollbars';

import DatasetGroup from 'components/DatasetGroup';

import { EnhancedProps } from './';

export const Dataset = React.memo((props: EnhancedProps) => {
  const [collapsed, handleCollapse] = React.useState<boolean>(false);

  const options = React.useMemo(() => {
    if (!props.value.search) {
      return props.options;
    }

    if (props.value.search) {
      return props.options.reduce((prev, node) => {
        if (!Array.isArray(node.items)) {
          return prev;
        }

        prev.push({
          ...node,
          items: node.items.filter((inode) => {
            const query = inode.label.toLocaleLowerCase();
            const search = props.value.search.toLocaleLowerCase();

            return query.indexOf(search) > -1;
          }),
        });

        return prev;
      }, []);
    }
  }, [props.value.search]);

  return (
    <div
      className={classNames(props.classes.root, {
        [props.classes.collapsed]: collapsed,
      })}
    >
      <Scrollbars
        autoHeight={true}
        autoHeightMin={600}
        autoHide={true}
        autoHideDuration={350}
        autoHideTimeout={500}
        hideTracksWhenNotNeeded={true}
      >
        {options.map(node => (
          <DatasetGroup
            filtered={!!props.value.search}
            id={node.id}
            items={node.items}
            key={`checkbox-group-${node.id}`}
            label={node.label}
            setFieldValue={props.setFieldValue}
            value={props.value.groups}
          />
        ))}
      </Scrollbars>
    </div>
  );
});
