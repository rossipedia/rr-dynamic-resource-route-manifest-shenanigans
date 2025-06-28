import { Route } from './+types/api.$username';

export function loader(_: Route.LoaderArgs) {
  return {
    foo: crypto.randomUUID(),
  };
}

export async function clientLoader({
  request,
  serverLoader,
}: Route.ClientLoaderArgs) {
  await new Promise((r) => {
    const timer = setTimeout(r, 250);
    request.signal.addEventListener('abort', () => {
      clearTimeout(timer);
    });
  });

  return serverLoader();
}
