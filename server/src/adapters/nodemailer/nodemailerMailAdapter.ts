import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mailAdapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5a45050f4942dc',
    pass: '3cb71433f0588f',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  // eslint-disable-next-line class-methods-use-this
  async sendMail(data: SendMailData) {
    const { subject, body } = data;

    await transport.sendMail({
      from: 'Awesome Team <teste@teste.com>',
      to: 'Douglas Marçal <douglasymarcal@gmail.com>',
      subject,
      html: body,
    });
  }
}
