import { BloclsComponent as Component } from './types';
import { Block } from '@/components/division-blocks/block';

export const DivisionBlocks: Component = (props) => {
  const { division, items } = props;

  return (
    <ul className={`container ${division}`}>
      {items.map((item) => (
        <Block key={item.text} {...item} />
      ))}

      <style>{`
        .container {
          list-style: none;
        }
      `}</style>
    </ul>
  );
};
