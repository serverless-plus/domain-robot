# 域名检测机器人

域名监控机器人，帮忙监控域名证书有效性。

## 使用

克隆项目的到本地：

```bash
$ git clone https://github.com/serverless-plus/domain-robot
```

安装依赖：

```bash
$ npm install

# 或者
$ yarn
```

## 配置

开发时，需要先将 `.env.example` 复制为 `.env` 文件，然后配置为个人账号配置：

```
TENCENT_APP_ID=123
TENCENT_SECRET_ID=123
TENCENT_SECRET_KEY=123

# 通用参数
REGION=ap-shanghai

# 企业微信机器人 webhook 密钥，https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx，推送链接的 key 值
ROBOT_TOKEN=xxx

# 需要检测的域名列表，用英文 , 分割
DOMAIN_LIST=abc.com,def.com
```

## 开发

修改代码后，可以通过执行以下命令进行测试：

```bash
$ npm run robot
```

如果不想推送真实消息，可以执行模拟命令：

```bash
$ npm run robot:mock
```

## 部署

部署层:

```bash
$ npm run deploy:layer
```

部署函数代码:

```bash
$ npm run deploy
```

## License

[MIT](./LICENSE)
