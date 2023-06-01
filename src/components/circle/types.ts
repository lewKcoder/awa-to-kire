type Props = {
  type: string;
  href: string;
  text?: string;
  src?: string;
  alt?: string;
};

export type Component = React.FunctionComponent<Props>;
