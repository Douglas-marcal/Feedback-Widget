import { useState } from 'react';
import { FeedbackType } from '../../constants';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {
      feedbackSent
        ? (
          <FeedbackSuccessStep
            handleRestartFeedback={() => handleRestartFeedback()}
          />
        )
        : (
          <>
            {
              !feedbackType ? (
                <FeedbackTypeStep setFeedbackType={setFeedbackType} />
              ) : (
                <FeedbackContentStep
                  feedbackType={feedbackType}
                  handleRestartFeedback={() => handleRestartFeedback()}
                  onFeedbackSent={() => setFeedbackSent(true)}
                />
              )
            }
          </>
        )
    }

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/douglas-marcal/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Douglas Marçal

        </a>
      </footer>
    </div>
  );
}
