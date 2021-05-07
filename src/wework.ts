import got from 'got';
import { WEB_HOOK } from './config';

export interface WeworkMessage {
  content: string;
  mentionedList?: string[];
}

export interface WeworkBody {
  errcode: number;
  errmsg: string;
}

export async function sendMessage({
  content,
  mentionedList = [],
}: WeworkMessage): Promise<WeworkBody> {
  const { body } = await got.post(WEB_HOOK, {
    responseType: 'json',
    json: {
      msgtype: 'text',
      text: {
        content,
        mentioned_list: mentionedList,
      },
    },
  });

  return body as WeworkBody;
}
