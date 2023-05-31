import { Util } from './types';

export const getDivisionRecord: Util = (args) => {
  const { params } = args;
  const division = params?.division;

  if (division === undefined) {
    throw new Error('division not defined');
  }

  if (typeof division === 'object') {
    throw new Error('division not defined');
  }

  return { division: division };
};
