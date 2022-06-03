/* eslint-disable @typescript-eslint/no-empty-function */
import { SubmitFeedbackUseCase } from './submitFeedback-use-case';

describe('Submit feedback', () => {
  const createFeedbackSpy = jest.fn();
  const sendMailSpy = jest.fn();

  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
  );

  it('should be able to submit feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,klsadjkisdajidsniosda',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,klsadjkisdajidsniosda',
    })).rejects.toThrowError('Type is required');
  });

  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,klsadjkisdajidsniosda',
    })).rejects.toThrowError('Comment is required');
  });

  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'bugged',
      screenshot: 'test.png',
    })).rejects.toThrowError('Invalid screenshot format');
  });
});
