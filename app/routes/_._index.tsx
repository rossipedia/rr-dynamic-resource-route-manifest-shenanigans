import { href } from 'react-router';
import { useResettableFetcher } from '~/useResettableFetcher';

export default function Component() {
  const fetcher = useResettableFetcher();

  return (
    <div>
      <h1>Hello React Router</h1>

      <input
        className="input input-bordered w-full mb-4"
        type="text"
        placeholder="Type something..."
        onChange={(e) => {
          fetcher.load(
            href('/api/:username', { username: 'foo' }) +
              `?search=${encodeURIComponent(e.target.value)}`
          );
        }}
      />
      <pre>
        {fetcher.state === 'loading' && 'Loading...'}
        {fetcher.state === 'idle' && fetcher.data
          ? JSON.stringify(fetcher.data, null, 2)
          : null}
      </pre>
    </div>
  );
}
