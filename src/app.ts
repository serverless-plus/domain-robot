import sslChecker from 'ssl-checker';

import './env';

import { sendMessage, WeworkBody } from './wework';
import { DOMAIN_LIST } from './config';

async function checkDomainSsl(domain: string) {
  const res = await sslChecker(domain);

  return res;
}

export async function start(): Promise<WeworkBody | string> {
  let msg = 'π εεηΆζ\n';

  for (let i = 0; i < DOMAIN_LIST.length; i++) {
    const domain = DOMAIN_LIST[i];
    const { daysRemaining, valid } = await checkDomainSsl(domain);

    msg += `εεοΌ${domain}\nε©δ½ε€©ζ°οΌ${daysRemaining}\nζ―ε¦ζζοΌ${valid ? 'ζ―' : 'ε¦'}\n\n`;
  }

  if (process.env.MOCK) {
    return msg;
  }
  const res = await sendMessage({ content: msg });
  return res;
}
