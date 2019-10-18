import React from 'react';
import { useAsyncCache } from 'use-async-cache';

import { cache } from '@/api/cache';

export const Element = () => {
  const { cached } = useAsyncCache({
    id: '1',
    api: cache.fetch,
  });
  return <span>{cached && cached.data}</span>;
};
