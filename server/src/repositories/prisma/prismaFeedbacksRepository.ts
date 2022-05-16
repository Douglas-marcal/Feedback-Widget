import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepository } from '../feedbacksRepository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  // eslint-disable-next-line class-methods-use-this
  async create(data: FeedbackCreateData) {
    const { comment, type, screenshot } = data;

    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
