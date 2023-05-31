import { Japan } from '@/components/japan';
import { Abroad } from '@/components/abroad';
import { CommonLayouts } from '../common-layouts';

export const Map: React.FunctionComponent = () => {
  return (
    <CommonLayouts>
      <Abroad />
      <Japan />
    </CommonLayouts>
  );
};
