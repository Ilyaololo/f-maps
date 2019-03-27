import React from 'react';

import classNames from 'classnames';

import Checkbox from 'components/Checkbox';
import CheckboxGroup from 'components/CheckboxGroup';
import Search from 'components/Search';

import { EnhancedProps } from './';

export const Filter = React.memo((props: EnhancedProps) => {
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
      <Search />
      {props.options.map(node => (
        <CheckboxGroup key={node.id} color={node.color} label={node.label}>
          {node.items && node.items.map(inode => (
            <Checkbox key={inode.id} checked={true} name="group" onChange={onChange}>
              {inode.label}
            </Checkbox>
          ))}
        </CheckboxGroup>
      ))}
      {/*<CheckboxGroup color="#ff2020" label="Социально-значимие объекты">
        <Checkbox checked={false} name="" onChange={() => {}}>
          Безбарьерная среда
        </Checkbox>
        <Checkbox checked={false} name="" onChange={() => {}}>
          Адреса установки пульта экстренной связи Гражданин - полиция
        </Checkbox>
        <Checkbox checked={false} name="" onChange={() => {}}>
          Список камер наружного наблюдения
        </Checkbox>
      </CheckboxGroup>*/}
    </div>
  );
});
