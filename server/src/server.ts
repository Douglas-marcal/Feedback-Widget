import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();
const PORT = 3333;
const CREATED = 201;

app.use(express.json());

app.post('/feedbacks', async (request, response) => {
  const { comment, screenshot, type } = request.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  response.status(CREATED).json({ data: feedback });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
