export const PERSONS = ['yugasun', 'p_kaiyuzeng', 'p_meilinli'];

export const WEB_HOOK = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${process.env.ROBOT_TOKEN}`;

// mili seconds
export const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

export const EXPIRE_NOTICE_DAY = '30';

export const DOMAIN_LIST = (process.env.DOMAIN_LIST || '').split(',');
