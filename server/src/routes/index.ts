import express from 'express';
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailerMailAdapter';
import { CREATED } from '../constants/statusHttp';
import { PrismaFeedbacksRepository } from '../repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from '../use-cases/submit0feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (request, response) => {
  const { comment, screenshot, type } = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter,
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  response.status(CREATED).send();
});
