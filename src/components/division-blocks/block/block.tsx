import { BlockComponent as Component } from '../types';

export const Block: Component = (props) => {
  const { text, backgroundColor, left, right, width, height } = props;
  return (
    <li>
      <a href="#">{text}</a>

      <style jsx>{`
        color: #fff;
        background-color: ${backgroundColor};
        left: ${left};
        right: ${right};
        width: ${width};
        height: ${height};
      `}</style>
    </li>
  );
};
