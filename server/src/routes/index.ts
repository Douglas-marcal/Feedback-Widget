import express from 'express';
import nodemailer from 'nodemailer';
import { CREATED } from '../constants/statusHttp';
import { prisma } from '../prisma';
import { PrismaFeedbacksRepository } from '../repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from '../use-cases/submit0feedback-use-case';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5a45050f4942dc',
    pass: '3cb71433f0588f',
  },
});

routes.post('/feedbacks', async (request, response) => {
  const { comment, screenshot, type } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository);

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });
  // const email = transport.sendMail({
  //   from: 'Awesome Team <teste@teste.com>',
  //   to: 'Douglas Marçal <douglasymarcal@gmail.com>',
  //   subject: 'Novo feedback',
  //   html: [
  //     '<div style="font-family: sans-serif; font-size: 16px; color: #111">',
  //     `<p>Tipo do feedback: ${type}</p>`,
  //     `<p>Comentário: ${comment}</p>`,
  //     '</div>',
  //   ].join('\n'),
  // });

  // await Promise.all([feedback, email]);

  response.status(CREATED).send();
});
