import { useCallback, useState } from 'react';
import { useFetcher } from 'react-router';

type FetcherWithReset<T> = ReturnType<typeof useFetcher<T>> & {
  reset: () => void;
};

export function useResettableFetcher<T>(): FetcherWithReset<T> {
  const [key, setKey] = useState(() => crypto.randomUUID());
  const reset = useCallback(() => setKey(crypto.randomUUID()), []);
  const fetcher = useFetcher<T>({ key });
  return { ...fetcher, reset };
}
