import { handler } from './handler';

async function start() {
  const res = await handler(
    {
      Type: 'Timer',
      TriggerName: 'EveryDay',
      Time: new Date().toISOString(),
      Message: 'Local Test',
    },
    {},
  );
  console.log(res);
}

start();
