import { Component } from './types';

export const BeerPanel: Component = (props) => {
  const { name, style, color, alcohol, bitterness, sweetness, fullBodied, feature } = props;

  return (
    <div>
      {name}
      {style}
    </div>
  );
};
