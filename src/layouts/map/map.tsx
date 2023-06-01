import { Japan } from '@/components/japan';
import { Circle } from '@/components/circle';
import { CommonLayouts } from '../common-layouts';

export const Map: React.FunctionComponent = () => {
  return (
    <CommonLayouts>
      <Circle type="text" href="#" text="海外" />
      <Japan />
    </CommonLayouts>
  );
};
