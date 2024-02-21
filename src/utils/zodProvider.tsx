import { useEffect, useState } from 'react';
import { ZodErrorMap, z } from 'zod';
import { ZodErrorMapContext } from './zodContext';

const ZodErrorMapProvider = ({ children }: { children: any }) => {
  const [errorMap, setErrorMap] = useState(null);

  useEffect(() => {
    const customErrorMap: ZodErrorMap = (issue, ctx) => {
      if (issue?.code === 'invalid_type') {
        console.log('Set the global value or whatever here!')
        console.log('Error', issue)
        return { message: 'Invalid type - ISSUE' }
      }
      return { message: ctx?.defaultError };
    };

    setErrorMap(customErrorMap as any);
    z.setErrorMap(customErrorMap);
  }, []);

  return (
    <ZodErrorMapContext.Provider value={errorMap as any}>
      {children}
    </ZodErrorMapContext.Provider>
  );
};

export { ZodErrorMapProvider, ZodErrorMapContext };
