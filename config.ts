import { Message } from "mirai-js";

export default {
  target: 123,
  msg: (): Message => {
    return new Message().addPlain('test')
  },
  startCronString: '0 34 22 * * *',
  msRemaindInterval: 1E4 * 10,
  bot: {
    baseUrl: 'http://foo.bar',
    qq: 123,
    verifyKey: '456'
  }
}