import { start } from './src/app';

interface TimerEvent {
  Type: string;
  TriggerName: string;
  Time: string;
  Message: string;
}

async function handler(event: TimerEvent, context: Record<string, any>) {
  context.callbackWaitsForEmptyEventLoop = false;
  const res = await start();
  return res;
}

module.exports.handler = handler;

export { handler };
