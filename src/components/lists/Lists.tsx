import React from 'react';

interface ListsProps<T, K extends string> {
  items: T[];
  sourceName: K;
  ItemComponent: React.FC<Record<K, T>>;
}

const Lists = <T extends { id: number }, K extends string>({
  items,
  sourceName,
  ItemComponent,
}: ListsProps<T, K>) => {
  return (
    <>
      {items.map(item => (
        <ItemComponent key={item.id} {...{ [sourceName]: item } as Record<K, T>} />
      ))}
    </>
  );
};

export default Lists;
