import Filter from 'containers/Filter';
import Landmarks from 'containers/Landmarks';
import React from 'react';

import { EnhancedProps } from './';

export const Layout = React.memo((props: EnhancedProps) => {
  const value = React.useMemo(() => {
    return props.options
      .map((node) => {
        if (!Array.isArray(node.items)) {
          return;
        }

        return node.items.filter(inode => props.values.groups.includes(inode.id));
      })
      .flat();
  }, [props.values.groups]);

  React.useEffect(() => {
    props.onUpdate();
  }, [props.values]);

  return (
    <div className={props.classes.root}>
      <form onSubmit={props.handleSubmit}>
        <Filter
          handleBlur={props.handleBlur}
          handleChange={props.handleChange}
          options={props.options}
          setFieldValue={props.setFieldValue}
          values={props.values}
        />
        <Landmarks value={value} />
      </form>
    </div>
  );
});
