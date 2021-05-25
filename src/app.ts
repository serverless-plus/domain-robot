import sslChecker from 'ssl-checker';

import './env';

import { sendMessage, WeworkBody } from './wework';
import { DOMAIN_LIST } from './config';

async function checkDomainSsl(domain: string) {
  const res = await sslChecker(domain);

  return res;
}

export async function start(): Promise<WeworkBody | string> {
  let msg = '🚀 域名状态\n';

  for (let i = 0; i < DOMAIN_LIST.length; i++) {
    const domain = DOMAIN_LIST[i];
    const { daysRemaining, valid } = await checkDomainSsl(domain);

    msg += `域名：${domain}\n剩余天数：${daysRemaining}\n是否有效：${valid ? '是' : '否'}\n\n`;
  }

  if (process.env.MOCK) {
    return msg;
  }
  const res = await sendMessage({ content: msg });
  return res;
}
